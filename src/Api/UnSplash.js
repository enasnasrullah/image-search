import axios from "axios";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID kkf-ubCTR4rXL9uoQx9MPJqyrPBcgiBHBt2vexSV2Ao",
  },
});
