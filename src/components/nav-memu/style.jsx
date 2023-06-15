import styled from "styled-components";

export const NavMenuStyle = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: inline-block;
  height: 100%;
  .title {
    width: 100%;
    height: 60px;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .name {
      padding-right: 40px;
    }
    .icon {
      width: 50px;
      padding-left: 27px;
    }
  }
  .light {
    position: absolute;
    bottom: 60px;
    margin-top: 60px;
    width: 200px;
  }
`;
