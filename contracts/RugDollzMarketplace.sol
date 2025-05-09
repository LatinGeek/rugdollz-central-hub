// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/**
 * @title RugDollzMarketplace
 * @dev Contract for handling in-app purchases using $RUGZ token
 */
contract RugDollzMarketplace is Ownable, Pausable, ReentrancyGuard {
    // The $RUGZ token contract
    IERC20 public immutable rugzToken;

    // Maximum number of purchases to store
    uint256 private constant MAX_PURCHASES = 1000;

    // Structure to store purchase information
    struct Purchase {
        address buyer;
        uint256 timestamp;
        string itemId;
        string description;
        uint256 amount;
    }

    // Array to store all purchases
    Purchase[MAX_PURCHASES] public purchases;
    uint256 public purchaseCount = 0;
    uint256 public purchaseIndex = 0;

    // Events
    event PurchaseMade(
        address indexed buyer,
        string itemId,
        uint256 amount,
        uint256 timestamp
    );

    event OldestPurchaseRemoved(
        address indexed buyer,
        string itemId,
        uint256 timestamp
    );

    /**
     * @dev Constructor to set the $RUGZ token address and initial owner
     * @param _rugzToken Address of the RUGZ token contract
     */
    constructor(address _rugzToken) Ownable(msg.sender) {
        require(_rugzToken != address(0), "Token address cannot be zero");
        
        // Verify the token contract exists and responds
        IERC20 tokenContract = IERC20(_rugzToken);
        require(address(tokenContract).code.length > 0, "Token contract does not exist");
        
        // Try to call a view function to verify the contract works
        try tokenContract.totalSupply() returns (uint256) {
            // Contract exists and responds correctly
            rugzToken = tokenContract;
        } catch {
            revert("Token contract is not valid ERC20");
        }
    }

    /**
     * @dev Make a purchase using $RUGZ tokens
     * @param _itemId Identifier of the item being purchased (set by app)
     * @param _description Description of the purchase (set by app)
     * @param _amount Amount of $RUGZ tokens to spend
     */
    function makePurchase(
        string calldata _itemId,
        string calldata _description,
        uint256 _amount
    ) external whenNotPaused nonReentrant {
        require(_amount > 0, "Amount must be greater than 0");
        require(bytes(_itemId).length > 0, "Item ID cannot be empty");
        require(bytes(_description).length > 0, "Description cannot be empty");

        // Check if user has enough balance
        uint256 userBalance = rugzToken.balanceOf(msg.sender);
        require(userBalance >= _amount, "Insufficient RUGZ balance");

        // Check if user has approved enough tokens
        uint256 allowance = rugzToken.allowance(msg.sender, address(this));
        require(allowance >= _amount, "Insufficient RUGZ allowance");

        // Transfer tokens from buyer to contract
        require(
            rugzToken.transferFrom(msg.sender, address(this), _amount),
            "Token transfer failed"
        );

        purchases[purchaseIndex] = Purchase({
            buyer: msg.sender,
            timestamp: block.timestamp,
            itemId: _itemId,
            description: _description,
            amount: _amount
        });

        purchaseIndex = (purchaseIndex + 1) % MAX_PURCHASES;
        if (purchaseCount < MAX_PURCHASES) {
            purchaseCount++;
        }

        emit PurchaseMade(msg.sender, _itemId, _amount, block.timestamp);
    }

    /**
     * @dev Get purchases from the last month
     * @return Purchase[] Array of purchases from the last month
     */
    function getLastMonthPurchases() external view returns (Purchase[] memory) {
        uint256 oneMonthAgo = block.timestamp - 30 days;
        uint256 count = 0;

        // First, count the number of purchases in the last month
        for (uint256 i = 0; i < purchases.length; i++) {
            if (purchases[i].timestamp >= oneMonthAgo) {
                count++;
            }
        }

        // Create an array of the correct size
        Purchase[] memory recentPurchases = new Purchase[](count);
        uint256 currentIndex = 0;

        // Fill the array with purchases from the last month
        for (uint256 i = 0; i < purchases.length && currentIndex < count; i++) {
            if (purchases[i].timestamp >= oneMonthAgo) {
                recentPurchases[currentIndex] = purchases[i];
                currentIndex++;
            }
        }

        return recentPurchases;
    }

    /**
     * @dev Get total number of purchases made
     * @return uint256 Total number of purchases
     */
    function getTotalPurchases() external view returns (uint256) {
        return purchases.length;
    }

    /**
     * @dev Withdraw accumulated $RUGZ tokens (only owner)
     */
    function withdrawTokens() external onlyOwner {
        uint256 balance = rugzToken.balanceOf(address(this));
        require(balance > 0, "No tokens to withdraw");
        require(
            rugzToken.transfer(owner(), balance),
            "Token transfer failed"
        );
    }

    /**
     * @dev Pause the contract (only owner)
     */
    function pause() external onlyOwner {
        _pause();
    }

    /**
     * @dev Unpause the contract (only owner)
     */
    function unpause() external onlyOwner {
        _unpause();
    }
} 