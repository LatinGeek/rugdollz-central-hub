"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useDisconnect, useSignMessage } from "wagmi";
import { useRouter } from "next/navigation";
import { User } from "@/types/Entities/user";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";
import { useAuthService } from "@/services/auth";
import { AuthResponse } from "@/services/auth";
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
  signMessage: (message: string) => Promise<string>;
  defaultAvatar: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { open } = useAppKit();

  const defaultAvatar = "/images/sample-user-profile-images/default-user.jpg";

  const { address, isConnected } = useAppKitAccount();
  const { disconnect: disconnectWallet } = useDisconnect();
  const { signMessageAsync } = useSignMessage();
  const { fetchAuthUserDetails } = useAuthService();

  useEffect(() => {
    if (isConnected && address) {
      console.log("user is connected, fetching user details...");
      getUserDetails();

    } else {
      setUser(null);
      setIsLoading(false);
    }
  }, [isConnected, address]);

  



  const getUserDetails = async () => {
    if (!address) return;
    setIsLoading(true);
    try {
      const authResponse: AuthResponse = await fetchAuthUserDetails(address);
      if(authResponse.status != 200){
        disconnect();
      }
      setUser(authResponse.user);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching user details:", error);
      disconnect();
      setIsLoading(false);
    }
  };

  const connect = async () => {
    try {
      await open();
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };

  const disconnect = () => {
    disconnectWallet();
    setUser(null);
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_token_expiry");
    router.push("/");
  };

  const signMessage = async (message: string) => {
    if (!address) throw new Error("No wallet connected");
    return signMessageAsync({ message });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        connect,
        disconnect,
        signMessage,
        defaultAvatar,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
