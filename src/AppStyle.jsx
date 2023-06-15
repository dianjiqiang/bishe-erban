import styled from "styled-components";

export const AppStyle = styled.div`
  .bg-bilibili {
    position: fixed;
    left: 0;
    top: 0;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
    video {
      object-fit: fill;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
    img {
      object-fit: fill;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .isLoading {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    background-color: rgba(111, 111, 111, 0.3);
    .loading {
      object-fit: fill;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  width: 100vw;
  height: 100vh;
`;
