import "./OompasList.css";
import { ListStatus, OompaLoompa } from "../../declarations";
import { useAppSelector } from "../../hooks";
import { Item } from "../Item";
import { getFilteredList } from "./filter";
import { useOompaLoompa } from "../../hooks/useOompaLoompa";

export const OompasList: React.FC = () => {
  const searchText: string = useAppSelector((state) => state.searchText.value);
  const { loompas, status } = useOompaLoompa();

  return (
    <div className="loompas-list">
      {status === ListStatus.OK &&
        getFilteredList(loompas, searchText).map((loompa: OompaLoompa) => (
          <Item oompaLoompa={loompa} key={loompa.id} />
        ))}
      {status === ListStatus.LOADING && <span> Loading </span>}
      {status === ListStatus.ERROR && <span> Error </span>}
    </div>
  );
};
