import { PADDING } from './../../theme/constants';
import styled from 'styled-components';

const Container = styled.div`
  background: #fff;
  bottom: 0px;
  box-sizing: border-box;
  height: auto;
  left: 0px;
  padding: ${PADDING / 2}px;
  position: absolute;
  width: 100vw;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Key = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: black;
  font-size: 20px;
  font-weight: bold;
  height: 64px;
  line-height: 64px;
  margin-bottom: ${PADDING / 2}px;
  text-align: center;
  width: calc(100% / 4 - ${PADDING / 2}px);

  &:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    color: #fff;
  }

  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
`;


export default Container;
