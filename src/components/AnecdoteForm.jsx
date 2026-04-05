import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'
import noteService from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = event => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        noteService.createNew(content).then(anecdote => {
            dispatch(createAnecdote(anecdote))
            dispatch(setNotification(`you created '${content}'`))
            setTimeout(() => {
                dispatch(clearNotification())
            }, 5000)
        })
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <input name='anecdote' />
                <button type='submit'>create</button>
            </form>
        </div>
        
    )
}

export default AnecdoteForm