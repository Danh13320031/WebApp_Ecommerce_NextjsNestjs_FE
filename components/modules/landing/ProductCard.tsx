"use client";

import { IProduct } from "@/types/product.type";
import Link from "next/link";
import styles from "./product-card.module.scss";
import Image from "next/image";

export default function ProductCard({ product }: { product: IProduct }) {
  const id: string = product.id;
  const isInStock: boolean = product.stock > 0;

  return (
    <Link href={`/${id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={
            product.imageUrl?.trimEnd() ||
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={product.name}
          width={400}
          height={400}
          loading="lazy"
        />
      </div>
      <div className={styles.content}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>${product.price.toFixed(2)}</span>
          <span
            className={`${styles.stock} ${!isInStock ? styles.outOfStock : ""}`}
          >
            {isInStock ? product.stock + " trong kho" : "Hết hàng"}
          </span>
        </div>
      </div>
    </Link>
  );
}
