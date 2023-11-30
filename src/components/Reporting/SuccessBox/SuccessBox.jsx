import {Link} from 'react-router-dom';
import {PageRouters} from '../../../routers';

export const SuccessBox = () => (
  <div className={'success-box'}>
    <div className="success-box__title">OK! Go to Dashboard!</div>

    <Link
      className="button success-box__link"
      to={PageRouters.Dashboard}
    >
      Dashboard
    </Link>
  </div>
);
