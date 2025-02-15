import styled from "styled-components";
import { flexCenter, theme } from "../../src/styles/theme";

export const HeaderWrapper = styled.header`
  ${flexCenter}
  position: fixed;
  top: 0;
  width: max(46.18vh, 24.438rem);
  height: 5.7rem;
  padding: 0 1.6rem;
  z-index: 20;
  -webkit-box-align: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.render ? 1 : 0)};
`;
export const Icon = styled.img`
  width: 2.1rem;
  display: inline-block;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
  &:hover {
    transform: rotateY(180deg);
  }
`;
export const Tab = styled.div`
  color: white;
  cursor: pointer;
`;
