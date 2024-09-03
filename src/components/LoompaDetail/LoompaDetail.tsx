import "./LoompaDetail.css";
import { Params, useParams } from "react-router-dom";
import { LoadingState } from "../../declarations";
import { useLoompaDetails } from "../../hooks/useLoompaDetails";
import { useEffect } from "react";

export const LoompaDetail: React.FC = () => {
  const params: Readonly<Params<string>> = useParams();
  const loompaId: string | undefined = params.loompaId;

  const { details, status } = useLoompaDetails(loompaId ?? "0");

  useEffect(() => {
    if (status === LoadingState.OK && details) {
      document.title = `${details.first_name} ${details.last_name} - Oompa Loompa Hunter`;
    } else {
      document.title = "Detail page - Loompa Hunter";
    }
  }, [status, details]);

  return (
    <div className="loompa-detail">
      {status === LoadingState.OK && details && (
        <span>{details.first_name}</span>
      )}
      {status === LoadingState.ERROR && <span>Error</span>}
      {status === LoadingState.LOADING && <span>Loading</span>}
    </div>
  );
};
