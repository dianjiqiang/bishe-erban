import styled from "styled-components";

export const CardStyle = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: ${(props) => props.padding}px;
  box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  border-radius: ${(props) => props.radius}px;
  max-height: ${(props) => (props.maxHeight ? `calc(100vh - 113px)` : "auto")};
  /* height: ${(props) =>
    props.maxHeight ? `calc(100vh - 160px)` : "auto"}; */
  overflow-y: auto;
`;
