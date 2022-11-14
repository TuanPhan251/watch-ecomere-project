import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Card, Col, Input, Row, Spin, Table } from "antd";

import BreadCrumb from "../../../components/BreadCrumb";
import { ROUTES } from "../../../constants/routes";
import { getGuestOrderDetailAction } from "../../../redux/actions";

import * as S from "./styles";

const { Search } = Input;

const OrderSearchPage = () => {
  const dispatch = useDispatch();
  const { guestOrderDetail } = useSelector((state) => state.order);
  const [showOrder, setShowOrder] = useState(false);
  console.log(
    "🚀 ~ file: index.jsx ~ line 16 ~ OrderSearchPage ~ guestOrderDetail",
    guestOrderDetail
  );
  const orderAddress = `${guestOrderDetail.data.address} - ${guestOrderDetail.data.wardName} - ${guestOrderDetail.data.districtName} - ${guestOrderDetail.data.cityName}`;

  const handleSearchOrder = (value) => {
    dispatch(
      getGuestOrderDetailAction({
        orderCode: value,
        callback: {
          showOrder: (value) => {
            setShowOrder(value);
          },
        },
      })
    );
  };

  return (
    <S.Wrapper>
      <S.TopSpacer></S.TopSpacer>

      <S.BreadcrumbWrapper>
        <BreadCrumb
          breadCrumbItems={[
            {
              title: "Trang chủ",
              path: ROUTES.USER.HOME,
            },
            {
              title: "Tra cứu đơn hàng",
            },
          ]}
        />
      </S.BreadcrumbWrapper>

      <S.ContentWrapper>
        <div className="page__heading">
          <h3>Tra cứu đơn hàng</h3>
        </div>

        <div className="search__form">
          <Col span={12} offset={6}>
            <Search
              placeholder="Nhập mã đơn hàng để tìm kiếm..."
              enterButton
              onSearch={(value) => handleSearchOrder(value)}
              loading={guestOrderDetail.loading}
            />
          </Col>
        </div>
        {showOrder && (
          <div className="search__item">
            <Spin spinning={guestOrderDetail.loading}>
              <Row gutter={8}>
                <Col span={12}>
                  <Card title="Thông tin người đặt">
                    <p>Tên người đặt: {guestOrderDetail.data.nameInfo}</p>
                    <p>Email: {guestOrderDetail.data.emailInfo}</p>
                    <p>Số điện thoại: {guestOrderDetail.data.phoneNumber}</p>
                    <p>Địa chỉ giao hàng: {orderAddress}</p>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card title="Chi tiết đơn hàng"></Card>
                </Col>
              </Row>
            </Spin>
          </div>
        )}
      </S.ContentWrapper>
    </S.Wrapper>
  );
};

export default OrderSearchPage;
