import style from "./Form.module.css";

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={style.formContainer}>
      <label>
        Altura
        <input type="text" name="altura" placeholder="Sua altura em cm..." />
      </label>
      <label>
        Peso
        <input type="text" name="peso" placeholder="Seu peso em kg's" />
      </label>
      <input type="button" value="Calcular" className={style.btnForm} />
    </form>
  );
};

export default Form;
