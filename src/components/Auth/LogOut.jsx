import {useNavigate} from 'react-router-dom';
import {setToken} from '../../utils/storage/storage';
import {PageRouters} from '../../routers';

export const LogOut = () => {
  const navigate = useNavigate();

  const onLogout = () => {
    navigate(PageRouters.Login);
    setToken(false);
  };

  return (
    <button
      type="button"
      name="log-out"
      className="log-out"
      onClick={onLogout}
    >
      Log out
    </button>
  )
}
