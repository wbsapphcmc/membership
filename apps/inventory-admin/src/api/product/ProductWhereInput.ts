import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { DecimalFilter } from "../../util/DecimalFilter";

export type ProductWhereInput = {
  Description?: StringNullableFilter;
  Name?: StringFilter;
  StockQuantity?: IntFilter;
  id?: StringFilter;
  price?: DecimalFilter;
};
