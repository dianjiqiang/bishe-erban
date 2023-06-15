import styled from "styled-components";

export const AppHeaderStyle = styled.div`
  box-sizing: border-box;
  padding-left: 240px;
  background-color: #fff;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.25);
  .right {
    padding-right: 40px;
    display: flex;
    align-items: center;
    .user {
      cursor: pointer;
      width: 30px;
      height: 30px;
    }
    .exit-btn {
      text-align: center;
      background: #36d1dc;
      border: none;
      box-shadow: 0px 1px 43px 0px rgba(0, 0, 0, 0.07);
    }
    .name {
      /* position: relative;
      bottom: -2px; */
      padding-left: 10px;
    }
  }
  .center {
    width: 200px;
    font-size: 20px;
    color: #00cad7;
  }
  .left {
    width: 200px;
  }
`;
