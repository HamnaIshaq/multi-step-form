import { Link } from 'react-router-dom';
import ErrorImg from '../assets/images/404-error.png';
import '../assets/styles/page-not-found.css';


const Error = () => {
  return (
    <section className="error-section">
      <h2 className="error-h2">404</h2>
      <div className="error-img-container">
        <img className="error-img" src={ErrorImg} alt="error" />
      </div>
      <p className="error-description">Oh no! We could not find the page you were looking for!</p>
      <Link to="/" className="go-back-home">
        <button type="button" className="btn next-btn">Go back to home</button>
      </Link>
    </section>
  );
}

export default Error;