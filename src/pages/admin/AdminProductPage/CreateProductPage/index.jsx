import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import slug from "slug";

import { Button, Select, Form, Input, InputNumber, Modal } from "antd";

import { ROUTES } from "../../../../constants/routes";
import {
  createProductAction,
  getProductListAction,
} from "../../../../redux/actions";

import * as S from "./styles";

const { Option } = Select;

const CreateProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { createProductData, productList } = useSelector(
    (state) => state.product
  );

  const [createForm] = Form.useForm();
  const { categoryList } = useSelector((state) => state.category);

  const [showModal, setShowModal] = useState(false);

  const renderCategoryOptions = () => {
    return categoryList.data.map((item) => {
      return (
        <Option key={item.id} values={item.id}>
          {item.name}
        </Option>
      );
    });
  };

  const handleCreateProduct = (data) => {
    const finalPrice = data.price * (1 - data.discountPercent / 100);

    dispatch(
      createProductAction({
        data: {
          ...data,
          categoryId: parseInt(data.categoryId),
          slug: slug(data.name),
          finalPrice: finalPrice,
        },
        callback: {
          goToList: () => navigate(ROUTES.ADMIN.PRODUCT_LIST_PAGE),
        },
      })
    );
  };

  return (
    <S.CreateProductFormWrapper>
      <S.TopWrapper>
        <h3>Tạo sản phẩm mới</h3>

        <Button
          type="primary"
          htmlType="submit"
          loading={createProductData.loading}
          onClick={() => createForm.submit()}
        >
          Tạo sản phẩm mới
        </Button>
      </S.TopWrapper>

      <Form
        form={createForm}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        style={{ padding: "12px 0" }}
        autoComplete="off"
        onFinish={(values) => {
          handleCreateProduct(values);
        }}
      >
        <Form.Item
          label="Tên sản phẩm"
          name="name"
          rules={[{ required: true, message: "Hãy nhập tên sản phẩm" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Giá"
          name="price"
          rules={[{ required: true, message: "Hãy nhập giá sản phẩm" }]}
        >
          <InputNumber
            style={{ width: "100%" }}
            formatter={(value) => value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
          />
        </Form.Item>

        <Form.Item
          label="Khuyến mãi(%)"
          name="discountPercent"
          initialValue={0}
          rules={[{ required: true, message: "Hãy nhập khuyến mãi" }]}
        >
          <InputNumber min={0} max={99} />
        </Form.Item>

        <Form.Item
          label="Hãng"
          name="categoryId"
          rules={[{ required: true, message: "Hãy chọn hãng" }]}
        >
          <Select
            showSearch
            placeholder="Chọn hãng sản xuất"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().includes(input.toLowerCase())
            }
          >
            {renderCategoryOptions()}
          </Select>
        </Form.Item>

        <Form.Item
          label="Hình ảnh"
          name="image"
          rules={[
            { required: true, message: "Hãy nhập đường dẫn ảnh sản phẩm" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Giới tính"
          name="gender"
          rules={[
            { required: true, message: "Hãy chọn giới tính của sản phẩm" },
          ]}
        >
          <Select placeholder="Chọn giới tính">
            <Option value="male">Nam</Option>
            <Option value="female">Nữ</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Kích thước mặt (mm)"
          name="caseSize"
          rules={[
            { required: true, message: "Hãy nhập kích thước mặt sản phẩm" },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Độ dày (mm)"
          name="caseWidth"
          rules={[{ required: true, message: "Hãy nhập độ dày sản phẩm" }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Chất liệu vỏ"
          name="caseMaterial"
          rules={[
            { required: true, message: "Hãy nhập chất liệu vỏ sản phẩm" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Chất liệu kính"
          name="glassMaterial"
          rules={[
            { required: true, message: "Hãy nhập chất liệu kính sản phẩm" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Chất liệu dây "
          name="strapMaterial"
          rules={[
            { required: true, message: "Hãy nhập chất liệu dây sản phẩm" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Kích thước dây (mm)"
          name="strapSize"
          rules={[
            { required: true, message: "Hãy nhập kích thước dây sản phẩm" },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Kiểu máy"
          name="movement"
          rules={[{ required: true, message: "Hãy nhập kiểu máy sản phẩm" }]}
        >
          <Select placeholder="Chọn kiểu máy">
            <Option value="Pin">Pin</Option>
            <Option value="Automatic">Cơ tự động</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Độ kháng nước"
          name="waterResist"
          rules={[
            { required: true, message: "Hãy nhập độ kháng nước sản phẩm" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Thời gian bảo hành (năm)"
          name="warranty"
          rules={[
            { required: true, message: "Hãy nhập thời gian bảo hành sản phẩm" },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item label="Nội dung mô tả" name="content">
          <ReactQuill
            theme="snow"
            onChange={(value) => createForm.setFieldsValue({ content: value })}
          />
        </Form.Item>
      </Form>
    </S.CreateProductFormWrapper>
  );
};

export default CreateProductPage;
