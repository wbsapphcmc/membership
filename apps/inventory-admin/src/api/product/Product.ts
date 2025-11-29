import { Decimal } from "decimal.js";

export type Product = {
  Description: string | null;
  Name: string;
  StockQuantity: number;
  createdAt: Date;
  id: string;
  price: Decimal;
  updatedAt: Date;
};
