import styled from "styled-components";

export const HomeTableStyle = styled.div`
  box-sizing: border-box;
  padding: 0 50px;
  th,
  td {
    height: 7vh;
    padding: 0 20px !important;
  }
  .tabs {
    box-sizing: border-box;
    box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.25);
    max-height: calc(100vh - 160px);
    overflow: auto;
    height: 86vh;
  }
  .tianxiexq {
    user-select: none;
    display: inline-block;
    cursor: pointer;
    vertical-align: middle;
    .cz {
      display: flex;
      align-items: center;
    }
    :hover {
      border: 1px solid #629cf3;
    }
  }
`;
