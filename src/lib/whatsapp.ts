import { WHATSAPP_NUMBER } from "@/lib/config";
import { Product } from "@/types/product";

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function buildWhatsAppUrl(product: Product): string {
  const productName = `${product.brand} ${product.title}`;
  const price = formatPrice(product.price);
  const message = `Beste Prime Resell, ik heb interesse in de ${productName} voor ${price}. Is deze nog beschikbaar?`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
