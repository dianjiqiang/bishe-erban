import styled from "styled-components";

export const HomeTopStyle = styled.div`
  box-sizing: border-box;
  padding: 50px;
  padding-top: 30px;
  padding-bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    position: relative;
    top: 10px;
    .title {
      display: inline-block;
      height: 41px;
      font-weight: 700;
      color: #090909;
    }
    .plus {
      padding-left: 6px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .sort {
      padding-left: 10px;
      position: relative;
      top: 3px;
    }
    .sx {
      position: relative;
      padding-left: 3px;
      top: -2px;
    }
    .search {
      padding-left: 12px;
    }
    .add-btn {
      padding-left: 12px;
      button {
        text-align: center;
        width: 100px;
        height: 30px;
        background: #36d1dc;
        border: none;
        box-shadow: 0px 1px 43px 0px rgba(0, 0, 0, 0.07);
        border-radius: 7px;
        font-size: 16px;
        font-weight: bold;
        color: #ffffff;
      }
    }
  }
`;
