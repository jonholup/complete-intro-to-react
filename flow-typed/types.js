// @flow

export type Show = {
  title: string,
  description: string,
  year: string,
  imdbID: string,
  trailer: string,
  poster: string,
  rating?: string
};

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};

declare type ActionType = 'SET_SEARCH_TERM' | 'ADD_API_DATA';

declare type ActionT<A: ActionType, P> = {|
  type: A,
  payload: P
|};

<<<<<<< HEAD
export type Action =
  | ActionT<'SET_SEARCH_TERM', string>
  | ActionT<'ADD_API_DATA', Show>;
=======
export type Action = ActionT<'SET_SEARCH_TERM', string> | ActionT<'ADD_API_DATA', Show>;
>>>>>>> 7eb2c8f14a1cff656339fc894a71ed04adca3d74
