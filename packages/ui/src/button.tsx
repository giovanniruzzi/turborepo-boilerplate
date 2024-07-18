"use client";
import type { ReactNode } from "react";
import Image from "next/image";
import productPromo from "./assets/svg-path.svg";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export function Button({
  children,
  className,
  appName,
}: ButtonProps): JSX.Element {
  console.log("Button - is client side?", typeof window !== "undefined");
  return (
    <button
      className="p-10"
      onClick={() => {
        alert(`Hello from your ${appName} app!`);
      }}
      type="button"
    >
      <Image
        alt="Product promo"
        src="https://picsum.photos/200"
        width={100}
        height={100}
      />
      <Image alt="Product promo" src="productPromo" width={100} height={100} />
    </button>
  );
}
