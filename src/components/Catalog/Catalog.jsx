import css from './Catalog.module.css';
import CampersList from '../CampersList/CampersList.jsx';
import Filters from '../Filters/Filters.jsx';

export default function Catalog() {
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
