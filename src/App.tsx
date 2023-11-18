import { useCallback, useRef } from "react";

import "./App.css";
import Dialog from "./compornents/Dialod";

function App() {
  const ref = useRef<HTMLDialogElement>(null);

  const handleClick = useCallback(() => {
    if (ref.current) {
      ref.current.showModal();
    }
  }, []);

  const handleClose = useCallback(() => {
    if (ref.current) {
      ref.current.close();
    }
  }, []);
  return (
    <>
      <button onClick={handleClick}>モーダルを開く</button>
      <Dialog ref={ref} onClose={handleClose}>
        ダイアログの中身
      </Dialog>
    </>
  );
}

export default App;
