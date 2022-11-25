const initialState = { numberOfPresents: 0 };

export function managePresents(state = initialState, action) {
  // if(action.type = "presents/increase"){
  //   state = { numberOfPresents: state.numberOfPresents + 1 }
  // }
  // return state
  switch (action.type) {
    case 'presents/increase':
      return { numberOfPresents: state.numberOfPresents + 1}
    default:
      return state
  }
}
