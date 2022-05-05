import axios from 'axios'
import {
  addPersonalInfoStart,
  addPersonalInfoSuccess,
  addPersonalInfoError,
} from '../redux/features/userInfoSlice'

export const addPersonalInfo = async (state, dispatch) => {
  try {
    // start
    dispatch(addPersonalInfoStart())
    // pending
    const response = await axios.post( '/api/hello', state )
    const data = response.data.data
    
    // success
    data && dispatch(addPersonalInfoSuccess(data))
  } catch (err) {
    //error
    dispatch(addPersonalInfoError(err))
  }
}
