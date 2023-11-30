import {Controller} from 'react-hook-form';
import {TextField} from '../TextField/TextField';
import {Button} from '../Button/Button';

export const Form = ({ handleSubmit, onSubmit, control }) => (
  <form className="reporting__form form" action="#" onSubmit={handleSubmit(onSubmit)}>
    <Controller
      name="income"
      control={control}
      render={(
        { field: { onChange, value, name } }) => (
        <label className="label">
          <TextField
            value={value}
            type="number"
            name={name}
            placeholder="Add income"
            fieldClass={'field'}
            handle={onChange}
          />
        </label>
      )}
    />

    <Controller
      name="costs"
      control={control}
      render={(
        { field: { onChange, value, name } }) => (
        <label className="label">
          <TextField
            value={value}
            type="number"
            name={name}
            placeholder="Add costs"
            handle={onChange}
          />
        </label>
      )}
    />

    <Button
      type="submit"
      name="button"
    >
      Add
    </Button>
  </form>
)
