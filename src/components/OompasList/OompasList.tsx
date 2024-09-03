import "./OompasList.css";
import { LoadingState, OompaLoompa } from "../../declarations";
import { useAppSelector } from "../../hooks";
import { Item } from "../Item";
import { getFilteredList } from "./filter";
import { useLoompaList } from "../../hooks/useLoompaList";
import { FilterInput } from "../FilterInput";
import { useEffect } from "react";

export const OompasList: React.FC = () => {
  const searchText: string = useAppSelector((state) => state.searchText.value);
  const { loompas, status } = useLoompaList();

  useEffect(() => {
    document.title = "Oompa Loompa list - Loompa Hunter";
  }, []);

  return (
    <div className="list-container">
      <FilterInput />
      <h1>Find your Oompa Loompa</h1>
      <h3>There are more than 100k</h3>
      <div className="loompas-list">
        {status === LoadingState.OK &&
          getFilteredList(loompas, searchText).map((loompa: OompaLoompa) => (
            <Item oompaLoompa={loompa} key={loompa.id} />
          ))}
        {status === LoadingState.LOADING && <span> Loading </span>}
        {status === LoadingState.ERROR && <span> Error </span>}
      </div>
    </div>
  );
};
