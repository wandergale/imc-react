import style from "./Results.module.css";

const Results = () => {
  return (
    <table className={style.tableCalc}>
      <thead>
        <tr>
          <td>Interpretação do IMC</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>IMC</td>
          <td>Classificação</td>
          <td>Obesidade (GRAU)</td>
        </tr>
        <tr>
          <td>Menor que 18.5</td>
          <td>Magreza</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Entre 18.5 e 24.9</td>
          <td>Normal</td>
          <td>0</td>
        </tr>
        <tr>
          <td>Entre 25 e 29.9</td>
          <td>Sobrepeso</td>
          <td>I</td>
        </tr>
        <tr>
          <td>Entre 30 e 39.9</td>
          <td>Obesidade</td>
          <td>II</td>
        </tr>
        <tr>
          <td>Maior que 40</td>
          <td>Obesidade grave</td>
          <td>III</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Results;
