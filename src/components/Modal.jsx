import { forwardRef, useImperativeHandle, useRef } from "react";
import ReactDOM from "react-dom";

function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  const modalRoot = document.getElementById("modal-root");

  const modalContent = (
    <dialog ref={dialog} className="modal-dialog">
      {children}
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );

  return ReactDOM.createPortal(modalContent, modalRoot);
}

export default forwardRef(Modal);
