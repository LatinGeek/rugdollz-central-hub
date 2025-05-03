import { User } from "@/types/Entities/user";
import { UserRole } from "@/types/enums/user-role";
import { useSignMessage } from "wagmi";

interface TokenResponse {
    token: string
    expiresIn: number
  }

export interface AuthResponse {
  user: User | null;
  message: string;
  status: number;
}
export function useAuthService() {

  const { signMessageAsync } = useSignMessage();

  const retrieveTokenFromStorage = (): string | null => {
    const token = localStorage.getItem("auth_token");
    const tokenExpiry = localStorage.getItem("auth_token_expiry");

    if (token && tokenExpiry && new Date(tokenExpiry) > new Date()) {
      return token;
    }
    return null;
  };

  const getNewToken = async (address: string): Promise<string> => {
    if (!address) throw new Error("No wallet connected");

    const message = `Authenticate to RugDollz Central Hub\nAddress: ${address}\nTimestamp: ${Date.now()}`;
    const signature = await signMessageAsync({ message });

    const authResponse = await fetch("/api/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Message": btoa(message),
        "X-Auth-Signature": signature,
        "X-Auth-Address": address.toLowerCase(),
      },
    });

    if (!authResponse.ok) {
      throw new Error("Failed to get authentication token");
    }

    const newTokenDetails: TokenResponse = await authResponse.json();

    const expiryDate = new Date(Date.now() + newTokenDetails.expiresIn * 1000);
    localStorage.setItem("auth_token", newTokenDetails.token);
    localStorage.setItem("auth_token_expiry", expiryDate.toISOString());

    return newTokenDetails.token;
  };

  const getAuthToken = async (address: string): Promise<string> => {
    const storedToken = retrieveTokenFromStorage();
    if (storedToken) {
      return storedToken;
    }
    return getNewToken(address);
  };

  const fetchAuthUserDetails = async (address: string): Promise<AuthResponse> => {
    if (!address) return {status: 401, user: null, message: "No wallet connected"};

    try {
      const token = await getAuthToken(address);
      // Fetch user details with the token
      const userResponse = await fetch(`/api/auth/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (userResponse.status == 403) {
        // If user doesn't have whitelisted NFTs, create a guest user
        const guestUser: User = createGuestUser(address);

        return {status: 200, user: guestUser, message: "No whitelisted NFTs found, Guest user created"};
      }

      if(!userResponse.ok){
        throw new Error("Failed to retrieve user details");
      }

      const userData: User = await userResponse.json();
      return {status: 200, user: userData, message: "User details retrieved"};
    } catch (error) {
      console.error("Error fetching user details:", error);
      return {status: 500, user: null, message: "Internal server error"};
    }
  };

  const createGuestUser = (address: string) => {
    const guestUser: User = {
      id: null,
      address: address,
      role: UserRole.guest,
      points: 0,
      achievements: 0,
      createdAt: null,
      updatedAt: null,
    };

    return guestUser;
  };

  return {
    retrieveTokenFromStorage,
    getAuthToken,
    fetchAuthUserDetails
  };
}
