import "./LoompaList.css";
import { AnimatePresence, motion } from "framer-motion";
import { Item, FilterInput, Loader } from "..";
import { LoadingState, OompaLoompa } from "../../declarations";
import { useAppSelector, useLoompaList } from "../../hooks";
import { LOOMPALIST } from "../../constants";

export const OompasList: React.FC = () => {
  const searchText: string = useAppSelector((state) => state.searchText.value);
  const { loompas, status, currentPage } = useLoompaList(searchText);

  return (
    <div className="list-container">
      <FilterInput searchText={searchText} />
      <h1 id="list-title">{LOOMPALIST.TITLE}</h1>
      <h3 id="list-subtitle">{LOOMPALIST.SUBTITLE}</h3>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="loompas-list"
        >
          {(loompas.length > 0 || status === LoadingState.OK) &&
            loompas.map((loompa: OompaLoompa) => (
              <Item
                oompaLoompa={loompa}
                key={loompa.id}
                currentPage={currentPage}
              />
            ))}
          {status === LoadingState.ERROR && <span> Error </span>}
          {(status === LoadingState.LOADING && currentPage < 20) && <Loader />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
