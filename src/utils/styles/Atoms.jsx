import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import colors from './colors'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 18px;
  text-align: center;
  ${(props) =>
    props.$isFullLink &&
    `color: white; 
    border-radius: 30px; 
    background-color: ${colors.primary};`}
`
export const QuestionnaireBox = styled.div`
  background-color: #252d4a;
  width: 450px;
  min-height: 200px;
  height: min-content;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  margin-left: auto;
  color: white;
  margin-right: auto;
  box-shadow: 10px 10px 42px 0px rgba(0, 0, 0, 0.75);
  -moz-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
  user-select: none;
`
