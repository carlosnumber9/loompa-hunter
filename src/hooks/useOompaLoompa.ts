import { useCallback, useEffect } from "react";
import { fetchLoompasList } from "../features";
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../store";

export const useOompaLoompa = () => {
  const dispatch = useAppDispatch();
  const { value: loompas, status } = useAppSelector(
    (state: RootState) => state.loompas
  );

  const fetchLoompa = useCallback(
    () => dispatch(fetchLoompasList()),
    [dispatch]
  );

  useEffect(() => {
    console.log('Calling API')
    fetchLoompa();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loompas, status, fetchLoompa };
};
