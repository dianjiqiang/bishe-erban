import styled from "styled-components";

export const QuestionnaireDetailStyled = styled.div`
  padding: 30px 0 50px;
  background-color: #fff;
  height: 100%;
  box-sizing: border-box;
  border-top: 1px solid #ccc;
  /* border: 1px solid #ccc; */
  .bone-nail {
    height: 70px;
  }
  .title {
    text-align: center;
  }
  .score {
    display: flex;
    justify-content: space-around;
    .score-value {
      color: red;
      padding-left: 10px;
    }
  }
  .que-content {
    height: calc(100% - 70px);
    overflow-y: auto;
  }
  .topic {
    margin: 0 100px;
    padding: 20px 20px;
    font-family: "黑体";
    .topic-name {
      .topic-score {
        color: red;
        padding-left: 8px;
      }
    }
    .topic-value {
      padding-top: 15px;
    }
  }
  .topic-peripheral {
    padding-left: 20px;
    padding-top: 10px;
    font-size: 14px;
  }
  .topic-list {
    display: flex;
    padding-left: 40px;
    align-items: center;
  }
  .fens {
    padding-left: 10px;
    .value {
      color: red;
    }
  }
  .xuanx {
    display: block;
    padding-bottom: 5px;
  }
`;
