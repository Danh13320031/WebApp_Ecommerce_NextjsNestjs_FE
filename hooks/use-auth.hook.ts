import { authService } from "@/services/apis/auth.service";
import type { TRootState } from "@/store";
import { useState } from "react";
import { useSelector } from "react-redux";

export function useAuth() {
  const authState = useSelector((state: TRootState) => state.auth);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const logout = async () => {
    setIsLoading(true);
    setError(null);

    try {
      await authService.logout();
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return {
    user: authState.user,
    isAuthenticated: authState.isAuthenticated,
    isLoading,
    error,
    logout,
  };
}
