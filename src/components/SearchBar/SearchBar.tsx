import React, { FormEvent } from "react";
import s from "./SearchBar.module.css";
import toast from "react-hot-toast";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchQuery = (form.elements.namedItem("searchQuery") as HTMLInputElement).value.trim();

    if (!searchQuery) {
      toast.error("Please enter a search term!");
      return;
    }

    onSubmit(searchQuery);
    form.reset(); 
  };

  return (
    <header className={s.header}>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.input_form}>
          <button type="submit" className={s.button}>
            <FaSearch size={20} className={s.search_icon} />
          </button>
          <input
            className={s.input}
            type="text"
            autoComplete="off"
            name="searchQuery"
            autoFocus
            placeholder="Search images and photos"
          />
        </div>
      </form>
    </header>
  );
};

export default SearchBar;