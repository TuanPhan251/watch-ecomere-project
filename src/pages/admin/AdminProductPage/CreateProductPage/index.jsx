import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import slug from "slug";

import {
  Button,
  Select,
  Form,
  Input,
  InputNumber,
  Upload,
  Checkbox,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { ROUTES } from "../../../../constants/routes";
import {
  createProductAction,
  getCategoriesListAction,
} from "../../../../redux/actions";

import * as S from "./styles";

const { Option } = Select;

const CreateProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { createProductData } = useSelector((state) => state.product);

  const [createForm] = Form.useForm();
  const { categoryList } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoriesListAction());
  }, []);

  const renderCategoryOptions = () => {
    return categoryList.data.map((item) => {
      return (
        <Option key={item.id} values={item.id}>
          {item.name}
        </Option>
      );
    });
  };

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleCreateProduct = async (data) => {
    const { images, ...productData } = data;
    const newImages = [];
    const finalPrice = data.price * (1 - data.discountPercent / 100);

    for (let i = 0; i < images.length; i++) {
      const imgBase64 = await convertImageToBase64(images[i].originFileObj);
      await newImages.push({
        name: images[i].name,
        type: images[i].type,
        image: imgBase64,
      });
    }

    await dispatch(
      createProductAction({
        data: {
          ...productData,
          categoryId: parseInt(data.categoryId),
          slug: slug(data.name),
          finalPrice: finalPrice,
        },
        images: newImages,
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

        <Form.Item label="Sản phẩm mới" name="isNew" valuePropName="checked">
          <Checkbox />
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

        <Form.Item
          label="Ảnh sản phẩm"
          name="images"
          valuePropName="fileList"
          getValueFromEvent={(e) => {
            if (Array.isArray(e)) return e;
            return e?.fileList;
          }}
        >
          <Upload listType="picture-card" beforeUpload={Upload.LIST_IGNORE}>
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Chọn ảnh</div>
            </div>
          </Upload>
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
