export interface INote {
  title: string;
  text: string;
  id: string;
}

export interface INoteListFn {
  notes: INote[];
  onEditNote(id: string): void;
}

export interface INoteFn {
  title: string;
  text: string;
  noteId: string;
  onEditNote(noteId: string): void;
}

export interface IModalWithFormFn {
  title: string;
  buttonText: string;
  onClose(): void;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  children: React.ReactNode;
}

export interface IPropsFn {
  openModal(): void;
}

export interface IAddNoteModalFn {
  onClose(): void;
  onSubmit(note: INote): void;
}

export interface IEditNoteModalFn {
  editedNote: INote;
  onClose(): void;
  onSubmit(updatedNote: INote): void;
}