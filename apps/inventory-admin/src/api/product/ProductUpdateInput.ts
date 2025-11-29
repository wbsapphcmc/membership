import { Decimal } from "decimal.js";

export type ProductUpdateInput = {
  Description?: string | null;
  Name?: string;
  StockQuantity?: number;
  price?: Decimal;
};
