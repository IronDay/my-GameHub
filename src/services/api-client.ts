import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e23a6e04439e496a8813729210a9a38b",
  },
});
