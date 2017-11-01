const GET_VOCAB = "GET_VOCAB";

export const getVocab = (vocab) => ({type: GET_VOCAB, vocab});

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
      return initialState; // kinda like a fixture for now
    default:
      return state;
  }
};

export default reducer;
