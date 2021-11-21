import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { SideBarData } from "./SideBarData";
import { AllLinks, ContainerLink, ContainerNavBar, HambuguerIcon, HeaderNavBar, ListItem } from "./styles";
import { FiMenu } from "react-icons/fi";
import { AiOutlineApple } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [howIsChecked, setHowIsChecked] = useState<number>(0);
  const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false);

  const changeTab = useCallback((index: number) => {
    setHowIsChecked(index);
  }, []);

  return (
    <>
      <ContainerNavBar isNavBarOpen={isNavBarOpen}>
        <HeaderNavBar>
          <div className="brands-name">
            <AiOutlineApple />
          </div>
          <HambuguerIcon onClick={() => setIsNavBarOpen(!isNavBarOpen)}>
            <FiMenu />
          </HambuguerIcon>
        </HeaderNavBar>

        <AllLinks>
          {SideBarData.map((sb, index) => {
            return (
              <ListItem onClick={() => changeTab(index)} key={index}>
                <ContainerLink className={`${howIsChecked === index && "checked"}`}>
                  <Link to={sb.path}>
                    {<sb.icon />}
                    {isNavBarOpen && <span>{sb.title}</span>}
                  </Link>
                </ContainerLink>
              </ListItem>
            );
          })}
        </AllLinks>
      </ContainerNavBar>
    </>
  );
};

export default Navbar;
