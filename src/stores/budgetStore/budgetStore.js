import { makeAutoObservable} from 'mobx';
import {createContext} from 'react';
import {v4 as uuidv4} from 'uuid';

class BudgetStore {
  budgets = [
    {
      id: uuidv4(),
      month: 'September',
      income: '1000',
      costs: '500',
    },
    {
      id: uuidv4(),
      month: 'October',
      income: '2000',
      costs: '1000',
    },
  ]

  constructor() {
    makeAutoObservable(this);
  }

  addBudget = (data) => {
    this.budgets.push(data);
  }

  editBudget = (data) => {
    this.budgets = this.budgets.map(budget => {
      if (budget.id === data.id) {
        return {
          ...budget,
          income: data.income,
          costs: data.costs,
        }
      }

      return budget;
    });
  }

  removeBudget = (id) => {
    this.budgets = this.budgets.filter((budget) => budget.id !== id);
  }
}

const budgetStore = new BudgetStore();
export const budgetStoreContext = createContext(budgetStore);
export default budgetStore;
