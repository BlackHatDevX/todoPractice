import { createContext, useReducer } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

// create context function
export const Database = createContext({
  data: [],
  addData: () => {},
  deleteData: () => {},
});

// reducer handler
const todoItemsReducer = (currTodoItems, action) => {
  if (action.type === "NEW_ITEM") {
    const newData = [...currTodoItems, action.payload];
    return newData;
  } else if (action.type === "DELETE_ITEM") {
    const newData = currTodoItems.filter((item) => item != action.payload);
    return newData;
  }
};

// Provider function to keep the app.jsx clean
export const DatabaseProvider = ({ children }) => {
  const [data, dispatchData] = useReducer(todoItemsReducer, []);

  // addData is being handled by reducer it just dispathes action and let the handler to other stuff
  const addData = (newData) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: newData,
    };
    dispatchData(newItemAction);
  };
  // same as above it just deltes stuff
  const deleteData = (itemDeleted) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: itemDeleted,
    };
    dispatchData(deleteItemAction);
  };
  return (
    <Database.Provider value={{ data, addData, deleteData }}>
      {children}
    </Database.Provider>
  );
};
