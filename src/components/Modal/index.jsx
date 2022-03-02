import { Content, Wrapper } from "./styles";

const Modal = ({ children, isOpen, onClose }) => {
  return (
    <Wrapper isOpen={isOpen} onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>{children}</Content>
    </Wrapper>
  );
};

export default Modal;
