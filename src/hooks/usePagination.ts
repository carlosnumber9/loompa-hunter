import { useEffect } from "react";
import { LoadingState } from "../declarations";
import { debounceTime, fromEvent, Observable } from "rxjs";
import { SCROLL } from "../constants";

interface Params {
  status: LoadingState;
  fetchLoompas: () => unknown;
}

export const usePagination = ({ status, fetchLoompas }: Params) => {
  useEffect(() => {
    const onScroll = () => {
      const scrolledPosition: number = window.scrollY + window.innerHeight;
      const scrollHeight: number = document.body.scrollHeight;
      if (
        scrolledPosition >= scrollHeight - SCROLL.THRESHOLD &&
        status !== LoadingState.LOADING
      ) {
        fetchLoompas();
      }
    };

    const scroll: Observable<Event> = fromEvent(document, "scroll");
    const result: Observable<Event> = scroll.pipe(debounceTime(SCROLL.DEBOUNCE_TIME));
    const subscription = result.subscribe(onScroll);

    return () => {
      subscription.unsubscribe();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);
};
