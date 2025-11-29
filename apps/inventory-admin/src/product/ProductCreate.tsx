import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Mô tả" multiline source="Description" />
        <TextInput label="Tên sản phẩm" source="Name" />
        <NumberInput step={1} label="Số lượng tồn kho" source="StockQuantity" />
        <NumberInput label="Giá bán" source="price" />
      </SimpleForm>
    </Create>
  );
};
