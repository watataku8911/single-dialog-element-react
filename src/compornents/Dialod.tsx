import { FC, forwardRef, Ref, ReactNode } from "react";

type Props = {
  ref: Ref<HTMLDialogElement>;
  onClose: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children: ReactNode;
};

const Dialog: FC<Props> = forwardRef<HTMLDialogElement, Props>(
  ({ onClose, children }, ref) => {
    return (
      <dialog className="dialog" ref={ref} onClick={onClose}>
        {children}
        <button onClick={onClose}>閉じる</button>
      </dialog>
    );
  }
);
export default Dialog;
