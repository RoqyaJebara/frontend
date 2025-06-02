function AlertButton({ name, grade }) {
  const handleClick = () => {
    alert(name + " - " + grade);
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default AlertButton;