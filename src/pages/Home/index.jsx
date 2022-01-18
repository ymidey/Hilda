import homebanner from '../../assets/Hilda-home.jpg'
import { StyledLink } from '../../utils/styles/Atoms'
import styled from 'styled-components'

const HomeWrapper = styled.div`
  text-align: center;
`

const ImgHome = styled.img`
  max-width: 100%;
  height: auto;
`
function App() {
  return (
    <HomeWrapper>
      <ImgHome src={homebanner} className="App-logo" alt="logo" />

      <p>Connaissez-vous vraiment la série Hilda ?</p>

      <StyledLink to="/Questionnaire" $isFullLink>
        Passer le test 😉
      </StyledLink>
    </HomeWrapper>
  )
}

export default App
