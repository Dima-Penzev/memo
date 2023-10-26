import AddButton from "../AddButton/AddButton";
import "./Header.css";
import { IPropsFn } from "../../types/interfaces";

function Header({ openModal }: IPropsFn) {
  return (
    <header className="header">
      <AddButton openModal={openModal} />
    </header>
  );
}

export default Header;
