// import axios from "axios";
// import { ApiResponse } from "../types/Api.types";

// const API_URL = "https://api.unsplash.com/search/photos";
// const ACCESS_KEY = "n_Oa_sN4-K52H0CNS-KhywzWQvfrPBe97DYf8x3DHrQ";


// const fetchImages = async (
//     query: string,
//   page: number = 1) : Promise<ApiResponse> => {
//   const response = await axios.get(API_URL, {
//     params: {
//       query,
//       page,
//       per_page: 12,
//       client_id: ACCESS_KEY,
//     },
//   });
//   return response.data;
// };

// export default fetchImages;