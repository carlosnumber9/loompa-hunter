import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../store";
import { fetchLoompaDetails } from "../features";
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
    () => dispatch(fetchLoompaDetails(id)),
    [id, dispatch]
  );

  useEffect(() => {
    console.log(`Status: ${status}, Details: ${JSON.stringify(details)}`);
    if (!details[id] && status !== LoadingState.OK) {
      console.log("Fetching details...");
      fetchDetails();
    }
  }, [status, details, fetchDetails, id]);

  return { details: details[id], status, fetchLoompa: fetchDetails };
};
