import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AppHeading from "./components/AppHeading";
import ItemsList from "./components/ItemsList";
import "./App.css";
import ItemsInput from "./components/ItemsInput";
import { useState } from "react";
import EmptyMessage from "./components/EmptyMessage";
import { Database } from "./store/Database";

const App = () => {
  const [data, setData] = useState([]);
  const newData = "";
  const addData = (newData) => {
    setData((currData) => [...currData, newData]);
  };
  const deleteData = (itemDeleted) => {
    const newDelete = data.filter((item) => item != itemDeleted);
    setData(newDelete);
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
