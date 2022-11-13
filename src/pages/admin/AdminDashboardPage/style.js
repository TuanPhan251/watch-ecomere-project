import styled from "styled-components";

export const DashBoardWrapper = styled.div`
  background-color: #e5ebe7;
`;

export const ItemDashBoardTop = styled.div`
  padding: 20px;
  h3 {
    font-weight: 200;
  }
  .price {
    font-size: 25px;
    font-weight: 600;
    margin-bottom: 40px;
    color: #818181;
  }

  .up {
    font-size: 17px;
    font-weight: 400;
    color: green;
  }
  .down {
    font-size: 17px;
    font-weight: 400;
    color: red;
  }
`;

export const ItemDashBoardBot = styled.div`
  padding: 20px;
`;
