type DeleteTodoModaProps = {
  onClose: () => void;
  onDelete: () => void;
};

function DeleteTodoModal({ onClose, onDelete }: DeleteTodoModaProps) {
  return (
    <div>
      <span>Are you sure you want to delete?</span>
      <div className="mt-4">
        <button
          onClick={onDelete}
          className="rounded-md bg-red-600 px-4 py-2 text-white transition-all hover:bg-red-800"
        >
          delete it
        </button>
        <button
          onClick={onClose}
          className="bg-secondary hover:bg-primary-dark ml-1.5 rounded-md px-4 py-2 text-white transition-all"
        >
          keep it
        </button>
      </div>
    </div>
  );
}

export { DeleteTodoModal };
