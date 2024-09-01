import { OompaLoompa } from "../../types";
import { useAppSelector } from "../../hooks";
import { Item } from "../Item";
import { getFilteredList } from "./filter";
import "./OompasList.css";

export const OompasList: React.FC = () => {
  const { loompas, searchText } = useAppSelector((state) => state.loompas);

  return (
    <div className="loompas-list">
      {getFilteredList(loompas, searchText).map((loompa: OompaLoompa) => (
        <Item oompaLoompa={loompa} key={loompa.id} />
      ))}
    </div>
  );
};
