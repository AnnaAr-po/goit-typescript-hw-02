// import { useState, useEffect } from "react";
// import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
// import ImageGallery from "./components/ImageGallery/ImageGallery";
// import Loader from "./components/Loader/Loader";
// import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
// import ImageModal from "./components/ImageModal/ImageModal";
// import SearchBar from "./components/SearchBar/SearchBar";
// import fetchImages from "./services/api";
// import { Toaster } from "react-hot-toast";
// import "./App.css";

// const App = () => {
//   const [images, setImages] = useState<Image[]>([]);
//   const [query, setQuery] = useState<string>("");
//   const [page, setPage] = useState<number>(1);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);
//   const [totalPages, setTotalPages] = useState<number>(0);
//   const [selectedImage, setSelectedImage] = useState<Image | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//   useEffect(() => {
//     if (!query) return;

//     const fetchData = async () => {
//       try {
//         setIsLoading(true);
//         const data: ApiResponse = await fetchImages(query, page);
//         setImages((prev) => [...prev, ...data.results]);
//         setTotalPages(data.total_pages);
//         setError(null);
//       } catch (err) {
//         console.error("Error details:", err);
//         setError("Failed to fetch images. Try again!");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [query, page]);

//   const handleSearch = (newQuery: string) => {
//     if (query === newQuery) return;
//     setQuery(newQuery);
//     setImages([]);
//     setPage(1);
//   };

//  const loadMore = () => setPage((prev) => prev + 1);
//   const openModal = (image: Image) => {
//     setSelectedImage(image);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div>
//        <Toaster />
//       <SearchBar onSubmit={handleSearch} />
//       {error && <ErrorMessage message={error} />}
//       <ImageGallery images={images} onImageClick={openModal} />
//       {isLoading && <Loader />}
//       {page < totalPages && !isLoading && <LoadMoreBtn handleLoadMore={loadMore} />}
//       <ImageModal
//         isOpen={isModalOpen}
//         image={selectedImage}
//         onClose={closeModal}
//       />
//     </div>
//   );
// };

// export default App;