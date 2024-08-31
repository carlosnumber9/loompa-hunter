import { OompaLoompa } from "../types"
import { useAppSelector } from "../hooks";

export const OompasList: React.FC = () => {
    const oompasList: OompaLoompa[] = useAppSelector((state) => state.loompas.getInitialState());

    return oompasList.map((loompa: OompaLoompa) => <div key={`${loompa.id}_oompa`}>{loompa.first_name}</div>)
}