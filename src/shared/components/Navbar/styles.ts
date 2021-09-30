import styled from "styled-components";

interface IContainerNavBarProps {
  isNavbarOpen: boolean;
}

export const HambuguerIcon = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  position: fixed;
  top: 0;
  left: 0;
  svg {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
`;

export const ContainerNavBar = styled.div<IContainerNavBarProps>`
  position: fixed;
  width: 150px;
  height: 100vh;
  background-color: #e5e5e5;
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
      cursor: pointer;
    }
  }
`;

export const ListItem = styled.div`
  padding-left: 10px;
  margin-bottom: 10px;
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
