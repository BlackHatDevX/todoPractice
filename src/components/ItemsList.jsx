import { useContext } from "react";
import Item from "./Item";
import { Database } from "../store/Database";

const ItemsList = () => {
  const { data } = useContext(Database);
  return (
    <>
      <div className="itemsList">
        {data.map((item) => {
          return <Item item={item} key={Math.random() * Math.random()} />;
        })}
      </div>
    </>
  );
};

export default ItemsList;
