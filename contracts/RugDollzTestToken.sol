// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title RugDollzTestToken
 * @dev Test token for RugDollz marketplace on Sepolia network
 */
contract RugDollzTestToken is ERC20, Ownable {
    // Initial supply of 1000 tokens with 18 decimals (1000 * 10^18)
    uint256 private constant INITIAL_SUPPLY = 1000 * 10**18;
    
    // Test wallet to receive 500 tokens
    address private constant TEST_WALLET = 0x158a9e87156B6605B6f23bb8f4A8E4F47fc67f1c; // Replace with your test wallet address

    /**
     * @dev Constructor that gives the deployer and test wallet the initial supply
     */
    constructor() ERC20("RugDollz Test Token", "tRUGZ") Ownable(msg.sender) {
        // Mint initial supply
        _mint(msg.sender, INITIAL_SUPPLY);
        
        // Transfer 500 tokens to test wallet
        _transfer(msg.sender, TEST_WALLET, INITIAL_SUPPLY / 2);
        
        // Emit custom event for initial distribution
        emit InitialDistribution(msg.sender, TEST_WALLET, INITIAL_SUPPLY / 2);
    }

    /**
     * @dev Event emitted when initial token distribution occurs
     */
    event InitialDistribution(
        address indexed deployer,
        address indexed testWallet,
        uint256 amount
    );

    /**
     * @dev Returns the number of decimals used for token amounts
     */
    function decimals() public pure override returns (uint8) {
        return 18;
    }

    /**
     * @dev Mint additional tokens (only owner)
     * @param to Address to receive the tokens
     * @param amount Amount of tokens to mint
     */
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    /**
     * @dev Burns tokens from the caller's balance
     * @param amount Amount of tokens to burn
     */
    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
} 