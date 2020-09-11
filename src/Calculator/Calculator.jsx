import React from 'react'
import Display, { fieldIsEmpty } from './Display'
import Button from './Button'

function currentField(value) {
  return value.operator === null ? ['x', value.x] : ['y', value.y]
}

function fieldToString(field) {
  var value = ''
  if (!fieldIsEmpty(field)) {
    if (field.i) {
      value += field.i
    }
    if (field.hasFloat) {
      value += '.'
    }
    if (field.f) {
      value += field.f
    }
  }
  return value || '0'
}

function stringToField(str) {
  var p = str.split('.')
  var field = { i: p[0], f: p[1] || '', hasFloat: p.length === 2 }
  return field
}

function getCalValue(calInfo) {
  var x = fieldIsEmpty(calInfo.x) ? 0 : parseFloat(fieldToString(calInfo.x))
  var y = fieldIsEmpty(calInfo.y) ? 0 : parseFloat(fieldToString(calInfo.y))

  return cal(x, y, calInfo.operator)
}

function cal(x, y, operator) {
  var result = 0
  switch (operator) {
    case '+':
      result = x + y
      break
    case '-':
      result = x - y
      break
    case '×':
      result = x * y
      break
    case '÷':
      result = x / y
      break
    default:
      result = x
      break
  }
  return result
}

class Calculator extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.getDefaultValue(),
    }
  }

  getDefaultValue() {
    return {
      x: { i: '', f: '', hasFloat: false },
      y: { i: '', f: '', hasFloat: false },
      operator: null,
    }
  }

  handleClear = () => {
    this.setState({ value: this.getDefaultValue() })
  }

  handleTogglePossitive = () => {}

  handlePercent = () => {}

  handleOperator = (e) => {
    const o = e.target.innerHTML
    const { value } = this.state
    if (!fieldIsEmpty(value.x) && !fieldIsEmpty(value.y)) {
      this.handleEqual()
    }
    this.setState({
      value: {
        ...value,
        operator: o,
      },
    })
  }

  handleNumber = (e) => {
    const n = parseInt(e.target.innerHTML)

    var [key, current] = currentField(this.state.value)
    if (current.hasFloat) {
      current.f += '' + n
    } else {
      if (n === 0) {
        if (parseInt(current.i) !== 0) {
          current.i += '' + n
        }
      } else {
        current.i += '' + n
      }
    }

    this.setState({
      value: {
        ...this.state.value,
        [key]: current,
      },
    })
  }

  handleFloat = () => {}

  handleEqual = () => {
    const { value } = this.state
    var result = getCalValue(value)
    var oldOperator = value.operator
    const newValue = this.getDefaultValue()
    newValue.x = stringToField(result.toString())
    newValue.operator = oldOperator


    this.setState({ value: newValue })
  }

  render() {
    const { value } = this.state
    console.log(value)

    return (
      <div>
        <h1>计算器</h1>
        <ul id="cal">
          <Display value={value} />
          <Button type="func" onClick={this.handleClear}>
            C
          </Button>

          <Button type="func" onClick={this.handleTogglePossitive}>
            ±
          </Button>
          <Button type="func" onClick={this.handlePercent}>
            ％
          </Button>
          <Button type="operator" onClick={this.handleOperator}>
            ÷
          </Button>
          <Button onClick={this.handleNumber}>7</Button>
          <Button onClick={this.handleNumber}>8</Button>
          <Button onClick={this.handleNumber}>9</Button>
          <Button type="operator" onClick={this.handleOperator}>
            ×
          </Button>
          <Button onClick={this.handleNumber}>4</Button>
          <Button onClick={this.handleNumber}>5</Button>
          <Button onClick={this.handleNumber}>6</Button>
          <Button type="operator" onClick={this.handleOperator}>
            -
          </Button>
          <Button onClick={this.handleNumber}>1</Button>
          <Button onClick={this.handleNumber}>2</Button>
          <Button onClick={this.handleNumber}>3</Button>
          <Button type="operator" onClick={this.handleOperator}>
            +
          </Button>
          <Button size={2} onClick={this.handleNumber}>
            0
          </Button>
          <Button onClick={this.handleFloat}>.</Button>
          <Button type="operator" onClick={this.handleEqual}>
            =
          </Button>
        </ul>
      </div>
    )
  }
}

export default Calculator
