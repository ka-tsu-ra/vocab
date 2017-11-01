import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVocab } from '../../redux/reducer';
import WordCard from './WordCard';

class Home extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    getVocab();
  }

  render() {
    return (
      <div className="container">
        <h1>Vocab Tester</h1>
        <h2>All Words</h2>
        {
          this.props.vocab
          ? (this.props.vocab.map(word => {
              return (
                <div>
                  <WordCard word={word} />
                </div>
              )
            }))
          : <p>なさそうね。。。</p>
        }
      </div>
    )
  }
}

const mapState = ({ vocab }) => ({ vocab });
const mapDispatch = { getVocab };
export default connect(mapState, mapDispatch)(Home);
