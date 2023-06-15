import styled from "styled-components";

export const NoFractionStyle = styled.div`
  .btn {
    text-align: center;
  }
  .xuanx {
    display: flex;
    justify-content: center;
  }
  > .title {
    margin-top: 15px;
    font-size: 16px;
    display: flex;
    align-items: center;
    height: 30px;
    .title-input {
      width: 200px;
      box-sizing: border-box;
    }
    .submit-items {
      margin-left: 40px;
    }
    .template-select {
      width: 200px;
      margin-left: 40px;
    }
    .title-input:not(:focus) {
      border: none;
      color: #02cad7;
      font-size: 16px;
    }
    .tree-select {
      min-width: 170px;
      max-width: auto;
    }
  }
`;
