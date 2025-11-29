import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  Description?: SortOrder;
  Name?: SortOrder;
  StockQuantity?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
