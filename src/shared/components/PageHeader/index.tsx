import React from "react";
import { ContainerPageHeader } from "./styles";

interface IPageHeader {
  title: string;
}

const PageHeader: React.FC<IPageHeader> = ({ title }) => {
  return (
    <ContainerPageHeader>
      <span>{title}</span>
    </ContainerPageHeader>
  );
};

export default PageHeader;
