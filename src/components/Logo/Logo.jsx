import { Link } from 'react-router-dom';

import Icon from '../Icon/Icon.jsx';

export default function Logo() {
  return (
    <Link to="/">
      <Icon id="Logo" width={136} height={15} className="custom-class" />
    </Link>
  );
}
