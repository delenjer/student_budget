import {useContext, useEffect, useMemo, useRef, useState} from 'react';

import {WrapperPage} from '../WrapperPage/WrapperPage';
import {observer} from 'mobx-react';
import {budgetStoreContext} from '../../stores/budgetStore/budgetStore';
import {Table} from '../Table/Table';
import {getExchange} from '../../api/api';
import {calculationTotal} from '../../utils/helper';
import {EditDashboardTable} from '../EditDashboardTable/EditDashboardTable';
import {Modal} from '../Modal/Modal';
import {TotalInfo} from './TotalInfo/TotalInfo';

export const Dashboard = observer(() => {
  const [currentExchange, setCurrentExchange] = useState({});
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(null);

  const store = useContext(budgetStoreContext);

  useEffect(() => {
    getExchange().then(res => setCurrentExchange(res));
  }, []);

  const total = useMemo(() => (
    calculationTotal({
      arrList: store.budgets,
      exchangeUSD: currentExchange.USD,
      exchangeEUR: currentExchange.EUR
    })
  ), [store.budgets, currentExchange]);

  const handleRowId = (id) => {
    ref.current = id;
  }

  return (
    <WrapperPage>
      <section className="container dashboard">
        <h2 className="dashboard__title">Dashboard</h2>

        <TotalInfo
          uah={total.uah}
          usd={total.usd}
          eur={total.eur}
        />

        <Table
          list={store.budgets}
          currentExchange={currentExchange}
          handleRemove={store.removeBudget}
          handleDialog={setOpen}
          handleId={handleRowId}
        />
      </section>

      {
        isOpen && (
          <Modal
            title="Change period"
            handle={setOpen}
          >
            <EditDashboardTable idRow={ref.current} setOpen={setOpen} />
          </Modal>
        )
      }
    </WrapperPage>
  )
});
