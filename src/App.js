import React from "react"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      input1: '',
      input2: '',
      operator: '+',
      result: ''
    }
    this.setInputState = this.setInputState.bind(this)
    this.calculation = this.calculation.bind(this)
    this.selectOperator = this.selectOperator.bind(this)
  }

  setInputState(event) {
    const name = event.target.getAttribute("name")
    this.setState({[`${name}`]: parseFloat(event.target.value)})
  }

  selectOperator(event) {
    const operator = event.target.value
    this.setState({operator: operator})
  }

  calculation() {
    let result;
    switch (this.state.operator) {
      case '+': result = this.state.input1 + this.state.input2
        break;
      case '-': result = this.state.input1 - this.state.input2
        break;
      case '*': result = this.state.input1 * this.state.input2
        break;
      case '/': result = this.state.input1 / this.state.input2
        break;
    }
    this.setState({result: result})
  }

  render() {
    return (
      <div className="App">
        <h1>Kalkulator</h1>
        <input name="input1" type="number" value={this.state.input1} onInput={this.setInputState}/>
        <select name="operators" onInput={this.selectOperator}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input name="input2" type="number" value={this.state.input2} onInput={this.setInputState} />
        <button onClick={this.calculation}>=</button>
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default App;
