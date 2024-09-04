import { useCallback, useEffect, useMemo } from "react";
import { fromEvent, debounceTime, Observable } from "rxjs";
import { fetchLoompasList } from "../features";
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../store";
import { getFilteredList, lastRequestExpired } from "../utils";
import { LoadingState, OompaLoompa } from "../declarations";

export const useLoompaList = (searchText: string) => {
  const dispatch = useAppDispatch();
  const {
    value: loompas,
    status,
    lastRequest,
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
  useEffect(() => {
    const onScroll = () => {
      const scrolledPosition: number = window.scrollY + window.innerHeight;
      const scrollHeight: number = document.body.scrollHeight;
      if (
        scrolledPosition >= scrollHeight - 300 &&
        status !== LoadingState.LOADING
      ) {
        fetchLoompas();
      }
    };

    const scroll: Observable<Event> = fromEvent(document, "scroll");
    const result: Observable<Event> = scroll.pipe(debounceTime(1000));
    const subscription = result.subscribe(onScroll);

    return () => {
      subscription.unsubscribe();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  // Page title
  useEffect(() => {
    document.title = "Oompa Loompa list - Loompa Hunter";
  }, []);

  return { loompas: filteredList, status };
};
