import client from "../commons/http-common";

class GameService {
  get(id: string) {
    return client.get(`/games/${id}`);
  }
}
export default new GameService();
