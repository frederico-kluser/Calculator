import { useDispatch } from 'react-redux';
import { add } from '../../redux/calculatorSlice';
import Container, { Key, Row } from './keyboard.styled';

const Keyboard = () => {
  const dispatch = useDispatch();

  return (
    <Container>
    <Row>
      <Key onClick={() => dispatch(add(7))}>7</Key>
      <Key onClick={() => dispatch(add(8))}>8</Key>
      <Key onClick={() => dispatch(add(9))}>9</Key>
      <Key>Del</Key>
    </Row>
    <Row>
      <Key onClick={() => dispatch(add(4))}>4</Key>
      <Key onClick={() => dispatch(add(5))}>5</Key>
      <Key onClick={() => dispatch(add(6))}>6</Key>
      <Key onClick={() => dispatch(add('÷'))}>÷</Key>
    </Row>
    <Row>
      <Key onClick={() => dispatch(add(1))}>1</Key>
      <Key onClick={() => dispatch(add(2))}>2</Key>
      <Key onClick={() => dispatch(add(3))}>3</Key>
      <Key onClick={() => dispatch(add('*'))}>*</Key>
    </Row>
    <Row>
      <Key>Prev</Key>
      <Key onClick={() => dispatch(add(0))}>0</Key>
      <Key onClick={() => dispatch(add(','))}>,</Key>
      <Key onClick={() => dispatch(add('-'))}>-</Key>
    </Row>
    <Row>
      <Key>Next</Key>
      <Key>Left</Key>
      <Key>Right</Key>
      <Key onClick={() => dispatch(add('+'))}>+</Key>
    </Row>
    </Container>
  );
};

export default Keyboard;
