import styled from "styled-components";

export const QuestionnaireListStyle = styled.div`
  box-sizing: border-box;
  padding: 0 50px;
  height: calc(100vh - 160px);
  overflow-y: auto;
  .ben-card {
    margin-top: 5px;
    margin-bottom: 22px;
    .is-null {
      margin: 20px 0;
      font-size: 24px;
      font-family: "黑体";
      font-weight: 700;
    }
  }
  .el-card {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    .top,
    .bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .top {
      border-bottom: 2px solid #eeeeee;
      .left {
        height: 30px;
        font-size: 19px;
        font-family: Adobe Heiti Std;
        font-weight: normal;
        color: #666666;
        .involve {
          margin-left: 10px;
        }
      }
      .right {
        font-size: 14px;
        font-weight: normal;
        color: #666666;
        .que-status {
          color: #03cad7;
        }
        .status,
        .reply,
        .author,
        .date {
          padding-left: 20px;
        }
        .isfabu {
          color: #03cad7;
        }
        .author {
          .name {
            padding-left: 3px;
            color: #111;
          }
        }
        .reply {
          .number {
            padding-left: 3px;
            color: #111;
          }
        }
      }
    }
    .bottom {
      .left {
        display: flex;
        align-items: center;
        height: 60px;
        font-size: 15px;
        font-weight: normal;
        color: #666666;
        .design,
        .send,
        .download {
          padding-right: 24px;
          cursor: pointer;
          .text {
            position: relative;
            top: 4px;
            padding-left: 6px;
            font-size: 17px;
            font-weight: normal;
            color: #666666;
          }
        }
        .design {
          img {
            width: 26px;
            height: 32px;
          }
        }
        .send {
          img {
            width: 28px;
            height: 28px;
          }
        }
        .download {
          img {
            width: 35px;
            height: 25px;
          }
        }
      }
      .right {
        display: flex;
        div {
          padding-left: 24px;
          cursor: pointer;
        }
        .text {
          padding-left: 6px;
          position: relative;
          top: 3px;
          font-size: 17px;
          font-family: Adobe Heiti Std;
          font-weight: normal;
          color: #999999;
        }
      }
      .start {
        img {
          width: 24px;
          height: 24px;
        }
        .text {
          color: #666666;
        }
      }
      .copy {
        img {
          width: 24px;
          height: 24px;
        }
      }
      .delete {
        img {
          width: 24px;
          height: 24px;
        }
      }
      .star {
        img {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
`;
