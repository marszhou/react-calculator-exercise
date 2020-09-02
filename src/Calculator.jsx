import React from 'react'

const Calculator = () => {
  return (
    <div>
      <h1>计算器</h1>
      <ul id="cal">
        <li className="size4 input">2345</li>
        <li className="key func">C</li>
        <li className="key func">±</li>
        <li className="key func">％</li>
        <li className="key operator">÷</li>
        <li className="key">7</li>
        <li className="key">8</li>
        <li className="key">9</li>
        <li className="key operator">×</li>
        <li className="key">4</li>
        <li className="key">5</li>
        <li className="key">6</li>
        <li className="key operator">-</li>
        <li className="key">1</li>
        <li className="key">2</li>
        <li className="key">3</li>
        <li className="key operator">+</li>
        <li className="key size2">0</li>
        <li className="key">.</li>
        <li className="key operator">=</li>
      </ul>
    </div>
  )
}

export default Calculator
