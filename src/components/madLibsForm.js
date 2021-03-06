import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './madLibsForm.css'

class MadLibsForm extends Component {
  handleFormSubmit = (event) => {
    event.preventDefault();

  }

  render(){
    const storyInputs = this.props.words.map((words, index) =>{

      return (
        <input
        placeholder= { words.label }
        onChange={(event) => {this.props.updateWord(words.key, event.target.value)}}
        key = { index }
        />
      );
    });

    return (
      <div className="words-form-wrapper">
        <form className="words-form" onSubmit={this.handleFormSubmit}>
          { storyInputs }
          <input
            className="button submit"
            type="submit"
            value="Make My MadLib!"
          />
        </form>
      </div>
    );
  }
}

export default MadLibsForm;

MadLibsForm.propTypes = {
  words: PropTypes.array,
  updateWord: PropTypes.func,
}
