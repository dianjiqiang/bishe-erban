import styled from "styled-components";

export const EditChoiceStyle = styled.div`
  margin-top: 10px;
  width: 600px;
  margin: 0 auto;
  .inputs {
    display: inline-block;
    width: 350px;
  }
  .input {
    display: inline-block;
    width: 525px;
  }
  .inputs-scro {
    width: 100px;
  }
  .options {
    display: flex;
    flex-direction: column;
    .option {
      margin-top: 5px;
      display: flex;
      align-items: center;
      .delete-option {
        margin-left: 20px;
      }
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
        margin-left: 20px;
      }
    }
  }
  .qd {
    margin-top: 10px;
    text-align: center;
  }
`;
