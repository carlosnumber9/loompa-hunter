import "./LoompaCard.css";
import { GENDER, OompaLoompa } from "../../declarations";
import Highlighter from "react-highlight-words";

interface Props {
  oompaLoompa: OompaLoompa;
  searchText?: string;
}

export const LoompaCard: React.FC<Props> = ({
  oompaLoompa,
  searchText = "",
}) => (
  <div className="loompa-card">
    <Highlighter
      searchWords={[searchText]}
      textToHighlight={`${oompaLoompa.first_name} ${oompaLoompa.last_name}`}
      autoEscape
      unhighlightClassName="loompa-name"
      highlightClassName="highlighted-name"
    />
    <span>
      {GENDER[oompaLoompa.gender]} <span />
    </span>
    <Highlighter
      searchWords={[searchText]}
      textToHighlight={oompaLoompa.profession}
    />
  </div>
);
