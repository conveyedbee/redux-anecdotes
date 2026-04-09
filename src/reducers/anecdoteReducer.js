import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'
import { updateNotification } from './notificationReducer'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload)
    },
    addVote(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id)
      anecdoteToChange.votes += 1
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

const { setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

const { createAnecdote } = anecdoteSlice.actions

export const addNewAnecdote = (content) => {
  return async (dispatch) => {
    const savedAnecdote = await anecdoteService.createNew(content)
    dispatch(createAnecdote(savedAnecdote))
    dispatch(updateNotification(`you created '${content}'`, 5000))
  }
}

const { addVote } = anecdoteSlice.actions

export const addVoteToAnecdote = (id) => {
  return async (dispatch, getState) => {
    const anecdote = getState().anecdotes.find(a => a.id === id)
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }
    await anecdoteService.updateVote(id, updatedAnecdote)
    dispatch(addVote(id))
    dispatch(updateNotification(`you voted '${anecdote.content}'`, 5000))
  }
}

export default anecdoteSlice.reducer