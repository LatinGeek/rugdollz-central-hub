import { useReadContract } from 'wagmi';
import { erc20Abi } from 'viem';

interface TokenConfig {
  address: string;
  symbol: string;
  decimals: number;
}

const TOKENS: { [key: string]: TokenConfig } = {
  RUGZ: {
    address: '0x8962F7352eb3326c15d4820f9FAD214b9327714a', // RUGZ token contract address
    symbol: 'RUGZ',
    decimals: 18
  }
};

export function useWalletService() {
  const getTokenConfig = (symbol: string): TokenConfig | null => {
    return TOKENS[symbol] || null;
  };

  const useTokenBalance = (address: string | undefined, tokenSymbol: string) => {
    const tokenConfig = getTokenConfig(tokenSymbol);

    const { data: balance, isError, isLoading } = useReadContract({
      address: tokenConfig?.address as `0x${string}`,
      abi: erc20Abi,
      functionName: 'balanceOf',
      args: [address as `0x${string}`],
    });

    const formattedBalance = balance && tokenConfig
      ? Number(balance) / Math.pow(10, tokenConfig.decimals)
      : null;

    return {
      balance: formattedBalance,
      isError,
      isLoading
    };
  };

  return {
    useTokenBalance,
    getTokenConfig
  };
} 