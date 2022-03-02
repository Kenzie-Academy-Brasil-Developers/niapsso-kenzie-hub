import { Button } from "./styles";
import { IoMdClose } from "react-icons/io";

const CloseButton = ({ ...rest }) => (
  <Button {...rest}>
    <IoMdClose />
  </Button>
);

export default CloseButton;
