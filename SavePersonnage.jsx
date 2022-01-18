import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Cards from '../../components/Cards'
import colors from '../../utils/styles/colors'
import { Loader } from '../../utils/styles/Atoms'
import { useFetch } from '../../utils/hooks'

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  padding-bottom: 30px;
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Personnages() {
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/freelances`
  )

  const freelancersList = data?.freelancersList

  if (error) {
    return <span>Il y a un problème</span>
  }

  return (
    <div>
      <PageTitle>Les personnages principaux de la série Hilda</PageTitle>
      {isLoading ? (
        <LoaderWrapper>
          <Loader data-testid="loader" />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList?.map((profile) => (
            <Link key={`freelance-${profile.id}`} to={`/profile/${profile.id}`}>
              <Cards
                title={profile.name}
                description={profile.description}
                picture={profile.picture}
              />
            </Link>
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

export default Personnages
