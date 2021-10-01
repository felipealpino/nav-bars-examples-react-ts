import React, { useRef, useEffect } from "react";
import { useField } from "@unform/core";
import { StyledInput } from "./styles";

export interface IInput {
  name: string;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  maxLength?: number;
  type?: string;
  customStyles?: React.CSSProperties;
  disabled?: boolean;
  placeholder?: string;
  value?: string | number;
  visible?: boolean;
  role?: string;
  autoComplete?: string;
  mandatory?: boolean;
}

const Input: React.FC<IInput> = ({ name, label, onChange, type = "text", customStyles, onBlur, autoComplete = "off", mandatory, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      }
    });
  }, [fieldName, registerField]);

  return (
    <>
      <StyledInput className="container-input" style={customStyles}>
        {label && (
          <label htmlFor={fieldName}>
            {label} {mandatory && <span className="mandatory-star">*</span>}
          </label>
        )}
        <input
          id={fieldName}
          className="component-input"
          autoComplete={autoComplete}
          ref={inputRef}
          defaultValue={defaultValue}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          {...rest}
        />

        {error && <span className="error">{error}</span>}
      </StyledInput>
    </>
  );
};

export default Input;
