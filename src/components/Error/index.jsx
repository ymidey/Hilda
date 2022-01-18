import styled from 'styled-components'
import ErrorIllustration from '../../assets/404.jfif'
import colors from '../../utils/styles/colors'
import { StyledLink } from '../../utils/styles/Atoms'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.backgroundLight}
`

const ErrorTitle = styled.h1`
  font-weight: 300;
  color: #000000
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color : ${colors.secondary}
`

const Illustration = styled.img`
  width: 400px;
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oups...</ErrorTitle>
      <Illustration src={ErrorIllustration} />
      <ErrorSubtitle>
        Il semblerait que vous vous êtes perdu.
      </ErrorSubtitle>
      <StyledLink to="/">
          Retourner à la maison
      </StyledLink>
    </ErrorWrapper>
  )
}

export default Error