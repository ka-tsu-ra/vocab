import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToTest } from '../../redux/reducer';

const WordCard = (props) => {
  const word = props.word
  return (
      <div className="word-card-container">
        <div className="side english">English:{word.english}</div>
        <div className="side kanji">Kanji:{word.kanji}</div>
        <div className="side kunyomi">kunyomi{word.kunyomi}</div>
        <div className="side onyomi">Onyomi{word.onyomi}</div>
        <div className="side compounds">Compounds{word.compounds}</div>
      </div>
  );
};

// <div className="clue-toggle">clue-toggler</div> To be added!
// Model to provide link to each compound - i.e. model has compounds and single words as nodes, which connec
// e.g. :Ji-[:IS_PART_OF]->:Compound or :Compound-[:CONTAINS_JI]->;Ji

const mapDispatch = {addToTest};
export default connect(null, mapDispatch)(WordCard);
