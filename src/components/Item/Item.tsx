import "./Item.css";
import { useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import { OompaLoompa } from "../../declarations";
import { Link } from "react-router-dom";
import { LoompaCard } from "../LoompaCard";

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
        <LoompaCard oompaLoompa={oompaLoompa} searchText={searchText} />
      </Link>
    </div>
  );
};
