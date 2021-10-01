import styled from "styled-components";

export const ContainrProducts = styled.div``;

export const ContainerInput = styled.div`
  margin-bottom: 20px;
`;

export const ProductCard = styled.div`
  display: flex;
  align-items: center;
  box-shadow: var(--main-bg-shadow);
  font-size: 11px;
  margin-bottom: 8px;
  cursor: pointer;
  height: 40px;
  border-radius: 4px;
  padding: 5px;

  span:first-child {
    padding-left: 2px;
  }

  span:not(:first-child) {
    padding-left: 5px;
  }
`;
