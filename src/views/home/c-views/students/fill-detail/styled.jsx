import styled from "styled-components";

export const FillDetailStyled = styled.div`
  .content-fill {
    height: calc(100vh - 70px);
    background-color: #fff;
    border-top: 1px solid #ccc;
    overflow: auto;
    > .title {
      height: 70px;
      .score {
        display: flex;
        justify-content: space-around;
        .score-value {
          color: red;
          padding-left: 10px;
        }
      }
    }
  }
  .topic {
    padding-left: 300px;
  }
`;
