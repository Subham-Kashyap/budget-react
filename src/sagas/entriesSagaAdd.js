import { call, put, takeLatest } from "redux-saga/effects";
import entriesTypes from '../actions/entries.actions'
import axios from "axios";

export function* addEntrySaga() {
   yield takeLatest(entriesTypes.ADD_ENTRY, addEntryToDB);
}

function* addEntryToDB({payload}) {
    yield call(addEntry, payload);
    yield call(addEntryDetails, payload);
    yield put({type: entriesTypes.ADD_ENTRY_RESULT, payload});
}

async function addEntry ({id, desc}) {
    await axios.post('http://localhost:3001/entries', {
        id, desc
    });
}

async function addEntryDetails ({id, value, isExp}) {
    await axios.post('http://localhost:3001/values', {
        id, value, isExp
    });
}
