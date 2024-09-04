import "./LoompaDetail.css";
import sanitize from "sanitize-html";
import { Params, useParams } from "react-router-dom";
import { LoadingState } from "../../declarations";
import { useLoompaDetails } from "../../hooks";
import { LoompaCard } from "../LoompaCard";
import { Loader } from "../Loader";

export const LoompaDetail: React.FC = () => {
  const params: Readonly<Params<string>> = useParams();
  const loompaId: string | undefined = params.loompaId;
  const { details, status } = useLoompaDetails(loompaId ?? "0");

  return (
    <div className="loompa-detail">
      {status === LoadingState.OK && details && (
        <div className="columns-wrapper">
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
              className="description"
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
