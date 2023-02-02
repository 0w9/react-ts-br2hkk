import * as React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const [goal, setGoal] = useState('built a SaaS app');
  const [metric, setMetric] = useState('Hours');
  const [totalMetric, setTotalMetric] = useState('10');

  return (
    <>
      <nav class="bg-white p-4 shadow-lg">
        <div class="container mx-auto flex items-center justify-center">
          <div class="ml-4">
            <h1 class="rounded-lg py-2 px-4 font-medium text-blue-500 hover:text-blue-700" href="#">Pricing</h1>
          </div>
        </div>
      </nav>

      <div className="flex items-center justify-center h-screen">
        <form className="w-1/2 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-lg font-medium mb-4">Enter Metric</h2>
          <input
            className="bg-gray-200 p-2 rounded-lg w-full mb-4"
            type="text"
            placeholder="built a SaaS app"
            onChange={(e) => {
              setGoal(e.target.value);
            }}
          />

          <input
            className="bg-gray-200 p-2 rounded-lg w-full mb-4"
            type="text"
            placeholder="10"
            onChange={(e) => {
              setTotalMetric(e.target.value);
            }}
          ></input>

          <select
            className="bg-gray-200 p-2 rounded-lg w-full mb-4"
            onChange={(e) => {
              setMetric(e.target.value);
            }}
          >
            <optgroup label="Time">
              <option>Hours</option>
              <option>Days</option>
              <option>Weeks</option>
              <option>Months</option>
              <option>Years</option>
            </optgroup>
          </select>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
            Submit
          </button>
        </form>
      </div>

      <div className="container mx-auto mt-2">
        <div className="flex flex-wrap">
          <div className="w-1/2 p-4">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium mb-2">🧵 Thread</h3>
              <h2 className="text-lg font-medium mb-4">
                How I {goal} in {totalMetric} {metric}.
              </h2>
              <p className="text-gray-600 mb-4">
                I {goal} in 10 days using programming. This is how:
              </p>
            </div>
          </div>
          <div className="w-1/2 p-4">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <h3 className="text-lg font-medium mb-2">🧵 Thread</h3>
              <h2 className="text-lg font-medium mb-4">
                How I {goal} in {totalMetric} {metric}.
              </h2>
              <p className="text-gray-600 mb-4">
                This is guide teaches you everything until you {goal} in {totalMetric} {metric}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
