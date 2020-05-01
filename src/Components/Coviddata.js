import React, { Component, Fragment } from "react";

class Coviddata extends Component {
  constructor(){
      super();
      this.state={
          countries:[]
      }
  }
  
  componentDidMount() {

    fetch('https://api.covid19api.com/summary')
      .then(actualdata => actualdata.json())
      .then(realdata => {
        console.log(realdata);
        const { Countries } = realdata;
          this.setState({
            countries: Countries
          })
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <Fragment>
        <div className="container pt-5">
          <table className="table border shadow">
            <thead class="bg-dark text-white">
              <tr>
                <th>Countries</th>
                <th>Date</th>
                <th>NewConfirmed</th>
                <th>NewDeaths</th>
                <th>NewRecovered</th>
                <th>TotalConfirmed</th>
                <th>TotalDeaths</th>
                <th>TotalRecovered</th>
              </tr>
            </thead>
            <tbody> 
               {
               this.state.countries.length ? this.state.countries.map(country => (
                  <tr>
                      <td>{country.Country}</td>
                      <td>{new Date(country.Date).toDateString()}</td>
                      <td>{country.NewConfirmed}</td>
                      <td>{country.NewDeaths}</td>
                      <td>{country.NewRecovered}</td>
                      <td>{country.TotalConfirmed}</td>
                      <td>{country.TotalDeaths}</td>
                      <td>{country.TotalRecovered}</td>
                  </tr>
                )) : 
                <h1 className="text-center">LOADING...</h1>
               }
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

export default Coviddata;
