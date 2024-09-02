import { setText } from "../../features";
import { useAppDispatch } from "../../hooks";
import { AppDispatch } from "../../store";
import "./FilterInput.css";

export const FilterInput: React.FC = () => {
  const dispatch: AppDispatch = useAppDispatch();

  return (
    <div className="input-container">
      <input
        type="text"
        className="input"
        placeholder="Search"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          dispatch(setText(event.target.value))
        }
      />
      <span> | </span>
      <img
        className="button-image"
        src={import.meta.env.VITE_SEARCH_ICON_URL}
        alt="Search button"
      />
    </div>
  );
};
