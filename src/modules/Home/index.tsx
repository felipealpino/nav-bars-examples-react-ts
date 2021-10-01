import { Form } from "@unform/web";
import React, { useState } from "react";
import AllContainer from "../../shared/components/AllContainer";
import Input from "../../shared/components/Input";
import PageHeader from "../../shared/components/PageHeader";
import Select from "../../shared/components/Select";
import Spinner from "../../shared/components/Spinner";
import TextArea from "../../shared/components/TextArea";

const fakeOptions = [
  {
    value: "valor1",
    name: "Valor Numero 1"
  },
  {
    value: "valor2",
    name: "Valor Numero 2"
  }
];

const submitFormData = (data: any) => {
  console.log(data);
};

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <>
      {isLoading && <Spinner />}
      <PageHeader title="HOME" />
      <AllContainer>
        <Form onSubmit={submitFormData}>
          <Input name="teste_input" label="Input" mandatory />
          <br />
          <TextArea name="teste_textarea" label="Input" mandatory />
          <br />
          <Select name="teste_select" options={fakeOptions} label="Input" mandatory />
          <br />
          <input type="submit" value="enviar" />
        </Form>
      </AllContainer>
    </>
  );
};

export default Home;
