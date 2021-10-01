import { Form } from "@unform/web";
import React, { useCallback, useEffect, useState } from "react";
import AllContainer from "../../shared/components/AllContainer";
import Input from "../../shared/components/Input";
import PageHeader from "../../shared/components/PageHeader";
import Spinner from "../../shared/components/Spinner";
import ListProductsService, { IProducts } from "./services/ListProductsService";
import { ContainerInput, ProductCard } from "./styles";

const Products: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<IProducts[]>();

  const loadProducts = useCallback(async (reference?: string, page?: number) => {
    setIsLoading(true);
    const listProducts = await new ListProductsService().listAllProducts(reference, page);
    setIsLoading(false);
    if (!listProducts.success) return;
    setProducts(listProducts.data);
    console.log(listProducts.data);
  }, []);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  const handleSubmit = (data: any) => {
    console.log(data);
    loadProducts(data.search_product);
  };

  return (
    <>
      {isLoading && <Spinner />}
      <PageHeader title="PRODUTOS" />
      <AllContainer>
        <ContainerInput>
          <Form onSubmit={handleSubmit}>
            <Input name="search_product" label="Busque um produto" />
            <input type="submit" value="Buscar" />
          </Form>
        </ContainerInput>

        {products?.map((p) => (
          <ProductCard key={p.CODPROD}>
            <span>{p.CODPROD}</span>
            <span>{p.REFERENCIA}</span>
            <span>{p.DESCRICAO}</span>
          </ProductCard>
        ))}
      </AllContainer>
    </>
  );
};

export default Products;
