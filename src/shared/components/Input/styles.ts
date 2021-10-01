import styled from "styled-components";

export const StyledInput = styled.div`
  width: 100%;

  input {
    margin: 2px 5px 5px 5px;
    width: -webkit-fill-available;
    box-sizing: border-box;
    height: 32px;
    border-radius: 4px;
    outline: none;
    border: 1px solid var(--main-azul-anil-logo);
  }

  label {
    width: inherit;
    font-size: 14px;
    font-weight: normal;
    margin-left: 5px;
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
