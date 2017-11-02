const GET_VOCAB = "GET_VOCAB";
const getVocab = (vocab) => ({type: GET_VOCAB, vocab});

export const fetchVocab = () => (dispatch) => {
  dispatch(getVocab(initialState))
}

let initialState = {
  vocab: [{
    english: 'Sun',
    kanji: '日',
    kunyomi: 'ひ',
    onyomi: 'カ',
    compounds: '日付'
  },
  {
    english: 'Moon',
    kanji: '月',
    kunyomi: 'つき',
    onyomi: 'ゲツ',
    compounds: '正月'
  }]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VOCAB:
      return Object.assign({}, state, vocab)
    default:
      return state;
  }
};

export default reducer;
