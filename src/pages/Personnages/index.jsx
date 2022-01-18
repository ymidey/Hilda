import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Cards from '../../components/Cards'
import { Loader } from '../../utils/styles/Atoms'
import { useFetch } from '../../utils/hooks'

const CardsContainer = styled.div`
  display: grid;
  gap: 15px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
`

const PageTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  padding-bottom: 25px;
`
const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Personnages() {
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/personnages`
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
          {freelancersList?.map((personnage) => (
            <Link
              key={`personnage-${personnage.id}`}
              to={`/personnage/${personnage.id}`}
            >
              <Cards
                title={personnage.name}
                label={personnage.description}
                picture={personnage.picture}
              />
            </Link>
          ))}
        </CardsContainer>
      )}
    </div>
  )
}

export default Personnages
