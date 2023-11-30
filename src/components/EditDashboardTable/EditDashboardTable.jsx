import {Form} from '../Form/Form';
import {useForm} from 'react-hook-form';
import {budgetStoreContext} from '../../stores/budgetStore/budgetStore';
import {useContext} from 'react';

export const EditDashboardTable = ({ idRow, setOpen }) => {
  const store = useContext(budgetStoreContext);

  const getDefaultValue = store.budgets.reduce((acc, budget) => {
    if (budget.id === idRow) {
      acc = {
        income: budget.income,
        costs: budget.costs
      }
    }

    return acc;
  }, {});

  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      income: getDefaultValue.income,
      costs: getDefaultValue.costs,
    },
  });

  const onSubmit = (data) => {

    const budgetData = {
      id: idRow,
      income: data.income,
      costs: data.costs,
    }

    store.editBudget(budgetData);

    reset();
    setOpen(false);
  }

  return (
    <Form
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      control={control}
    />
  )
};
