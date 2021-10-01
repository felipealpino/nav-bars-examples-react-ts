import styled from "styled-components";

export const ContainerModal = styled.div<{ isNavbarOpen: boolean }>`
  position: fixed;
  height: 100vh;
  width: 100vw;
  top: 0;
  right: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: ${(p) => (p.isNavbarOpen ? "block" : "none")};
`;
