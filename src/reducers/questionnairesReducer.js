const initialState = {
  questionnaires: []
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_QUESTIONNAIRES":
      return {
        ...state,
        questionnaires: action.payload
      };
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
export function getQuestionnaires() {
  return {
    type: "GET_QUESTIONNAIRES",
    payload: fetch("localhost:3000/api/questionnaire")
  };
}
export function testFunc() {
  return {
    type: "TEST",
    payload: "test radi"
  };
}
