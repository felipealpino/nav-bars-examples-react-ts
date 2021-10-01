import styled from "styled-components";


export const ContainerInput = styled.div``

export const ProductCard = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--main-anil-subtitle);
  font-size: 11px;
  margin-bottom: 3px;
  cursor: pointer;
  height: 40px;

  span:first-child {
    padding-left: 2px;
  }

  span:not(:first-child) {
    padding-left: 5px;
  }
`;
