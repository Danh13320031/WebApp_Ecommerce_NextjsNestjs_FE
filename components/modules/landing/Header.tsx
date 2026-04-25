"use client";
import { useAuth } from "@/hooks/use-auth.hook";
import { useCart } from "@/hooks/use-cart.hook";
import { LayoutDashboard, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./header.module.scss";

export default function Header() {
  const { totalItems } = useCart();
  const { isAuthenticated, isLoading, user, logout } = useAuth();
  const router = useRouter();

  const handleDashboardClick = () => {
    if (user && user.role === "ADMIN") {
      router.push("/admin");
    } else {
      router.push("/user");
    }
  };
  const handleLogoutClick = async () => {
    await logout();
  };
  const handleLoginClick = () => {
    router.push("/auth/login");
  };

  return (
    <header className={styles.header}>
      {/* container */}
      <div className={styles.container}>
        {/* logo */}
        <Link href="/" className={styles.logo}>
          STOREFRONT
        </Link>

        {/* icon */}
        <div className={styles.actions}>
          <Link href="/cart" className={styles.cartButton}>
            <ShoppingCart color="var(--dark-gray)" size="var(--font-size-lg)" />
            {totalItems > 0 && (
              <span className={styles.badge}>{totalItems}</span>
            )}
          </Link>
          {isAuthenticated ? (
            <>
              <LayoutDashboard
                color="var(--dark-gray)"
                size="var(--font-size-lg)"
                onClick={handleDashboardClick}
              ></LayoutDashboard>
              <button
                disabled={isLoading}
                className={styles.logoutButton}
                onClick={handleLogoutClick}
              >
                {isLoading ? "Logging out..." : "Logout"}
              </button>
            </>
          ) : (
            <button className={styles.loginButton} onClick={handleLoginClick}>
              Login
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
