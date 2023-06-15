import styled from "styled-components";

export const EditAnswerStyle = styled.div`
  margin-top: 10px;
  width: 500px;
  margin: 0 auto;
  .inputs {
    display: inline-block;
    width: 250px;
  }
  .input {
    display: inline-block;
    width: 425px;
  }
  .inputs-scro {
    width: 100px;
  }
  .options {
    display: flex;
    flex-direction: column;
    .option {
      margin-top: 5px;
      .inputs {
        display: inline-block;
        width: 170px;
      }
      .input {
        display: inline-block;
        width: 270px;
      }
      .text {
        display: inline-block;
        width: 60px;
      }
      .inputs-scro {
        margin-left: 20px;
        width: 80px;
      }
      .xxxx {
        margin-left: 35px;
      }
    }
  }
  .qd {
    margin-top: 10px;
    text-align: center;
  }
`;
