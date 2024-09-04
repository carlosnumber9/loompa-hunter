import "./Item.css";
import { useAppSelector } from "../../hooks";
import { RootState } from "../../store";
import { OompaLoompa } from "../../declarations";
import { Link } from "react-router-dom";
import { LoompaCard } from "../LoompaCard";
import { motion } from "framer-motion";

interface Props {
  oompaLoompa: OompaLoompa;
  currentPage: number;
}

export const Item: React.FC<Props> = ({ oompaLoompa, currentPage }) => {
  const searchText: string = useAppSelector(
    (state: RootState) => state.searchText.value
  );

  const delay: number = Math.floor(parseInt(oompaLoompa.id)/25) < currentPage ? 0 : Math.floor(parseInt(oompaLoompa.id)/25) * 0.1;
  return (
    <motion.div
      key={`${oompaLoompa.id}_oompa`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay,
        duration: 0.3,
        ease: "easeInOut",
      }}
      className="loompa-item"
    >
      <Link to={`/${oompaLoompa.id}`}>
        <img className="loompa-pic" src={oompaLoompa.image} />
        <LoompaCard oompaLoompa={oompaLoompa} searchText={searchText} />
      </Link>
    </motion.div>
  );
};
