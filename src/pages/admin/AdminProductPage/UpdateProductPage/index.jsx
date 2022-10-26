import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import slug from "slug";

import {
  Button,
  Select,
  Form,
  Input,
  InputNumber,
  Modal,
  Space,
  Spin,
} from "antd";

import { ROUTES } from "../../../../constants/routes";
import {
  updateProductAction,
  getCategoriesListAction,
  getProductDetailAction,
} from "../../../../redux/actions";

import * as S from "./styles";

const { Option } = Select;

const UpdateProductPage = () => {
  const { id } = useParams();
  const [updateForm] = Form.useForm();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { updateProductData, productDetail } = useSelector(
    (state) => state.product
  );
  const { categoryList } = useSelector((state) => state.category);

  const initialValue = {
    ...productDetail.data,
  };

  useEffect(() => {
    dispatch(getProductDetailAction({ id }));

    dispatch(getCategoriesListAction());
  }, [id]);

  useEffect(() => {
    if (productDetail.data.id) {
      updateForm.resetFields();
    }
  }, [productDetail.data]);

  const handleUpdateProduct = (data) => {
    const finalPrice = data.price * (1 - data.discountPercent / 100);

    dispatch(
      updateProductAction({
        data: {
          ...data,
          categoryId: parseInt(data.categoryId),
          slug: slug(data.name),
          finalPrice: finalPrice,
        },
        id: id,
        callback: {
          goToList: () => navigate(ROUTES.ADMIN.PRODUCT_LIST_PAGE),
        },
      })
    );
  };

  const renderCategoryOptions = useMemo(() => {
    return categoryList.data.map((item) => {
      return (
        <Select.Option key={item.id} value={item.id}>
          {item.name}
        </Select.Option>
      );
    });
  }, [categoryList.data]);

  return (
    <S.CreateProductFormWrapper>
      <S.UpdateProductActions>
        <h3>Sửa thông tin sản phẩm</h3>

        <Space>
          <Button
            type="primary"
            htmlType="submit"
            loading={updateProductData.loading}
            onClick={() => updateForm.submit()}
          >
            Cập nhật
          </Button>

          <Button
            type="danger"
            onClick={() => navigate(ROUTES.ADMIN.PRODUCT_LIST_PAGE)}
          >
            Hủy
          </Button>
        </Space>
      </S.UpdateProductActions>

      <Spin spinning={productDetail.loading}>
        <Form
          form={updateForm}
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
          style={{ padding: "12px 0" }}
          autoComplete="off"
          initialValues={initialValue}
          onFinish={(values) => {
            handleUpdateProduct(values);
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
              {renderCategoryOptions}
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
              {
                required: true,
                message: "Hãy nhập thời gian bảo hành sản phẩm",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item label="Nội dung mô tả" name="content">
            <ReactQuill
              theme="snow"
              onChange={(value) =>
                updateForm.setFieldsValue({ content: value })
              }
            />
          </Form.Item>
        </Form>
      </Spin>
    </S.CreateProductFormWrapper>
  );
};

export default UpdateProductPage;
