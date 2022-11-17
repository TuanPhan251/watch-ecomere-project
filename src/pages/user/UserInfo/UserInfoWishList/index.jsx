import { useEffect } from "react";
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { generatePath, Link, useLocation } from "react-router-dom";
import { Avatar, Col, Row, Spin, notification, Tooltip } from "antd";

import {
  getWishlistAction,
  removeWishlistAction,
  getProductListAction,
  removeProductDetailAction,
} from "../../../../redux/actions";
import Layout from "../Layout";

import { ROUTES } from "../../../../constants/routes";
import * as S from "./styles";

const UserInfoWishListPage = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.user);
  const { wishlist } = useSelector((state) => state.wishlist);

  const wishlistItems = wishlist.data.map((item) => item.product);

  useEffect(() => {
    document.title = "Sản phẩm yêu thích";
  }, []);

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
        <Col xxl={6} lg={6} md={6} sm={12} xs={12} key={item.productId}>
          <Link
            to={generatePath(ROUTES.USER.PRODUCT_DETAIL, {
              id: `${item.slug}.${item.id}`,
            })}
          >
            <S.ProductItem>
              <div className="product-image">
                <img alt="product" src={item.images[0].url} />
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
    <Layout>
      <S.Wrapper>
        <h3 className="user_info-title">Sản phẩm yêu thích</h3>

        <S.ProductsWrapper>
          <Spin spinning={wishlist.loading}>
            <Row gutter={[8, 8]}>{renderWishlist}</Row>
          </Spin>
        </S.ProductsWrapper>
      </S.Wrapper>
    </Layout>
  );

  //   <S.Wrapper>
  //     <S.TopSpacer></S.TopSpacer>

  //     <S.BreadCrumbWrapper>
  //       <BreadCrumb
  //         breadCrumbItems={[
  //           {
  //             title: "Trang chủ",
  //             path: ROUTES.USER.HOME,
  //           },
  //           {
  //             title: "Sản phẩm yêu thích",
  //             path: "",
  //           },
  //         ]}
  //       />
  //     </S.BreadCrumbWrapper>

  //     <S.UserPageContent>
  //       <Row gutter={16}>
  //         <Col span={6}>
  //           <UserSideBar />
  //         </Col>
  //         <Col span={18}>
  //           <S.UserInfo>
  //             <h3 className="user_info-title">Sản phẩm yêu thích</h3>

  //             <S.ProductsWrapper>
  //               <Spin spinning={wishlist.loading}>
  //                 <Row gutter={[8, 8]}>{renderWishlist}</Row>
  //               </Spin>
  //             </S.ProductsWrapper>
  //           </S.UserInfo>
  //         </Col>
  //       </Row>
  //     </S.UserPageContent>
  //   </S.Wrapper>
  // );
};

export default UserInfoWishListPage;
