import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = () => {
    const dispatch = useDispatch()
  
    const handleChange = (event) => {
        // input-field value is in variable event.target.value
        const filter = event.target.value
        // dispatch an action with the content of the input field as the data
        dispatch(filterChange(filter))
    }

    const style = {
        marginBottom: 10
    }

    return (
        <div style={style}>
            filter <input onChange={handleChange} />
        </div>
    )
}

export default Filter