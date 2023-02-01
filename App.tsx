import * as React from 'react';
import './style.css';
import {useState} from "react"

export default function App() {

  const [goal, setGoal] = useState("")

  return <div className="flex items-center justify-center h-screen">
  <form className="w-1/2 p-6 bg-white rounded-lg shadow-lg">
    <h2 className="text-lg font-medium mb-4">Enter Metric</h2>
    <input className="bg-gray-200 p-2 rounded-lg w-full mb-4" type="text" placeholder="Metric" />
    <select className="bg-gray-200 p-2 rounded-lg w-full mb-4">
      <option>Time</option>
      <option>xyz</option>
    </select>
    <input className="bg-gray-200 p-2 rounded-lg w-full mb-4" type="text" placeholder="Like 10 days"></input>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">Submit</button>
  </form>
</div>

<div className="container mx-auto mt-2">
  <div className="flex flex-wrap">
    <div className="w-1/2 p-4">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-medium mb-2">🧵 Thread</h3>
        <h2 className="text-lg font-medium mb-4">How I made 1k$ in 10 days.</h2>
        <p className="text-gray-600 mb-4">I made 1k$ in 10 days using programming. This is how:</p>
      </div>
    </div>
    <div className="w-1/2 p-4">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-medium mb-2">🧵 Thread</h3>
        <h2 className="text-lg font-medium mb-4">How I {goal} in 10 days.</h2>
        <p className="text-gray-600 mb-4">I made 1k$ in 10 days using programming. This is how:</p>
      </div>
    </div>
  </div>
</div>
}
