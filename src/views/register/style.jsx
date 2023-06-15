import styled from "styled-components";

export const RegisterStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    width: 600px;
    height: 510px;
    /* text-align: center; */
    padding: 0 60px;
    .title {
      padding-top: 40px;
      text-align: center;
    }
    .logins {
      margin-top: 40px;
      .labels {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
        > div {
          width: 400px;
        }
        .sspan {
          width: 60px;
        }
        .user {
          width: 400px;
        }
      }
    }
    /* .logins {
      margin-top: 40px;
      display: flex;
      flex-direction: column;
      .labels {
        display: flex;
        height: 60px;
        .sspan {
          display: inline-block;
          width: 70px;
          font-size: 16px;
          padding-right: 20px;
          text-align: right;
          line-height: 40px;
        }
        .user {
          width: 400px;
        }
      }
    } */
    .btns {
      position: relative;
      padding: 20px 70px;

      display: flex;
      justify-content: center;
      button {
        width: 130px;
      }
      .forget {
        position: absolute;
        color: #1976d2;
        top: -10px;
        right: 70px;
        cursor: pointer;
        user-select: none;
      }
      .forget:hover {
        text-decoration: underline;
      }
    }
  }
`;
