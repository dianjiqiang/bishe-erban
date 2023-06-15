import styled from "styled-components";

export const TheRadioStyle = styled.div`
  .delete-topic {
    :hover {
      text-decoration: underline;
    }
    cursor: pointer;
    user-select: none;
    color: #ff4d4f;
  }
  margin-top: 30px;
  .title {
    padding-bottom: 5px !important;
    .score {
      span {
        color: red;
      }
      > span > span {
        color: black;
      }
    }
  }
  .Mui-disabled {
    font-size: 14px;
  }
`;
