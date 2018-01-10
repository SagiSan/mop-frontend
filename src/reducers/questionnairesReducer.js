const initialState = {
  questionnaires: []
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_QUESTIONNAIRE":
      return {
        ...state,
        questionnaires: action.payload
      };
    case "REMOVE_QUESTIONNAIRE":
      return {
        ...state,
        questionnaires: action.payload
      };
    default:
      return state;
  }
}

export function testFunc() {
  return {
    type: "TEST",
    payload: "test radi"
  };
}
