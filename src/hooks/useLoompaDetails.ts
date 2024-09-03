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

  const fetchDetails = useCallback(
    () => dispatch(getLoompaDetails(id)),
    [id, dispatch]
  );

  useEffect(() => {
    if (!details[id]) {
      fetchDetails();
    }
  }, [status, details, fetchDetails, id]);

  return { details: details[id], status, fetchLoompa: fetchDetails };
};
