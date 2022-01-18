import { Link } from 'react-router-dom'
import styled from 'styled-components'
import HildaLogo from '../../assets/HildaLogo-removebg-preview.png'
import { StyledLink } from '../../utils/styles/Atoms'

const HomeLogo = styled.img`
  height: 70px;
`

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <HomeLogo src={HildaLogo} />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/personnages">Personnages</StyledLink>
        <StyledLink to="/Questionnaire" $isFullLink>
          Faire le test
        </StyledLink>
      </div>
    </NavContainer>
  )
}

export default Header
