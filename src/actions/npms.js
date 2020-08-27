import axios from 'axios'
import { packages } from './actionTypes'
import { npms } from '../app/config'
import qs from 'qs'

/**
 * Simple method for fetching a set of packages from npms and then dispatching them to get stored in the Redux store.
 */
export const getPackages = (inputValue) => async (dispatch, getState) => {
    const response = await axios.get(npms.baseUrl, { 
        params: { 
            q: inputValue,
        },
        paramsSerializer: params => {
            return qs.stringify(params, {encode: false})
        }
    })
    dispatch({ type: packages.fetchPackages, payload: response.data})
}