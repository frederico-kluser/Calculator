import Container from './mathRender.styled';
import { useSelector } from 'react-redux';
import { selectLayers } from '../../redux/calculatorSlice';
import 'katex/dist/katex.min.css';
import { convertToText } from '../../utils/itemBuilder';
const { BlockMath } = require('react-katex');

const MathRender = () => {
  const layers = useSelector(selectLayers);
  const mathText = convertToText(layers);

  return (
    <Container>
      <BlockMath math={mathText}/>
    </Container>
  )
};

export default MathRender;
