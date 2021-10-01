import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : null;

interface IlistAllProducts {
  success: boolean;
  data: {
    CODPROD: string;
    REFERENCIA: string;
    DESCRICAO: string;
    PRECO_CUSTO: number;
    ESTOQUE: number;
    FAMILIA: string;
    IDFICHATECNICA: string | null;
  }[];
}

class ListProductsService {
  public async listAllProducts(): Promise<IlistAllProducts> {
    const res = await axios.get(`${apiUrl}/products?size=10&page=0`);
    return res.data;
  }
}

export default ListProductsService;
