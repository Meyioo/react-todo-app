import React, { useState } from "react";
import { AppState, TodosContext } from "./todo.context";

interface Props {
  children: React.ReactNode;
}

export const TodosContextProvider: React.FunctionComponent<Props> = (
  props: Props
): JSX.Element => {
  const [state, setState] = useState({});

  const updateState = (newState: Partial<AppState>) => {
    setState({ ...state, ...newState });
  };

  return (
    <TodosContext.Provider value={{ ...state, updateState }}>
      {props.children}
    </TodosContext.Provider>
  );
};
