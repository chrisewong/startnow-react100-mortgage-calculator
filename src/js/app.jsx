import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loanBalance: "",
      intRate: "",
      payment: "",
      term: "15"

    }
    this.updateBalance = this.updateBalance.bind(this);
    this.updateRate = this.updateRate.bind(this);
    this.updateTerm = this.updateTerm.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  updateBalance(e) {
    this.setState({ loanBalance: e.target.value });
  }
  updateRate(e) {
    this.setState({ intRate: e.target.value });
  }
  updateTerm(e) {
    this.setState({ term: e.target.value });
  }
  // update(e) { fonz wrote this
  //   this.setState({
  //     [e.target.name] : e.target.value
  //   })
  // }

  calculate(e) {
    e.preventDefault();
    let term = this.state.term;
    let loanBalance = this.state.loanBalance;
    let intRate = this.state.intRate;

    let o = intRate / 100 / 12;
    let month = term * 12;
    let topEq = o * Math.pow((1 + o), month);
    let btmEq = Math.pow((1 + o), month) - 1;
    let m = loanBalance * (topEq / btmEq);
    let q = m.toFixed(2);

    this.setState({
     payment: "$" + q + " is your monthly payment."
    })
    
    
  }

  // your Javascript goes here
  render() {
    return (
      <div>
      <div className attribute="container">
        <div className="page-header">
          <h3>Mortgage Calculator</h3>
        </div>
        {/* your JSX goes here */}
        <div className="row">
          <div className="col-md-4">
              <form className="form-horizontal" onSubmit={this.calculate}>
                <div className="panel-body">
                  <div className="input-group">Loan Balance
                <div>
                  <input
                    id="Loan Balance"
                    name="balance"
                    className="form-control"
                    placeholder="Enter amount"
                    type="number"
                    value={this.state.loanBalance}
                    onChange={this.updateBalance}
                  />
                  </div>
                  </div>
                   </div>
                <div className="panel-body">
                <div className="input-group">Interest Rate (%)
                <input
                  id="rate"
                  name="rate"
                  type="number"
                  className="form-control"
                  step="0.01"
                  value={this.state.intRate}
                  onChange={this.updateRate}
                />
                </div>
                </div>
              <div className="btn-group col-md10">
              <div className="input-group">
                <select
                  name="term"
                  type="number"
                  value={this.state.term}
                  onChange={this.updateTerm}>
                  <option>15</option>
                  <option>30</option>
                </select>
                </div>
              </div>
              

              <div className="form-group">
                <button
                  className="btn btn-primary btn-block"
                  name="submit"
                  type="submit"
                  value="Alert the text input">
                  Calculate
                </button>
              </div>
              
              <div id="output"><p>{this.state.payment}</p></div>
              </form>
            
          
          </div>
        </div>
      </div>
      </div>
    );
  }
}
