import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "../assets/Home.css";

const Navigation = () => {
  return (
    <nav>
      <Link to="/" className="home-button"><FontAwesomeIcon icon={faArrowLeft} /></Link>
    </nav>
  );
};

export default Navigation;
