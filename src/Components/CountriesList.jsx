import React, { Component, Fragment } from 'react'
import Countries from '../countries.json'
import { NavLink } from 'react-router-dom';

export default class CountriesList extends Component {

    state = {
        countriesDisplayed: Countries
    }

    render() {
        return (
          <div id="countries-list">
            {this.state.countriesDisplayed.map((eachCountry) => {
              return (
                <Fragment>
                  <NavLink to={`/country/${eachCountry.cca3}`}>{eachCountry.name.common}</NavLink>
                </Fragment>
              );
            })}
          </div>
        );
    }
}