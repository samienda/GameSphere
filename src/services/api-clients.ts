import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1b938da312e74df89298953ffea4c845",
  },
});
