import { GENDER, OompaLoompa } from "../../declarations";
import Highlighter from "react-highlight-words";

export const getHighlightedInfo = (
  oompaLoompa: OompaLoompa,
  searchText: string
): React.ReactNode => {
  return (
    <div>
      <h4>
        <Highlighter
          searchWords={[searchText]}
          textToHighlight={`${oompaLoompa.first_name} ${oompaLoompa.last_name}`}
          autoEscape
        />
      </h4>
      <span>
        {GENDER[oompaLoompa.gender]} <span />
      </span>
      <span>
        <Highlighter
          searchWords={[searchText]}
          textToHighlight={oompaLoompa.profession}
        />
      </span>
    </div>
  );
};
