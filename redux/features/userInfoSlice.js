import { createSlice } from '@reduxjs/toolkit'

let initialState = {
  personalInfo: {
    data: {
      id: '',
      country: 'United States',
      firstName: 'Johann',
      lastName: 'Batmas',
      email: 'johann@gmail.com',
      street: '134 Simon Street',
      city: 'Cairo',
      region: 'Giza',
      zip: 'CF44UT',
    },
    status: {
      pending: false,
      success: false,
      error: false,
      message: '',
    },
  },
  accountInfo: {
    data: {},
    status: {
      pending: false,
      error: false,
      message: '',
    },
  },
}

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    addPersonalInfoStart: (state) => {
      state.personalInfo.status.pending = true
      state.personalInfo.status.error = false
      state.personalInfo.status.success = false
      state.personalInfo.status.message = 'Updating Information!'
    },
    addPersonalInfoSuccess: (state, action) => {
      state.personalInfo.status.pending = false
      state.personalInfo.status.error = false
      state.personalInfo.status.success = true
      state.personalInfo.status.message = 'Information successfully updated'
      state.personalInfo.data = action.payload
    },
    addPersonalInfoError: (state, action) => {
      state.personalInfo.status.pending = false
      state.personalInfo.status.error = true
      state.personalInfo.status.success = false
      state.personalInfo.status.message =
        action.payload.message ||
        'Something wend wrong while updating information ❌'
    },
    removePersonalInfo: (state) => {
      state.personalInfo.data = {}
    },
  },
})

export const {
  addPersonalInfoStart,
  addPersonalInfoSuccess,
  addPersonalInfoError,
  removePersonalInfo,
} = userInfoSlice.actions
export default userInfoSlice.reducer
