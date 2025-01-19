import css from './Catalog.module.css';
import CampersList from '../CampersList/CampersList.jsx';
import Filters from '../Filters/Filters.jsx';
import { useSelector } from 'react-redux';
import { selectError } from '../../redux/selectors.js';
import { toast } from 'react-toastify';

export default function Catalog() {
  const error = useSelector(selectError);
  console.log(error, 'error');
  const notify = () => toast('Something went wrong. Please, try again');
  if (error) notify();

  return (
    <div className={css.container}>
      <aside className={css.filters}>
        <Filters />
      </aside>

      <section className={css.results}>
        <CampersList />
      </section>
    </div>
  );
}
