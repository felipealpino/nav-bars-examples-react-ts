import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiderBarData } from "./SideBarData";
import { ContainerNavBar, HambuguerIcon, HeaderNavBar, ListItem } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar: React.FC = () => {
  const [isNavbarOpen, setIsNavBarOpen] = useState<boolean>(false);

  return (
    <>
      <ContainerNavBar isNavbarOpen={isNavbarOpen}>
        {!isNavbarOpen && (
          <HambuguerIcon onClick={() => setIsNavBarOpen(true)}>
            <GiHamburgerMenu />
          </HambuguerIcon>
        )}

        <HeaderNavBar>
          <div className="close-icon" onClick={() => setIsNavBarOpen(false)}>
            <AiOutlineClose />
          </div>
        </HeaderNavBar>

        {SiderBarData.map((sb, index) => {
          return (
            <ListItem>
              <Link to={sb.path} onClick={() => setIsNavBarOpen(false)}>
                {<sb.icon />} <span>{sb.title}</span>
              </Link>
            </ListItem>
          );
        })}
      </ContainerNavBar>
    </>
  );
};

export default Navbar;
