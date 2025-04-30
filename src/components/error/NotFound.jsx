import { Link } from "react-router-dom"
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">No encontramos lo que buscas..</p>
      <Link to="/" className="not-found-link">Regresar al inicio</Link>
    </div>
  )
}

export default NotFound