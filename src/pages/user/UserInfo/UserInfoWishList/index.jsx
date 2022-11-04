import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { generatePath, Link, useLocation } from "react-router-dom";

import {
  getWishlistAction,
  removeWishlistAction,
  getProductListAction,
  removeProductDetailAction,
} from "../../../../redux/actions";

import { Avatar, Col, Row, Spin, notification, Tooltip } from "antd";
import UserSideBar from "../SideBar";
import * as S from "./styles";
import { useMemo } from "react";
import { ROUTES } from "../../../../constants/routes";

const UserInfoWishListPage = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { wishlist } = useSelector((state) => state.wishlist);

  const wishlistItems = wishlist.data.map((item) => item.product);
  const wishlistIds = wishlist.data.map((item) => item.productId);

  useEffect(() => {
    dispatch(getWishlistAction({ userId: userInfo.data.id }));

    return () => {
      dispatch(removeProductDetailAction());
    };
  }, [userInfo.data]);

  const handleRemoveItemWishlist = (productId) => {
    const deletedWishlist = Object.assign(
      {},
      ...wishlist.data.filter((item) => item.productId === productId)
    );

    dispatch(
      removeWishlistAction({
        id: deletedWishlist.id,
        userId: userInfo.data.id,
        callback: {
          getWishlists: () => {
            dispatch(getWishlistAction({ userId: userInfo.data.id }));
          },
        },
      })
    );

    notification.open({
      message: "Đã xóa sản phẩm khỏi yêu thích",
      placement: "top",
      top: 100,
      duration: 2,
      icon: (
        <i
          className="fa-solid fa-heart-crack"
          style={{
            color: "#335C67",
          }}
        ></i>
      ),
    });
  };

  const renderWishlist = useMemo(() => {
    return wishlistItems.map((item) => {
      return (
        <Col span={6} key={item.id}>
          <Link
            to={generatePath(ROUTES.USER.PRODUCT_DETAIL, {
              id: `${item.slug}.${item.id}`,
            })}
          >
            <S.ProductItem>
              <div className="product-image">
                <img alt="product" src={item.image} />
              </div>

              <div className="product-info">
                <h3>{item.name}</h3>
                <p>
                  {item.finalPrice?.toLocaleString()}
                  <sup>đ</sup>
                </p>
              </div>

              <div className="product-action">
                <Tooltip title="Xóa khỏi yêu thích">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleRemoveItemWishlist(item.id);
                    }}
                  >
                    <i className="fa-solid fa-heart-crack"></i>
                  </button>
                </Tooltip>
              </div>
            </S.ProductItem>
          </Link>
        </Col>
      );
    });
  }, [wishlistItems]);

  return (
    <S.Wrapper>
      <S.TopSpacer></S.TopSpacer>
      <S.UserPageContent>
        <Row gutter={16}>
          <Col span={6}>
            <UserSideBar />
          </Col>
          <Col span={18}>
            <S.UserInfo>
              <h3 className="user_info-title">Sản phẩm yêu thích</h3>

              <S.ProductsWrapper>
                <Spin spinning={wishlist.loading}>
                  <Row gutter={[8, 8]}>{renderWishlist}</Row>
                </Spin>
              </S.ProductsWrapper>
            </S.UserInfo>
          </Col>
        </Row>
      </S.UserPageContent>
    </S.Wrapper>
  );
};

export default UserInfoWishListPage;
