import './Card.css'

const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card)
    } else {
    }
  }
  return (
    <div className="card" key={card.id}>
      <div className={flipped ? `flipped` : null}>
        <img className="front" src={card.src} alt="card front" />
        <img className="back" src="./img/cover.png" onClick={handleClick} alt="card back" />
      </div>
    </div>
  )
}

export default Card
