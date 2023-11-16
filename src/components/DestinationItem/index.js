import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imageUrl, name} = destinationDetails

  return (
    <li className="destination-items">
      <img src={imageUrl} alt={name} className="image" />
      <p className="name">{name}</p>
    </li>
  )
}

export default DestinationItem
