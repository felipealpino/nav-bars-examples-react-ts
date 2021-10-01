import React from "react";
import { ContainerSpinner, SpinnerBall } from "./styles";

const Spinner: React.FC = () => {
  return <ContainerSpinner>
      <SpinnerBall/>
  </ContainerSpinner>;
};

export default Spinner;
