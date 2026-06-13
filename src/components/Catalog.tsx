"use client";

import { useMemo, useState } from "react";
import { products } from "@/data/products";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import ProductModal from "@/components/ProductModal";
import Footer from "@/components/Footer";
import { Category, Product } from "@/types/product";

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    if (activeCategory === "all") return products;
    return products.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      <Header
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <main className="flex-1">
        <Hero />
        <ProductGrid
          products={filteredProducts}
          onProductClick={setSelectedProduct}
        />
      </main>
      <Footer />
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
