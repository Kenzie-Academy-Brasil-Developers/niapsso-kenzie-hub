import { Container } from "./styles";

const Button = ({ children, bgColor, ...rest }) => {
  return (
    <Container bgColor={bgColor} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
