import axios from "axios";

const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "n_Oa_sN4-K52H0CNS-KhywzWQvfrPBe97DYf8x3DHrQ";

interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface FetchImagesResponse {
  results: Image[];
  total_pages: number;
}

const fetchImages = async (query: string, page: number): Promise<FetchImagesResponse> => {
  const response = await axios.get<FetchImagesResponse>(API_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};

export default fetchImages;