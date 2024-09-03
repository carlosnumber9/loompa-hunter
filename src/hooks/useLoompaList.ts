import { useCallback, useEffect } from "react";
import { fetchLoompasList } from "../features";
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../store";
import { lastRequestExpired } from "../utils";

export const useLoompaList = () => {
  const dispatch = useAppDispatch();
  const {
    value: loompas,
    status,
    lastRequest,
  } = useAppSelector((state: RootState) => state.loompas);

  const fetchLoompas = useCallback(
    () => dispatch(fetchLoompasList()),
    [dispatch]
  );

  useEffect(() => {
    if (lastRequestExpired(lastRequest)) {
      fetchLoompas();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastRequest]);

  return { loompas, status, fetchLoompas };
};
