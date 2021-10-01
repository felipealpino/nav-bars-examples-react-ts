import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { SiderBarData } from "./SideBarData";
import { AllLinks, ConainerLink, ContainerNavBar, HambuguerIcon, HeaderNavBar, ListItem } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import BackgroundModal from "../BackgroundModal";

const Navbar: React.FC = () => {
  const [isNavbarOpen, setIsNavBarOpen] = useState<boolean>(false);
  const [howIsChecked, setHowIsChecked] = useState<number>(0);

  const changeTab = useCallback((index: number) => {
    setHowIsChecked(index);
  }, []);

  return (
    <>
      <BackgroundModal isNavbarOpen={isNavbarOpen} />
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

        <AllLinks>
          {SiderBarData.map((sb, index) => {
            return (
              <ListItem onClick={() => changeTab(index)} key={index}>
                <ConainerLink className={`${howIsChecked === index && "checked"}`}>
                  <Link to={sb.path}>
                    {<sb.icon />}
                    <span>{sb.title}</span>
                  </Link>
                </ConainerLink>
              </ListItem>
            );
          })}
        </AllLinks>
      </ContainerNavBar>
    </>
  );
};

export default Navbar;
