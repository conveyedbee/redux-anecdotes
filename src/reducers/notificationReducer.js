import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        setNotification(state, action) {
            return action.payload
        },
        clearNotification() {
            return null
        }
    }
})

const { clearNotification } = notificationSlice.actions

export const updateNotification = (message, time) => {
    return async (dispatch) => {
        dispatch(setNotification(message))
        setTimeout(() => {
            dispatch(clearNotification())
        }, time)
    }
}

export const { setNotification } = notificationSlice.actions
export default notificationSlice.reducer