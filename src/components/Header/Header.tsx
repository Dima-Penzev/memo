import AddButton from "../AddButton/AddButton";
import "./Header.css";
import { IPropsFn } from "../../types/interfaces";

function Header({ openModal }: IPropsFn) {
  return (
    <header className="header">
      <h1 className="header__logo">memo</h1>
      <AddButton openModal={openModal} />
    </header>
  );
}

export default Header;
