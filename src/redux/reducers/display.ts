interface Action {
  type: string,
  count: number,
  text: string
}

const displayNumber = (state = 'prueba', action: Action) => {
  switch (action.type) {
    case 'ADD_NUMBER':
      return {
        count: action.count,
        text: action.text,
      }
    default:
      return state
  }
}

export default displayNumber