import { createSlice } from '@reduxjs/toolkit'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const content = action.payload
      state.push({
        content,
        id: Math.round(Math.random() * 1000000),
        votes: 0
      })
    },
    addVote(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id)
      anecdoteToChange.votes += 1
    },
    setAnecdote(state, action) {
      return action.payload
    }
  }
})

export const { createAnecdote, addVote, setAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer