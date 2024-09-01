import { setSearchText } from "../../features/loompaList";
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
          dispatch(setSearchText(event.target.value))
        }
      />
      <span> | </span>
      <img
        className="button-image"
        src="https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png"
        alt="Search button"
      />
    </div>
  );
};
