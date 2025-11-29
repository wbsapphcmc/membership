import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Mô tả" multiline source="Description" />
        <TextInput label="Tên sản phẩm" source="Name" />
        <NumberInput step={1} label="Số lượng tồn kho" source="StockQuantity" />
        <NumberInput label="Giá bán" source="price" />
      </SimpleForm>
    </Edit>
  );
};
