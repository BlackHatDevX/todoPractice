import { useContext } from "react";
import styles from "./Item.module.css";
import { FaTrashRestore } from "react-icons/fa";
import { Database } from "../store/Database";
const Item = ({ item }) => {
  const { deleteData } = useContext(Database);
  const handleDelete = () => {
    const itemDeleted = item;
    deleteData(itemDeleted);
  };
  return (
    <div className={styles.item + " row"}>
      <h5 className="col mx-5 text-start">{item.text}</h5>
      <h5 className="col mx-5 text-start">{item.date}</h5>

      <button className="col mx-5 px-2 btn btn-danger " onClick={handleDelete}>
        <FaTrashRestore />
      </button>
    </div>
  );
};

export default Item;
