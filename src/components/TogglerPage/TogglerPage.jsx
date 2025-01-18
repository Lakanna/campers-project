import css from './TogglerPage.module.css';
import clsx from 'clsx';

export default function TogglerPage({ activeTab, onTabChange }) {
  return (
    <div className={css.tabs}>
      <button
        className={clsx(css.tab, {
          [css.activeTab]: activeTab === 'details',
        })}
        onClick={() => onTabChange('details')}
      >
        Features
      </button>
      <button
        className={clsx(css.tab, {
          [css.activeTab]: activeTab === 'reviews',
        })}
        onClick={() => onTabChange('reviews')}
      >
        Reviews
      </button>
    </div>
  );
}
