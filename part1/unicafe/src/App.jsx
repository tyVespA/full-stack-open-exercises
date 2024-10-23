import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const [score, setScore] = useState(0);
  const [average, setAverage] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);

  console.log("avarage " + average);
  console.log("score " + score);
  return (
    <div>
      <h2>give feedback</h2>
      <Button
        text="good"
        onClick={() => {
          const newGood = good + 1;
          const newScore = score + 1;
          const newAll = all + 1;

          setGood(good + 1);
          setAll(all + 1);
          setScore(score + 1);
          setAverage(newScore / newAll);
          setPositiveFeedback((newGood / newAll) * 100 + " %");
        }}
      />
      <Button
        text="neutral"
        onClick={() => {
          const newGood = good;
          const newScore = score;
          const newAll = all + 1;

          setNeutral(neutral + 1);
          setAll(all + 1);
          setAverage(newScore / newAll);
          //   setAverage(score / all);
          setPositiveFeedback((newGood / newAll) * 100 + " %");
        }}
      />
      <Button
        text="bad"
        onClick={() => {
          const newGood = good;
          const newScore = score - 1;
          const newAll = all + 1;

          setBad(bad + 1);
          setAll(all + 1);
          setScore(score - 1);
          setAverage(newScore / newAll);
          setPositiveFeedback((newGood / newAll) * 100 + " %");
        }}
      />
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positiveFeedback}</p>
    </div>
  );
};

export default App;
