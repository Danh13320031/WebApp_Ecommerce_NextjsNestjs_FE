"use client";
import { useProduct } from "@/hooks/use-product.hook";
import { useCallback, useEffect, useState } from "react";
import styles from "./product-list.module.scss";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const timeout: number = 500;
  const limit: number = 10;

  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const { isLoading, products, getProducts, error, meta } = useProduct();

  useEffect(() => {
    getProducts({ page, limit, search: debouncedSearch });
  }, [getProducts, page, limit, debouncedSearch]);

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value: string = event.target.value;
      setSearch(value);
      setPage(1);

      setTimeout(() => {
        setDebouncedSearch(value);
      }, timeout);
    },
    [],
  );

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Product List</h2>
          <p>Danh sách sản phẩm</p>
        </div>

        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Nhập từ khóa tìm kiếm..."
            value={search}
            onChange={handleSearchChange}
          />
        </div>

        {isLoading ? (
          <div className={styles.loading}>Loading...</div>
        ) : products.length === 0 ? (
          <div className={styles.empty}>
            {debouncedSearch
              ? `Không tìm thấy sản phẩm: ${debouncedSearch}`
              : "Không tìm thấy sản phẩm"}
          </div>
        ) : (
          <div className={styles.grid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
