import styled from "styled-components";

interface IContainerNavBarProps {
  isNavbarOpen: boolean;
}

export const HambuguerIcon = styled.div`
  position: fixed;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
    fill: #ffff;
  }
`;

export const ContainerNavBar = styled.div<IContainerNavBarProps>`
  position: fixed;
  width: 150px;
  height: 100vh;
  background-color: #694db5;
  left: ${(p) => (p.isNavbarOpen ? "0px" : "-150px")};
  transition: all 0.2s ease-in-out;
`;

export const HeaderNavBar = styled.div`
  width: 100%;
  height: 60px;
  margin-bottom: 10px;
  box-sizing: border-box;
  position: relative;

  .close-icon {
    position: absolute;
    right: 5px;
    top: 5px;
    svg {
      width: 20px;
      height: 20px;
      fill: #ffff;
      cursor: pointer;
    }
  }
`;

export const ListItem = styled.div`
  .checked {
    background-color: red !important;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  svg {
    margin-right: 10px;
    width: 25px;
    height: 25px;
  }
`;

export const ConainerLink = styled.div`
  padding-left: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 10px;
`;
