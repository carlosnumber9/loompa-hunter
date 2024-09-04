import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../store";
import { getLoompaDetails } from "../features";
import { LoadingState, LoompaDetails } from "../declarations";

export const useLoompaDetails = (id: string) => {
  const dispatch = useAppDispatch();
  const status: LoadingState = useAppSelector(
    (state: RootState) => state.details.status
  );
  const details: LoompaDetails = useAppSelector(
    (state: RootState) => state.details.details
  );

  // Data fetch
  const fetchDetails = useCallback(
    () => dispatch(getLoompaDetails(id)),
    [id, dispatch]
  );

  useEffect(() => {
    if (!details[id]) {
      fetchDetails();
    }
  }, [status, details, fetchDetails, id]);

  // Page title
  useEffect(() => {
    if (status === LoadingState.OK && details[id]) {
      document.title = `${details[id].data.first_name} ${details[id].data.last_name} - Oompa Loompa Hunter`;
    } else {
      document.title = "Detail page - Loompa Hunter";
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, details]);

  return { details: details[id], status, fetchLoompa: fetchDetails };
};
