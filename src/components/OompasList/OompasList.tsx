import "./OompasList.css";
import { LoadingState, OompaLoompa } from "../../declarations";
import { useAppSelector, useLoompaList } from "../../hooks";
import { Item, FilterInput } from "..";
import { Loader } from "../Loader";

export const OompasList: React.FC = () => {
  const searchText: string = useAppSelector((state) => state.searchText.value);
  const { loompas, status } = useLoompaList(searchText);

  return (
    <div className="list-container">
      <FilterInput />
      <h1 id="list-title">Find your Oompa Loompa</h1>
      <h3 id="list-subtitle">There are more than 100k</h3>
      <div className="loompas-list">
        {(loompas.length > 0 || status === LoadingState.OK) &&
          loompas.map((loompa: OompaLoompa) => (
            <Item oompaLoompa={loompa} key={loompa.id} />
          ))}
        {status === LoadingState.ERROR && <span> Error </span>}
        {status === LoadingState.LOADING && <Loader />}
      </div>
    </div>
  );
};
