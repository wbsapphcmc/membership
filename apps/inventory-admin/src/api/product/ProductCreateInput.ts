import { Decimal } from "decimal.js";

export type ProductCreateInput = {
  Description?: string | null;
  Name: string;
  StockQuantity: number;
  price: Decimal;
};
