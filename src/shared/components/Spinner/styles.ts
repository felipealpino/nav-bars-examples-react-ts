import styled from "styled-components";

export const ContainerSpinner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const SpinnerBall = styled.div`
  width: 50px;
  height: 50px;

  border: 5px solid var(--main-anil-subtitle);
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: spin 1s cubic-bezier(0.25, 0.5, 0.75, 1) infinite;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
