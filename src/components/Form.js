import style from "./Form.module.css";

import { useState } from "react";

const Form = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const heightNum = Number(height);
    const weightNum = Number(weight);

    const imc = weightNum / Math.pow(heightNum, 2);
    console.log(imc.toFixed(2));
  };

  return (
    <form onSubmit={handleSubmit} className={style.formContainer}>
      <label>
        Altura
        <input
          type="text"
          name="altura"
          placeholder="Sua altura em cm..."
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <label>
        Peso
        <input
          type="text"
          name="peso"
          placeholder="Seu peso em kg's"
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <input type="submit" value="Calcular" className={style.btnForm} />
    </form>
  );
};

export default Form;
