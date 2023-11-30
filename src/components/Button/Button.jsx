
export const Button = ({ children, type, name, btnClass, handle }) => {

  const handleClick = (event) => {
    if (handle) {
      handle(event);
    }

    return null;
  }

  return (
    <button
      type={type}
      name={name}
      className={btnClass ? `button ${btnClass}` : 'button'}
      onClick={(event) => handleClick(event)}
    >
      {children}
    </button>
  )
}
