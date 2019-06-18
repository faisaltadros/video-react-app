import axios from "axios";

const KEY = "AIzaSyCao3qfznS1MxmF7cV0xdz2cNm1jF5j6zg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
