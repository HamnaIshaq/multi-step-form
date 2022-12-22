const InputField = ({ label, type, placeholder, inputName, input, setInput, title, error, setError }) => {

  const onPersonalInfoChange = (e) => {
    const { name, value } = e.target;
    if(name.trim().length !== 0)
      setError({name: '', email: '', phoneNumber: ''});
    setInput({...input, [name]: value});
  }
  return (
    <div className="input-container">
      <div className="input-label-container flex justify-space-between">
        <label className="input-label">{label}</label>
        <small className={`error-msg ${error[inputName] === '' ? "hide" : ""}`}>{error[inputName]}</small>
      </div>
      <input 
        className={`input-field ${error[inputName] === '' ? "" : "error-input-field"}`}
        type={type}
        placeholder={placeholder}
        value={input[inputName]}
        name={inputName}
        onChange={onPersonalInfoChange}
        title={title ? title : ""}
        required
      />
    </div>
  );
}

export default InputField;