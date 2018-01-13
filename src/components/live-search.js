import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
         searchItem: ''
      }
  }
  render() {
    const characters = this.props.characters.filter(char =>
      char.name.toLowerCase().includes(
        this.state.searchItem.toLowerCase()
      )
    );


    return (
        <div className="live-search">
            <SearchForm onChange={searchItem => this.setState({searchItem})} />
            <CharacterCount count={characters.length} />
            <CharacterList characters={characters} />
        </div>
    );
  }
}
//
