"use client";

import { Modal } from "@/app/components/ui/Modal";
import { StoreItem } from "@/types/Entities/store-item";
import { StorePurchaseButton } from "@/app/components/purchase/StorePurchaseButton";
import { useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { parseUnits } from "viem";
import { useEffect, useState } from "react";
import RugDollzMarketplaceABI from "@/contracts/abi/RugDollzMarketplace.json";
import tRUGZTokenABI from "@/contracts/abi/RugDollzTestToken.json";
import { sepolia } from "wagmi/chains";
import { usePurchaseService } from "@/services/purchase";

const MARKETPLACE_ADDRESS = "0x36F09F132eBf59EbB9371bC7d2bCD394E85c71F5";
const TRUGZ_TOKEN_ADDRESS = "0x0b4a965c62340E4b77BbfEDd8c59a8aBd04f5c65";
const CHAIN_ID = sepolia.id;

interface PurchaseConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (hash: string) => void;
  item: StoreItem;
  currentBalance: number;
}

function parseFriendlyErrorMessage(errorMsg: string | null): string {
  if (!errorMsg) return "An unknown error occurred during purchase.";
  if (errorMsg.includes("user rejected the request"))
    return "You rejected the transaction.";
  if (errorMsg.includes("user rejected transaction"))
    return "You rejected the transaction.";
  if (errorMsg.includes("insufficient RUGZ balance"))
    return "You do not have enough $RUGZ to complete this purchase.";
  if (errorMsg.includes("insufficient RUGZ allowance"))
    return "You need to approve more $RUGZ for spending.";
  if (errorMsg.includes("token transfer failed"))
    return "Token transfer failed. Please try again.";
  if (errorMsg.includes("execution reverted"))
    return "The transaction was reverted. Please check your balance and try again.";
  return errorMsg;
}

export function PurchaseConfirmDialog({
  isOpen,
  onClose,
  item,
  onSuccess,
  currentBalance,
}: PurchaseConfirmDialogProps) {
  const newBalance = currentBalance - item.price;
  const canAfford = currentBalance >= item.price;

  // For purchase
  const { data: purchaseHash, writeContract: writePurchase, error: purchaseRequestError } =
    useWriteContract();
  const {
    isLoading: purchaseLoading,
    isSuccess: purchaseConfirmed,
    error: purchaseError,
  } = useWaitForTransactionReceipt({ chainId: CHAIN_ID, hash: purchaseHash });

  // For approval
  const { data: allowanceHash, writeContract: writeApproveAllowance, error: allowanceRequestError } =
    useWriteContract();
  const {
    isLoading: allowanceLoading,
    isSuccess: allowanceConfirmed,
    error: allowanceError,
  } = useWaitForTransactionReceipt({ chainId: CHAIN_ID, hash: allowanceHash });

  const { createPurchase } = usePurchaseService();

  //Error Modal
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const [savePurchaseStatus, setSavePurchaseStatus] = useState<
    "pending" | "started" | "saved" | "error"
  >("pending");

  useEffect(() => {
    if (allowanceConfirmed && !purchaseHash) {
      handleMakePurchase();
    } else if (
      purchaseConfirmed &&
      purchaseHash &&
      savePurchaseStatus === "pending"
    ) {
      setSavePurchaseStatus("started");
      createPurchase(item, purchaseHash)
        .catch((error) => {
          setSavePurchaseStatus("error");
          setErrorMessage(error.message);
          setShowErrorModal(true);
        })
        .then(() => {
          setSavePurchaseStatus("saved");
          onSuccess(purchaseHash);
          onClose();
        });
    }
  }, [allowanceConfirmed, purchaseConfirmed, purchaseHash]);

  useEffect(() => {
    if (allowanceError || purchaseError || allowanceRequestError || purchaseRequestError) {
      setErrorMessage((allowanceError || purchaseError || allowanceRequestError || purchaseRequestError)?.message || null);
      setShowErrorModal(true);
    }
  }, [allowanceError, purchaseError, allowanceRequestError, purchaseRequestError]);

  const handleApproveAllowance = () => {
    const amount = parseUnits(item.price.toString(), 18);
    writeApproveAllowance({
      address: TRUGZ_TOKEN_ADDRESS as `0x${string}`,
      abi: tRUGZTokenABI,
      functionName: "approve",
      args: [MARKETPLACE_ADDRESS, amount],
    });
  };

  const handleMakePurchase = () => {
    writePurchase({
      address: MARKETPLACE_ADDRESS as `0x${string}`,
      abi: RugDollzMarketplaceABI,
      functionName: "makePurchase",
      args: [item.id, item.description, parseUnits(item.price.toString(), 18)],
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Confirm Purchase">
      <div className="space-y-4">
        <div className="bg-[rgb(var(--bg-light))] p-4 rounded-lg">
          <h3 className="text-lg font-medium text-[rgb(var(--text-primary))] mb-2">
            {item.name}
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-[rgb(var(--text-secondary))]">
                Current Balance:
              </span>
              <span className="text-[rgb(var(--text-primary))]">
                {currentBalance} $RUGZ
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-[rgb(var(--text-secondary))]">
                Item Price:
              </span>
              <span className="text-red-500">-{item.price} $RUGZ</span>
            </div>
            <div className="flex justify-between text-sm font-medium">
              <span className="text-[rgb(var(--text-secondary))]">
                New Balance:
              </span>
              <span
                className={
                  newBalance < 0
                    ? "text-red-500"
                    : "text-[rgb(var(--text-primary))]"
                }
              >
                {newBalance} $RUGZ
              </span>
            </div>
          </div>
        </div>

        {!canAfford && (
          <p className="text-red-500 text-sm">
            Insufficient balance. You need {item.price - currentBalance} more
            $RUGZ to make this purchase.
          </p>
        )}

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-[rgb(var(--text-primary))] hover:text-[rgb(var(--text-secondary))]"
          >
            Cancel
          </button>
          <StorePurchaseButton
            buttonClassName={`px-4 py-2 text-sm font-medium text-white rounded-lg ${
              canAfford
                ? "bg-[rgb(var(--primary-orange))] hover:bg-[rgb(var(--primary-orange))]/90"
                : "bg-gray-500 cursor-not-allowed"
            }`}
            disabled={!canAfford}
            isLoading={allowanceLoading || purchaseLoading}
            onClick={handleApproveAllowance}
            loadingText={
              allowanceLoading ? "Approving..." : "Confirming Purchase..."
            }
          />
        </div>
      </div>

      {/* Error Modal */}
      <Modal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
        title="Purchase Error"
      >
        <div className="text-red-500">
          {parseFriendlyErrorMessage(errorMessage?.toLowerCase() || null)}
        </div>
      </Modal>
    </Modal>
  );
}
