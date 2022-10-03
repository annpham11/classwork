import "./styles.css";
import { useState } from "react";

const HappinessPicker = ({ score, setScore }) => {
  const emojiScores = ["😦", "😞", "😐", "🙂", "😁"];

  const getTemplate = () => {
    return [0, 1, 2, 3, 4].map((value) => (
      <button
        className={score === value ? "selected" : ""}
        onClick={() => setScore(value)}
      >
        {emojiScores[value]}
      </button>
    ));
  };
  return <div>{getTemplate()}</div>;
};

export default function App() {
  const [foodScore, setFoodScore] = useState(0);
  const [serviceScore, setServiceScore] = useState(0);
  const [valueScore, setValueScore] = useState(0);
  return (
    <div>
      <div className="happiness">
        Food
        <br />
        <HappinessPicker score={foodScore} setScore={setFoodScore} />
      </div>
      <br />
      <div className="happiness">
        Service
        <br />
        <HappinessPicker score={serviceScore} setScore={setServiceScore} />
      </div>
      <br />
      <div className="happiness">
        Value for money
        <br />
        <HappinessPicker score={valueScore} setScore={setValueScore} />
      </div>
      <br />
      Total Score : {foodScore + serviceScore + valueScore}/12
    </div>
  );
}
