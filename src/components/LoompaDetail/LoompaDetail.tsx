import "./LoompaDetail.css";
import { Params, useParams } from "react-router-dom";
import { LoadingState } from "../../declarations";
import { useLoompaDetails } from "../../hooks";
import { useEffect } from "react";
import { LoompaCard } from "../LoompaCard";
import sanitize from "sanitize-html";
import { Loader } from "../Loader";

export const LoompaDetail: React.FC = () => {
  const params: Readonly<Params<string>> = useParams();
  const loompaId: string | undefined = params.loompaId;

  const { details, status } = useLoompaDetails(loompaId ?? "0");

  useEffect(() => {
    if (status === LoadingState.OK && details) {
      document.title = `${details.data.first_name} ${details.data.last_name} - Oompa Loompa Hunter`;
    } else {
      document.title = "Detail page - Loompa Hunter";
    }
  }, [status, details]);

  return (
    <div className="loompa-detail">
      {status === LoadingState.OK && details && (
        <div className="loompa-info">
          <div>
            <img
              className="loompa-image"
              src={details.data.image}
              alt="Oompa Loompa image"
            />
          </div>

          <div className="loompa-data">
            <LoompaCard oompaLoompa={details.data} />
            <p
              className="loompa-text"
              dangerouslySetInnerHTML={{
                __html: sanitize(details.data.description),
              }}
            />
          </div>
        </div>
      )}
      {status === LoadingState.ERROR && <span>Error</span>}
      {status === LoadingState.LOADING && <Loader />}
    </div>
  );
};
