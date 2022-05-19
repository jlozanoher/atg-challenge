import client from "../commons/http-common";

class BetService {
  getAll(betType: string) {
    return client.get(`/products/${betType}`);
  }

  // Add more methods here (POST, PUT, etc)
}
export default new BetService();
