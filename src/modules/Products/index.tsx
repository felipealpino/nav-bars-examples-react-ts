import { Form } from "@unform/web";
import axios, { CancelTokenSource } from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import AllContainer from "../../shared/components/AllContainer";
import Input from "../../shared/components/Input";
import PageHeader from "../../shared/components/PageHeader";
import Select from "../../shared/components/Select";
import Spinner from "../../shared/components/Spinner";
import ListProductsService, { IProducts } from "./services/ListProductsService";
import { ContainerInput, ContainrProducts, ProductCard } from "./styles";

const selectOptions = [
  {
    value: "reference",
    name: "Referencia"
  },
  {
    value: "description",
    name: "Descrição"
  },
  {
    value: "family",
    name: "Família"
  }
];

const Products: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProducts[]>();
  const [query, setQuery] = useState<string>("reference");
  const cancelDataRequest = useRef<CancelTokenSource>();

  const loadProducts = useCallback(async (query?: string, value?: string, page?: number) => {
    cancelDataRequest.current && cancelDataRequest.current.cancel("Cancelling search");
    cancelDataRequest.current = axios.CancelToken.source();
    setIsLoading(true);
    const listProducts = await new ListProductsService(cancelDataRequest.current).listAllProducts(query, value, page);
    setIsLoading(false);
    if (!listProducts) return;
    setProducts(listProducts.data);
  }, []);

  useEffect(() => {
    loadProducts();
    setIsLoading(false);
  }, [loadProducts]);

  const handleSubmitInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    loadProducts(query, event.target.value);
    setIsLoading(false);
  };

  const handleSubmitSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setQuery(event.target.value);
  };

  return (
    <ContainrProducts>
      {isLoading && <Spinner />}
      <PageHeader title="PRODUTOS" />
      <AllContainer>
        <ContainerInput>
          <Form onSubmit={() => {}}>
            <Input name="search_product" label="Busque um produto" onChange={(e) => handleSubmitInput(e)} />
            <Select
              name="search_type"
              label="Selecione o que deseja buscar"
              options={selectOptions}
              onChange={(e) => handleSubmitSelect(e)}
            />
          </Form>
        </ContainerInput>

        {products?.map((p) => (
          <ProductCard key={p.CODPROD}>
            <span>{p.REFERENCIA}</span>
            <span>{p.DESCRICAO}</span>
          </ProductCard>
        ))}
      </AllContainer>
    </ContainrProducts>
  );
};

export default Products;
