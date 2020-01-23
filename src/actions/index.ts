let count = 0
export const addNumber = (text: string) => {
  return {
    type: 'ADD_NUMBER',
    count: count++,
    text
  }
}
