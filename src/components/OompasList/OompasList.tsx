import { OompaLoompa } from "../../types"
import { useAppSelector } from "../../hooks";
import { Item } from "../Item";
import './OompasList.css';

export const OompasList: React.FC = () => {
    const oompasList: OompaLoompa[] = useAppSelector((state) => state.loompas.getInitialState());

    return (<div className="loompas-list">
        {oompasList.map((loompa: OompaLoompa) => <Item oompaLoompa={loompa} />)}
    </div>)
}