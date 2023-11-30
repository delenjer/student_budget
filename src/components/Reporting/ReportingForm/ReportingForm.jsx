import {useContext} from 'react';
import {useForm} from 'react-hook-form';

import { v4 as uuidv4 } from 'uuid';
import {observer} from 'mobx-react';
import {budgetStoreContext} from '../../../stores/budgetStore/budgetStore';
import {Form} from '../../Form/Form';

export const ReportingForm = observer(({ currMonth, setShow }) => {
  const store = useContext(budgetStoreContext);
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      income: '',
      costs: '',
    },
  });

  const onSubmit = (data) => {

    const budgetData = {
      id: uuidv4(),
      month: currMonth,
      income: data.income,
      costs: data.costs,
    }

    store.addBudget(budgetData);

    reset();
    setShow(true);
  }

  return (
    <div className="reporting__content">
      <div className="reporting__month">
        Current month:

        <span className="reporting__month-val">{currMonth}</span>
      </div>

      <Form
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        control={control}
      />
    </div>
  )
});
