import { vendorReducer } from './vendorReducer'
import { blockReducer } from './blockReducer'
import { itemReducer } from './itemReducer'
import { combineReducers } from 'redux'
import { userReducer } from './userReducer'
import {groupReducer} from './groupReducer'

export const rootReducer = combineReducers({
        blocks: blockReducer,
        items: itemReducer,
        vendors: vendorReducer,
        user: userReducer,
        group: groupReducer
})