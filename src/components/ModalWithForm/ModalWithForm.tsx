import "./ModalWithForm.css";
import { useEffect } from "react";
import { IModalWithFormFn } from "../../types/interfaces";

function ModalWithForm({
  title,
  buttonText,
  onClose,
  onSubmit,
  children,
}: IModalWithFormFn) {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackDropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal" onClick={handleBackDropClick}>
      <div className="modal__container">
        <button
          className="modal__close"
          type="button"
          aria-label="закрыть"
          onClick={onClose}
        />
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button className="modal__button" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
