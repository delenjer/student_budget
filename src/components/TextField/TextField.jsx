
export const TextField = (
{
  value,
  type,
  name,
  handle,
  placeholder,
  error,
}) => {
  return (
    <input
      value={value}
      type={type}
      name={name}
      className={error ? 'input input__error' : 'input'}
      onChange={(event) => handle(event)}
      placeholder={placeholder}
    />
  )
};
