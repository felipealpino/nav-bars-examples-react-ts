import React from "react";
import { ContainerModal } from "./styles";

interface IBackgroundModal {
  isNavbarOpen: boolean;
}

export const BackgroundModal: React.FC<IBackgroundModal> = ({ children }) => {
  return <ContainerModal></ContainerModal>;
};

export default BackgroundModal;
