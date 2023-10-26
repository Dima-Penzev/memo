import "./AddButton.css";
import { IPropsFn } from "../../types/interfaces";

function AddButton({ openModal }: IPropsFn) {
  return (
    <button className="add-button" type="button" onClick={openModal}></button>
  );
}

export default AddButton;
