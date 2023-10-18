import { useState } from "react";

const useModal = (_visible) => {
  const [visible, setVisible] = useState(() => !!_visible);

  const toggle = () => {
    setVisible((prev) => !prev);
  };

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return { toggle, visible, show, hide, setVisible };
};

export default useModal;
