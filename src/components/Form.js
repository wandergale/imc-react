import style from "./Form.module.css";

import { useState } from "react";

const Form = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [imc, setImc] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const heightNum = Number(height);
    const weightNum = Number(weight);

    const imc = weightNum / Math.pow(heightNum, 2);
    setImc(imc.toFixed(2));

    // zerando
    setHeight("");
    setWeight("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={style.formContainer}>
        <div className={style.grupoHeight}>
          <input
            type="text"
            name="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
          <label for="height">Altura</label>
        </div>
        <div className={style.grupoWeight}>
          <input
            type="text"
            name="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
          <label for="weight">Peso</label>
        </div>
        <input type="submit" value="Calcular" className={style.btnForm} />
      </form>

      {imc && <h3>Seu IMC é de {imc}!</h3>}
    </>
  );
};

export default Form;
