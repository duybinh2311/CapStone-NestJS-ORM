import { createSlice } from '@reduxjs/toolkit'

import { PinResDto } from '@/modules/pin/pin.types'

import { UserThunk } from './user.thunk'

interface initialStateType {
  savedPins: PinResDto[]
}

const initialState: initialStateType = {
  savedPins: [],
}

const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(UserThunk.getSavedPins.fulfilled, (state, action) => {
      state.savedPins = action.payload.data
    })
  },
})

export const UserActions = UserSlice.actions

export default UserSlice.reducer
