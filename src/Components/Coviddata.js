import React, { Component, Fragment } from "react";

class Coviddata extends Component {
  constructor(){
      super();
      this.state={
          countries:[],
          searchData:null
      }
  }
  
  fetchData = () => {
    fetch(`https://api.covid19api.com/summary`)
    .then(actualdata => actualdata.json())
    .then(realdata => {
      const { Countries } = realdata;
        this.setState({
          allCountries: Countries,
          countries: Countries
        });
    })
    .catch(error => console.log(error));
  }

  componentDidMount() {
    this.fetchData();
  }

  searchByCountryName(search) {
    let filteredCountries = [];
    if (search === '') {
      filteredCountries = this.state.allCountries.slice();
    } else {
      const countries = this.state.allCountries.slice();
      const countryName = search.toLowerCase();
      filteredCountries = countries.filter(country => {
        const searchRegex = new RegExp(countryName, 'i');
        const countryN = country.Country.toLowerCase();
        const countryCode = country.CountryCode.toLowerCase();
        return countryN === countryName || countryCode === countryName || countryN.search(searchRegex) !== -1 || countryCode.search(searchRegex) !== -1
      });
    }

    this.setState({ countries: filteredCountries });
  }

  render() {
    return (
      <Fragment>
        <div className="container pt-5">
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search Country" onChange={(event) => this.searchByCountryName(event.target.value)} />
          </div>
          <table className="table border shadow">
            <thead className="bg-dark text-white">
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
                  <tr key={country.CountryCode}>
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
                <tr><td>Loading...</td></tr>
               }
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

export default Coviddata;
