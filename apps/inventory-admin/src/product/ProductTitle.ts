import { Product as TProduct } from "../api/product/Product";

export const PRODUCT_TITLE_FIELD = "Name";

export const ProductTitle = (record: TProduct): string => {
  return record.Name?.toString() || String(record.id);
};
