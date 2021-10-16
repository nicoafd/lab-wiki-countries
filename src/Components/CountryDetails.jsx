import React, { Component } from 'react'
import countries from '../countries.json';
import { Fragment } from 'react';


export default class CountryDetails extends Component {
  state = {
    countries: countries,
    country: null,
  };

  getInfo = () => {
    const country = this.state.countries.filter((eachCountry) => {
      return eachCountry.cca3 === this.props.match.params.cca3;
    })[0];

    this.setState({ country: country });
  };

  componentDidMount() {
    this.getInfo();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.country &&
      this.props.match.params.cca3 !== prevProps.match.params.cca3
    ) {
      this.getInfo();
    }
    console.log(prevState)
  }

  render() {
    return (
      <div>
        <h2>{this.props.match.params.cca3}</h2>

        <p>{this.state.country && this.state.country.capital}</p>
        <p>{this.state.country && this.state.country.area}</p>
      </div>
    );
  }
}
