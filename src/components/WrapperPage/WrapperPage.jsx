import {useEffect, useSyncExternalStore} from 'react';
import {useNavigate} from 'react-router-dom';

import {Header} from '../Header/Header';
import {store} from '../../utils/storage/storage';
import {PageRouters} from '../../routers';

export const WrapperPage = ({ children }) => {
  const navigate = useNavigate();
  const loginStatus = useSyncExternalStore(store.subscribe, store.getSnapshot, store.getServerSnapshot);
  const useStatus = JSON.parse(loginStatus);

  useEffect(() => {
    if (!useStatus) {
      navigate(PageRouters.Login, { replace: true });
    }
  }, [loginStatus]);

  return (
    <div className="page">
      <Header />

      {children}
    </div>
  )
}
