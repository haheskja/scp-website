import { filter } from '../actions/actionTypes'

const initialState = {
    displayOffset: 0,
    searchTerm: '',
    framework: 'all',
    onlyVerified: false,
    dhis2Versions: []
}

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case filter.setFilters:
            return {
                ...state,
                ...action.payload
            }
        case filter.setDisplayOffset:
            return {
                ...state,
                displayOffset: action.payload
            }
        case filter.setSearchTerm:
            return {
                ...state,
                searchTerm: action.payload
            }
        case filter.setDhis2Versions:
            return {
                ...state,
                dhis2Versions: action.payload
            }
        default:
            return state
    }
}


export default filterReducer