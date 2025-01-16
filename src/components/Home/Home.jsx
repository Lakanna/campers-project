import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import css from './Home.module.css';

export default function Home() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/catalog');
  };
  return (
    <div className={css.container}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <h2 className={css.subtitle}>
        You can find everything you want in our catalog
      </h2>
      <Button text="View Now" handleClick={handleClick} />
    </div>
  );
}
