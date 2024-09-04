import "./LoompaDetail.css";
import sanitize from "sanitize-html";
import { Params, useParams } from "react-router-dom";
import { LoadingState } from "../../declarations";
import { useLoompaDetails } from "../../hooks";
import { LoompaCard } from "../LoompaCard";
import { Loader } from "../Loader";
import { AnimatePresence, motion } from "framer-motion";

export const LoompaDetail: React.FC = () => {
  const params: Readonly<Params<string>> = useParams();
  const loompaId: string | undefined = params.loompaId;
  const { details, status } = useLoompaDetails(loompaId ?? "0");

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut", delay: 0.3 }}
        className="loompa-detail"
      >
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
      </motion.div>
    </AnimatePresence>
  );
};
