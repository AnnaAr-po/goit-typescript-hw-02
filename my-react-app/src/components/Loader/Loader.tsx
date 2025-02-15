import { ClipLoader } from "react-spinners";
import s from "./Loader.module.css";

const Loader: React.FC = () => {
  return (
    <div className={s.loader}>
      <ClipLoader size={80} color="#646cff" />
    </div>
  );
};

export default Loader;