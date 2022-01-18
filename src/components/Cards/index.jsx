import PropTypes from 'prop-types'
import { Component } from 'react'
import styled from 'styled-components'
import DefaultPicture from '../../assets/profile.png'

const CardDescription = styled.span`
  color: black;
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`

const CardTitle = styled.div`
  color: #000000;
  font-size: 22px;
  font-weight: normal;
  align-self: center;
  height: 25px;
  display: flex;
  align-items: center;
`

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: white;
  border-radius: 30px;
  width: 300px;
  height: 300px;
  &:hover {
    cursor: pointer;
  }
`

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFavorite: false,
    }
  }

  render() {
    const { picture, label, title } = this.props

    return (
      <CardWrapper onClick={this.setFavorite}>
        <CardDescription>{label}</CardDescription>
        <CardTitle>{title}</CardTitle>
        <CardImage src={picture} alt="freelance" />
      </CardWrapper>
    )
  }
}

Card.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
}

Card.defaultProps = {
  description: '',
  title: '',
  picture: DefaultPicture,
  theme: 'light',
}

export default Card
