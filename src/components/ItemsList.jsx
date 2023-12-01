import { useContext } from "react";
import Item from "./Item";
import { Database } from "../store/Database";
import EmptyMessage from "./EmptyMessage";

const ItemsList = () => {
  const { data } = useContext(Database);
  return (
    <>
      <div className="itemsList">
        {data.length === 0 ? (
          <EmptyMessage />
        ) : (
          data.map((item) => {
            // to keep the keys unique used Math.random function for once
            return <Item item={item} key={Math.random() * Math.random()} />;
          })
        )}
      </div>
    </>
  );
};

export default ItemsList;
