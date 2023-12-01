import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AppHeading from "./components/AppHeading";
import ItemsList from "./components/ItemsList";
import "./App.css";
import ItemsInput from "./components/ItemsInput";
import { useReducer } from "react";
import EmptyMessage from "./components/EmptyMessage";
import { Database } from "./store/Database";

const todoItemsReducer = (currTodoItems, action) => {
  if (action.type === "NEW_ITEM") {
    const newData = [...currTodoItems, action.payload];
    return newData;
  } else if (action.type === "DELETE_ITEM") {
    const newData = currTodoItems.filter((item) => item != action.payload);
    return newData;
  }
};

const App = () => {
  const [data, dispatchData] = useReducer(todoItemsReducer, []);
  const newData = "";
  const addData = (newData) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: newData,
    };
    dispatchData(newItemAction);
  };
  const deleteData = (itemDeleted) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: itemDeleted,
    };
    dispatchData(deleteItemAction);
  };
  return (
    <Database.Provider value={{ data, addData, deleteData }}>
      <>
        <center className="container">
          <div className="heading">
            <AppHeading />
          </div>
          <div className="ItemsInput">
            <ItemsInput newData={newData} />
          </div>

          <div className="ItemsList">
            {data.length == 0 ? <EmptyMessage /> : <ItemsList />}
          </div>
        </center>
      </>
    </Database.Provider>
  );
};

export default App;
