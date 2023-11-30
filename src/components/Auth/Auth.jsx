import {Controller, useForm} from 'react-hook-form';

import {TextField} from '../TextField/TextField';
import {Button} from '../Button/Button';
import {useNavigate} from 'react-router-dom';
import {setToken} from '../../utils/storage/storage';
import {PageRouters} from '../../routers';

export const Auth = () => {
  const navigate = useNavigate();

  const { handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      login: 'testLogin22',
      password: 's#dDA23@44#Ds',
    },
  });

  const onSubmit = (data) => {
    const token = data.login === process.env.REACT_APP_LOGO && data.password === process.env.REACT_APP_PASS;

    if (token) {
      setToken(token);

      navigate(PageRouters.Home, { replace: true });
    }

    reset();
  }

  return (
    <form action="#" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="login"
        control={control}
        rules={{ required: true }}
        render={(
          { field: { onChange, value, name } }) => (
          <label className="label">
            <TextField
              value={value}
              type="text"
              name={name}
              placeholder="Login"
              fieldClass={'field'}
              handle={onChange}
              error={!!errors.login}
            />
          </label>
        )}
      />

      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={(
          { field: { onChange, value, name } }) => (
          <label className="label">
            <TextField
              value={value}
              type="password"
              name={name}
              placeholder="Password"
              handle={onChange}
              error={!!errors.password}
            />
          </label>
        )}
      />

      <Button
        type="submit"
        name="button"
      >
        Sign in
      </Button>
    </form>
  )
}
