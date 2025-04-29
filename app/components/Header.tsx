"use client";

import { useEffect, useState, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import Image from "next/image";
import { useWalletService } from "@/services/wallet";

interface HeaderProps {
  onMenuClick?: () => void;
  isOpen?: boolean;
}

export function Header({ onMenuClick, isOpen = false }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [avatarError, setAvatarError] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const { user, isAuthenticated, connect, disconnect, defaultAvatar } = useAuth();
  const { useTokenBalance } = useWalletService();
  const { balance, isLoading } = useTokenBalance(user?.address, "RUGZ");

  useEffect(() => {
    setIsMenuOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    setIsProfileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleProfileClick = () => {
    router.push(`/profile/${user?.address}`);
    setIsMenuOpen(false);
  };

  const handleMenuClick = () => {
    onMenuClick?.();
  };

  const formatAddress = (address: string) => {
    if (!address) return "";
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <header className="fixed top-0 right-0 left-0 md:left-64 z-50 bg-[rgb(var(--bg-darker))] ">
      <div className="flex items-center  h-16 px-4 justify-end">
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
            <div className="flex items-center">
              <div className="font-bold text-sm text-[rgb(var(--text-primary))]">
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                ) : (
                  balance !== null ? `${balance}` : "0"
                )}
              </div>
              <div className="ml-1 font-bold text-sm text-[rgb(var(--primary-orange))]">
                $RUGZ
              </div>
              </div>
              <div className="relative bg-[rgb(var(--bg-light))] rounded-full py-1 px-2">
                <button
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                  className="flex items-center gap-2"
                >
                  {user?.avatar ? (
                    <div className="flex items-center justify-center gap-2 ">
                      <Image
                        src={avatarError ? defaultAvatar : user.avatar}
                        alt="User Avatar"
                        width={32}
                        height={32}
                        className="rounded-full mb-0.5"
                        onError={() => {
                          setAvatarError(true);
                        }}
                      />
                      <div className="font-bold px-1 py-1 rounded-full bg-[rgb(var(--accent))] flex items-center justify-center text-white text-sm">
                        {user?.username ? user.username : formatAddress(user?.address)}
                      </div>
                    </div>
                  ) : (
                    <div className="font-bold px-3 py-1 rounded-full bg-[rgb(var(--accent))] flex items-center justify-center text-white text-sm">
                      {formatAddress(user?.address || "")}
                    </div>
                  )}
                  {isProfileMenuOpen ? (
                    <ChevronUp className="w-4 h-4 text-[rgb(var(--text-secondary))]" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[rgb(var(--text-secondary))]" />
                  )}
                </button>

                {isProfileMenuOpen && (
                  <div ref={menuRef} className="absolute right-0 mt-2 w-48 bg-[rgb(var(--bg-dark))] rounded-lg shadow-lg border border-[rgb(var(--border-dark))] py-1">
                    <div className="px-4 py-2 text-sm text-[rgb(var(--text-secondary))] border-b border-[rgb(var(--border-dark))]">
                      User Role: {user?.role || "User"}
                    </div>
                    <button
                      onClick={handleProfileClick}
                      className="w-full px-4 py-2 text-left text-sm text-[rgb(var(--text-primary))] hover:bg-[rgb(var(--bg-light))]"
                    >
                      Profile
                    </button>
                    <button
                      onClick={disconnect}
                      className="w-full px-4 py-2 text-left text-sm text-[rgb(var(--text-primary))] hover:bg-[rgb(var(--bg-light))]"
                    >
                      Disconnect
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <button
              onClick={connect}
              className="px-4 py-2 bg-[rgb(var(--primary-orange))] text-white rounded-lg hover:bg-[rgb(var(--primary-orange))]/90 transition-colors"
            >
              Connect Wallet
            </button>
          )}
          <button
            onClick={handleMenuClick}
            className="block sm:hidden p-2 text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))]"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
