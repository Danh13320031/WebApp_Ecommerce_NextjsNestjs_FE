"use client";

import Link from "next/link";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              STOREFRONT
            </Link>
            <p className={styles.description}>
              Storefront là một trang web bán hàng trực tuyến được phát triển
              bởi Bùi Pháp Danh.
            </p>
          </div>

          <div className={styles.section}>
            <h4>Cửa hàng</h4>
            <ul>
              <li>
                <Link href="/">Tất cả sản phẩm</Link>
              </li>
              <li>
                <Link href="/categories">Danh mục sản phẩm</Link>
              </li>
              <li>
                <Link href="/arrivals">Các bài phát hành</Link>
              </li>
              <li>
                <Link href="/deals">Các khóa khuyến mãi</Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Hỗ trợ</h4>
            <ul>
              <li>
                <Link href="/">Trung tâm trợ giúp</Link>
              </li>
              <li>
                <Link href="/">Liên hệ với chúng tôi</Link>
              </li>
              <li>
                <Link href="/">Thông tin mua hàng</Link>
              </li>
              <li>
                <Link href="/">Hoàn tiền</Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>Công ty</h4>
            <ul>
              <li>
                <Link href="/">Về chúng tôi</Link>
              </li>
              <li>
                <Link href="/">Tuyển dụng</Link>
              </li>
              <li>
                <Link href="/">Chính sách bảo mật</Link>
              </li>
              <li>
                <Link href="/">Điều khoản dịch vụ</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
