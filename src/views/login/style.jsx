import styled from 'styled-components'

import login from '@/assets/image/login-bg.png'

export const LoginStyle = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: url(${login}) no-repeat;
  background-size: 100% 100%; */
  .wrapper {
    width: 600px;
    height: 360px;
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
          line-height: 40px;
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
      justify-content: space-between;
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
