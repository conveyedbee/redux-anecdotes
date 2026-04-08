import { useDispatch, useSelector } from 'react-redux'
import { addVoteToAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(({ filter, anecdotes }) => {
        if (filter === '') {
            return [...anecdotes].sort((a, b) => b.votes - a.votes)
        }
        return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase())).sort((a, b) => b.votes - a.votes)
    })
    

    const vote = id => {
        const anecdote = anecdotes.find(a => a.id === id)
        console.log('vote', id)
        dispatch(addVoteToAnecdote(anecdote.id))
    }

    return (
        <div>
            {anecdotes.map(anecdote => (
                <div key={anecdote.id}>
                    <div>{anecdote.content}</div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default AnecdoteList