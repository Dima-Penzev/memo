import "./App.css";
import Header from "../Header/Header";
import NoteList from "../NoteList/NoteList";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addNote, replaceNote } from "../../redux/notesSlice";
import { INote } from "../../types/interfaces";
import AddNoteModal from "../AddNoteModal/AddNoteModal";
import EditNoteModal from "../EditNoteModal/EditNoteModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [editedNote, setEditedNote] = useState<INote | undefined | null>(null);
  const notes = useAppSelector((state) => state.notes.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (notes.length === 0) {
      dispatch(
        addNote({
          title: "Заголовок",
          text: "Текст заметки",
          id: nanoid(),
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function openModal() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
    setEditedNote(null);
  }

  function addNoteInList(note: INote): void {
    dispatch(addNote(note));
    closeModal();
  }

  function editNote(updatedNote: INote): void {
    dispatch(replaceNote(updatedNote));
    closeModal();
  }

  function findEditedNote(idNote: string): void {
    const editedNote = notes.find((note) => note.id === idNote);
    setEditedNote(editedNote);
  }

  return (
    <div className="app">
      <Header openModal={openModal} />
      <NoteList notes={notes} onEditNote={findEditedNote} />
      {showModal && (
        <AddNoteModal onClose={closeModal} onSubmit={addNoteInList} />
      )}
      {editedNote && (
        <EditNoteModal
          editedNote={editedNote}
          onClose={closeModal}
          onSubmit={editNote}
        />
      )}
    </div>
  );
}

export default App;
