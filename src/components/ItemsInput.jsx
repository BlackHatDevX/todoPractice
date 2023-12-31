import { FaCircleCheck } from "react-icons/fa6";
import styles from "./ItemsInput.module.css";
import { useContext, useRef } from "react";
import { Database } from "../store/Database";
const ItemsInput = () => {
  const { addData } = useContext(Database);
  const textRef = useRef();
  const dateRef = useRef();
  // it grabs data from useRef and grabs the addData function from context api i.e database.jsx then initialize the addData function which dispatches event of ADD_ITEM and then later on clears the inital values of input boxes
  const handleSubmit = () => {
    const newData = {
      text: textRef.current.value,
      date: dateRef.current.value,
    };
    addData(newData);
    textRef.current.value = "";
    dateRef.current.value = "";
  };
  return (
    <>
      <div className={styles.inputContainer + " row"}>
        <input
          type="text"
          className="col mx-5"
          ref={textRef}
          placeholder="Enter Todo Here"
        />
        <input
          type="date"
          className="px-3 mx-5 col input"
          ref={dateRef}
        ></input>
        <button
          className="btn btn-success px-2 mx-5 col"
          onClick={handleSubmit}
        >
          <FaCircleCheck />
        </button>
      </div>
    </>
  );
};

export default ItemsInput;
