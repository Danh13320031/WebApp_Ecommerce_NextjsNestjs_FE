import { apiClient } from "./axios.config";

export class authService {
  private static readonly ENDPOINT = "/auth";

  static async logout(): Promise<void> {
    try {
      await apiClient.post(`${this.ENDPOINT}/logout`);
    } catch (error) {
      console.error("Lỗi đăng xuất::: ", error);
    }
  }

  static async refreshToken(refreshToken: string): Promise<string | null> {
    if (!refreshToken) return null;

    try {
      const response = await apiClient.post<{ accessToken: string }>(
        `${this.ENDPOINT}/refresh`,
        {
          refreshToken,
        },
      );

      const { accessToken } = response.data;
      return accessToken;
    } catch (error) {
      console.error("Token không hợp lệ::: ", error);
      return null;
    }
  }
}
