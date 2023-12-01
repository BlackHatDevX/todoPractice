import AppHeading from "./components/AppHeading";
import ItemsList from "./components/ItemsList";
import ItemsInput from "./components/ItemsInput";
import { DatabaseProvider } from "./store/Database";

// don't pass any of the prop in app.jsx to keep the code clean let context api handle it
const App = () => {
  return (
    <DatabaseProvider>
      <>
        <center className="container">
          <div className="heading">
            <AppHeading />
          </div>
          <div className="ItemsInput">
            <ItemsInput />
          </div>
          <div className="ItemsList">
            <ItemsList />
          </div>
        </center>
      </>
    </DatabaseProvider>
  );
};

export default App;
