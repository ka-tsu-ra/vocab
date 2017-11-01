import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVocab } from '../redux/reducer';
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
      <div classHame="container">
        <p>Vocab Tester</p>
        {
          this.props.vocab
          ? (this.props.vocab.map(word => {
              <div>
                <WordCard content={word} />
              </div>
            }))
          : null
        }
      </div>
    )
  }
}

const mapState = ({ vocab }) => ({ vocab });
const mapDispatch = { getVocab };
export default connect(mapState, mapDispatch)(Home);
