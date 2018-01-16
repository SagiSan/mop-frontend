const initialState = {
  user: {}
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        user: action.payload
      };
    case "ADD_USER":
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}
export function getUser(name, surname, email) {
  return {
    type: "GET_USER",
    payload: fetch("localhost:3000/api/user/register", {
      method: "post",
      body: JSON.stringify({ name: name, surname: surname, email: email })
    }).then(res => {
      console.log(res);
    })
  };
}
