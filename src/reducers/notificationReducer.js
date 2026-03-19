import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: 'notification here',
    reducers: {
        notificationChange(state, action) {
            return action.payload
        }
    }
})

export const { notificationChange: setNotification } = notificationSlice.actions
export default notificationSlice.reducer