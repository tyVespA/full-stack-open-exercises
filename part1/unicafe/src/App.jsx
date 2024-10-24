import { useState } from "react";

const Button = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  if (props.all == 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={props.all} />
          <StatisticLine text="average" value={props.average} />
          <StatisticLine text="positive" value={props.positiveFeedback} />
        </tbody>
      </table>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);

  const [score, setScore] = useState(0);
  const [average, setAverage] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);

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
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positiveFeedback={positiveFeedback}
      />
    </div>
  );
};

export default App;
