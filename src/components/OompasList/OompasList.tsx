import { OompaLoompa } from "../../types";
import { useAppSelector } from "../../hooks";
import { Item } from "../Item";
import { getFilteredList } from "./filter";
import "./OompasList.css";

export const OompasList: React.FC = () => {
  const loompas: OompaLoompa[] = useAppSelector((state) => state.loompas.value);
  const searchText: string = useAppSelector((state) => state.searchText.value);

  return (
    <div className="loompas-list">
      {getFilteredList(loompas, searchText).map((loompa: OompaLoompa) => (
        <Item oompaLoompa={loompa} key={loompa.id} />
      ))}
    </div>
  );
};
