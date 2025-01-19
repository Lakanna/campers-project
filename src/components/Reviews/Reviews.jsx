import Icon from '../Icon/Icon.jsx';
import css from './Reviews.module.css';

export default function Reviews({ reviews }) {
  return (
    <div className={css.reviewsContainer}>
      <ul>
        {reviews.map((item, idx) => {
          const {
            reviewer_name: name,
            reviewer_rating: rating,
            comment,
          } = item;
          return (
            <li key={idx} className={css.reviewItem}>
              <div className={css.container}>
                <div className={css.round}>
                  <h2>{name.charAt(0).toUpperCase()}</h2>
                </div>
                <div>
                  <p>{name}</p>
                  <div className="stars">
                    {Array(5)
                      .fill(null)
                      .map((_, idx) => (
                        <Icon
                          key={idx}
                          id="starDefault"
                          width={16}
                          height={16}
                          className={idx < rating ? css.filled : css.empty}
                        />
                      ))}
                  </div>
                </div>
              </div>
              <p className={css.comment}>{comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

//  "reviews": [
//         {
//             "reviewer_name": "Alice",
//             "reviewer_rating": 5,
//             "comment": "Exceptional RV! The Road Bear C 23-25 provided a comfortable and enjoyable journey for my family. The amenities were fantastic, and the space was well-utilized. Highly recommended!"
//         },
//         {
//             "reviewer_name": "Bob",
//             "reviewer_rating": 4,
//             "comment": "Great RV for a road trip. Spacious and well-equipped. Only minor issues with the bathroom setup, but overall a wonderful experience."
//         }
//     ]
