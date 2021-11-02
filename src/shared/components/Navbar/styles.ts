import styled from "styled-components";

export const HambuguerIcon = styled.div`
  position: absolute;
  top: 5px;
  right: -35px;
  svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
    fill: #252525;
  }
`;

export const ContainerNavBar = styled.div<{ isNavBarOpen: boolean }>`
  max-width: ${(p) => (p.isNavBarOpen ? "250px" : "70px")};
  position: fixed;
  width: 60%;
  height: 100vh;
  background-color: var(--blue);
  transition: all 0.2s ease-in-out;
`;

export const HeaderNavBar = styled.div`
  width: 100%;
  padding: 10px 0px;
  position: relative;

  .brands-name {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 25px;
      height: 25px;
      fill: white;
    }
  }
`;

export const AllLinks = styled.div`
  padding-top: 30px;
  height: calc(100vh - 30px);
  overflow-y: auto;
`;

export const ListItem = styled.div`
  padding-left: 10px;

  a {
    display: flex;
    align-items: center;
    span {
      color: #ffffff;
      font-weight: bold;
    }
    svg {
      margin-right: 15px;
      width: 25px;
      height: 25px;
      color: white;
    }
  }

  .checked {
    background-color: var(--grey);
    a span {
      color: var(--blue);
    }
    svg {
      color: var(--blue);
    }
  }
`;

export const ContainerLink = styled.div`
  padding-left: 15px;
  padding-top: 10px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  padding-bottom: 10px;
`;
