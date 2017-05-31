// @flow

import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

const Search = (props :{
  searchTerm: string, // eslint-disable-line react/no-unused-prop-types
  shows: Array<Show> }) => ( 
  handleSearchTermChange = (
    event: SyntheticKeyboardEvent & { target: HTMLInputElement }
  ) => {
    this.setState({ searchTerm: event.target.value });
  }
  render() {
    return (
      <div className="search">
        <Header showSearch />
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
)

export default connect(mapStateToProps)(Search);
