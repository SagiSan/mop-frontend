const initialState = {
  questionnaires: [],
  createQuestionnaire: { title: "", questions: [] },
  loading: false,
  loaded: false
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_QUESTIONNAIRES_FULFILLED":
      return {
        ...state,
        loaded: false,
        questionnaires: action.payload
      };
    case "GET_QUESTIONNAIRES_FULFILLED":
      return {
        ...state,
        questionnaires: action.payload
      };
    case "SET_QUESTIONNAIRE_PENDING":
      return {
        ...state,
        loading: true
      };
    case "SET_QUESTIONNAIRE_FULFILLED":
      return {
        ...state,
        loading: false,
        loaded: true
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
    payload: fetch("http://localhost:3000/api/questionnaire")
      .then(response => {
        return response.json();
      })
      .then(data => {
        return data;
      })
  };
}
export function createQuestionnaire(body) {
  return {
    type: "SET_QUESTIONNAIRE",
    payload: fetch("http://localhost:3000/api/questionnaire/create", {
      method: "post",
      /*       mode: "no-cors",
 */ headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(body)
    }).then(function(response) {
      return response.json();
    })
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
