const Card = ({ heading, description, thankYou, children }) => {
  const thankYouImg = thankYou && (
      <img className="thank-you-img" src={thankYou} alt="checkmark"/>
    )

  return (
    <div className="card-container">
      {thankYouImg}
      <h2 className="card-h2">{heading}</h2>
      <p className="card-description">{description}</p>
      {children}  
    </div>
  )
}

export default Card;