import css from "./LoadMoreBtn.module.css"

interface handleLoadMore {
  handleChangePage: (e: React.MouseEvent) => void;
}

const LoadMoreBtn: React.FC<handleLoadMore> = ({ handleChangePage }) => {
  return (
    <div className={css.container}>
      <button
        className={css.btn}
          onClick={handleChangePage}
        type="button"
      >
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;