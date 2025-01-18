import css from './Reviews.module.css';

export default function Reviews({ reviews }) {
  return <div className={css.reviewsContainer}>{reviews.length}</div>;
}
