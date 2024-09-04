import { useCallback, useEffect, useMemo } from "react";
import { fetchLoompasList } from "../features";
import { useAppDispatch, useAppSelector, usePagination } from "../hooks";
import { RootState } from "../store";
import { getFilteredList, lastRequestExpired } from "../utils";
import { OompaLoompa } from "../declarations";

export const useLoompaList = (searchText: string) => {
  const dispatch = useAppDispatch();
  const {
    value: loompas,
    status,
    lastRequest,
    nextPage
  } = useAppSelector((state: RootState) => state.loompas);

  const filteredList: OompaLoompa[] = useMemo(() => {
    return getFilteredList(loompas, searchText);
  }, [loompas, searchText]);

  // Data fetch
  const fetchLoompas = useCallback(
    () => dispatch(fetchLoompasList()),
    [dispatch]
  );

  useEffect(() => {
    if (lastRequestExpired(lastRequest)) {
      fetchLoompas();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Dynamic pagination
  usePagination({status, fetchLoompas});

  // Page title
  useEffect(() => {
    document.title = "Oompa Loompa list - Loompa Hunter";
  }, []);

  return { loompas: filteredList, status, currentPage: nextPage-1 };
};
