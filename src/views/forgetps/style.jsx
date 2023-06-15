import styled from 'styled-components'

export const ForgetpsStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .wrapper {
    width: 600px;
    height: 420px;
    text-align: center;
    padding: 0 60px;
    .title {
      padding-top: 40px;
    }
    .logins {
      margin-top: 40px;
      label {
        display: block;
        height: 60px;
        span {
          text-align: right;
          padding-right: 20px;
          display: inline-block;
          line-height: 40px;
          width: 60px;
        }
        div {
          width: 400px;
        }
      }
    }
    .btns {
      position: relative;
      padding: 20px 70px;

      display: flex;
      justify-content: center;
      button {
        width: 100px;
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
`
