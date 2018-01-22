const initialState = {
  questionnaires: [],
  createQuestionnaire: { title: "", questions: [] }
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_QUESTIONNAIRES":
      return {
        ...state,
        questionnaires: action.payload
      };
    case "SET_QUESTIONNAIRE":
      return {
        ...state,
        createQuestionnaire: action.payload
      };
    case "ADD_QUESTIONNAIRE":
      return {
        ...state,
        questionnaires: action.payload
      };
    case "ADD_QUESTION":
      return {
        ...state,
        createQuestionnaire: {
          ...state.createQuestionnaire,
          questions: [...state.createQuestionnaire.questions, action.payload]
        }
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
export function createQuestionnaire(questions) {
  return {
    type: "SET_QUESTIONNAIRE",
    payload: questions
  };
}
export function addQuestion(question) {
  return {
    type: "ADD_QUESTION",
    payload: question
  };
}
export function testFunc() {
  return {
    type: "TEST",
    payload: "test radi"
  };
}
