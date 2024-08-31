import { OompaLoompa } from "../../types"
import './Item.css'

interface Props {
    oompaLoompa: OompaLoompa;
}

const GENDER = {
    F: 'Woman',
    M: 'Man'
}

export const Item: React.FC<Props> = ({ oompaLoompa }) => (
    <div className="loompa-item"
        key={`${oompaLoompa.id}_oompa`}>
        <img className="loompa-pic" src={oompaLoompa.image} />
        <h4>{oompaLoompa.first_name}</h4>
        <span>{GENDER[oompaLoompa.gender]}</span>
        <span>{oompaLoompa.profession}</span>
    </div>);