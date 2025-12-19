function Button({ buttonName, ...props }) {
  return <button {...props}>{buttonName} </button>;
}

export default Button;
