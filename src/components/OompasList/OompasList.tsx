import "./OompasList.css";
import { useEffect, useMemo } from "react";
import { LoadingState, OompaLoompa } from "../../declarations";
import { useAppSelector, useLoompaList } from "../../hooks";
import { Item, FilterInput } from "..";
import { getFilteredList } from "./filter";
import { Loader } from "../Loader";

export const OompasList: React.FC = () => {
  const searchText: string = useAppSelector((state) => state.searchText.value);
  const { loompas, status } = useLoompaList();

  const filteredList: OompaLoompa[] = useMemo(() => {
    return getFilteredList(loompas, searchText);
  }, [loompas, searchText]);

  useEffect(() => {
    document.title = "Oompa Loompa list - Loompa Hunter";
  }, []);

  return (
    <div className="list-container">
      <FilterInput />
      <h1 id="list-title">Find your Oompa Loompa</h1>
      <h3 id="list-subtitle">There are more than 100k</h3>
      <div className="loompas-list">
        {(loompas.length > 0 || status === LoadingState.OK) &&
          filteredList.map((loompa: OompaLoompa) => (
            <Item oompaLoompa={loompa} key={loompa.id} />
          ))}
        {status === LoadingState.ERROR && <span> Error </span>}
        {status === LoadingState.LOADING && <Loader />}
      </div>
    </div>
  );
};
