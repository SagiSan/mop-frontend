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
    case "ADD_USER_FULFILLED":
      return {
        ...state,
        user: action.payload
      };
    case "ADD_USER_REJECTED":
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
}

export function getUser(name, surname, email) {
  console.log(name, surname, email);
  return {
    type: "ADD_USER",
    payload: fetch("http://localhost:3000/api/user/register", {
      method: "post",
      /*       mode: "no-cors",
 */ headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ name: name, surname: surname, email: email })
    }).then(function(response) {
      return response.json();
    })
    /*      .catch(err => {
        console.log(err);
      }) */
  };
}
