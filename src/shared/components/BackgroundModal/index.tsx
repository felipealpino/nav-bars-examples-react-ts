import React from "react";
import { ContainerModal } from "./styles";

interface IBackgroundModal {
  isNavbarOpen: boolean;
}

export const BackgroundModal: React.FC<IBackgroundModal> = ({ children, isNavbarOpen }) => {
  return <ContainerModal isNavbarOpen={isNavbarOpen}></ContainerModal>;
};

export default BackgroundModal;
