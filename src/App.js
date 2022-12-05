import './App.css';
import { Day1, Day2, Day3, Day4, Day5, Footer } from './component';
import { results2022 } from './static-data/results-2022';

function App() {
  console.log(results2022[0].day1)
  return (
    <div className="App">
      <header className="App-header">
        <h2>Advent of Code 2022</h2>
      </header>
      <div className="container">
        <Day1 results={results2022[0]} />
        <Day2 results={results2022[1]} />
        <Day3 results={results2022[2]} />
        <Day4 results={results2022[3]} />
        <Day5 results={results2022[4]} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
