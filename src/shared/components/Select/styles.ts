import styled from "styled-components";

export const StyledSelect = styled.div`
  width: 100%;

  select {
    width: -webkit-fill-available;
    box-sizing: border-box;
    margin: 2px 5px 5px 5px;
    height: 32px;
    border-radius: 4px;
    border: 1px solid var(--main-azul-anil-logo);
    outline: none;
  }

  label {
    margin-left: 5px;
    width: inherit;
    font-size: 14px;
    font-weight: normal;
    display: flex;

    .mandatory-star {
      margin-left: 2px;
      color: var(--main-danger-color);
      font-size: 14px;
    }
  }

  span {
    display: block;
    color: var(--main-danger-color);
    font-size: 11px;
  }
`;
