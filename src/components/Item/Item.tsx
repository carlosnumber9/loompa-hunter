import { useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import { OompaLoompa } from "../../declarations";
import { getHighlightedInfo } from "./highlightText";
import "./Item.css";
import { Link } from "react-router-dom";

interface Props {
  oompaLoompa: OompaLoompa;
}

export const Item: React.FC<Props> = ({ oompaLoompa }) => {
  const searchText: string = useAppSelector(
    (state: RootState) => state.searchText.value
  );
  return (
    <div className="loompa-item" key={`${oompaLoompa.id}_oompa`}>
      <Link to={`/${oompaLoompa.id}`}>
        <img className="loompa-pic" src={oompaLoompa.image} />
        {getHighlightedInfo(oompaLoompa, searchText)}
      </Link>
    </div>
  );
};
