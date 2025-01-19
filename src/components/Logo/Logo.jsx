import { Link } from 'react-router-dom';

import Icon from '../Icon/Icon.jsx';
import css from './Logo.module.css';

export default function Logo() {
  return (
    <Link to="/">
      <Icon id="Logo1" width={63} height={15} className="custom-class" />
      <Icon id="Logo2" width={71} height={15} className={css.second} />
    </Link>
  );
}
