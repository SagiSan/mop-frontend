const initialState = {
  test: "ne radi"
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "TEST":
      return {
        ...state,
        test: action.payload
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
