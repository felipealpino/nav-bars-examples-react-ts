import axios, { CancelTokenSource } from "axios";

const apiUrl = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : null;

interface IlistAllProducts {
  success: boolean;
  data: IProducts[];
}

export interface IProducts {
  CODPROD: string;
  REFERENCIA: string;
  DESCRICAO: string;
  PRECO_CUSTO: number;
  ESTOQUE: number;
  FAMILIA: string;
  IDFICHATECNICA: string | null;
}

class ListProductsService {
  private source: CancelTokenSource;

  constructor(token: CancelTokenSource) {
    this.source = token;
  }

  public async listAllProducts(query = "reference", value = "", page = 0): Promise<IlistAllProducts | false> {
    try {
      const res = await axios.get(`${apiUrl}/products?size=30&page=${page}&${query}=${value}`, {
        cancelToken: this.source.token
      });
      return res.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("O request foi cancelado");
      }
      return false;
    }
  }
}

export default ListProductsService;
