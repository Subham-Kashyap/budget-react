import { take, put, delay, call, fork, takeEvery, cancelled, cancel, takeLatest } from "redux-saga/effects";

function double (number){
    return number*2;
}

export function* testSaga() {
    while(true){
        console.log('Starting Saga');
        const state = yield take('TEST_MESSAGE');
        const a = yield call (double, 2);
        console.log(a);
        const b = yield double(3);
        console.log(b);
        console.log('Finish Saga Function', state);
    }
}

function doNothing() {
    console.log('I will Do Nothing');
    delay(1000);
    console.log('I have Done Nothing');
}

export function* testSagaFork() {
    while(true){
        yield take('TEST_MESSAGE_2');
        yield fork(doNothing);
        yield fork(doNothing);
        yield fork(doNothing);
    }
}

export function* testSagaTakeEveryProcess({payload}){
    console.log(`Starting Process for index ${payload}`);
    yield delay(3000);
    console.log(`Ending Process for index ${payload}`);
}

export function* testSagaTakeEvery(){
    const {payload} = yield takeEvery('TEST_MESSAGE_3', testSagaTakeEveryProcess);
    console.log(`Finish TakeEvery for index ${payload}`);
}

export function* testSagaCancelled(){
    yield take('TEST_MESSAGE_4');
    const handleCancel = yield fork(infinitySaga);
    yield delay(3000);
    yield cancel(handleCancel);
}

export function* testSagaTakeLatest(){
    yield takeLatest('TEST_MESSAGE_5', infinitySaga);
}

export function* infinitySaga(){
    console.log('Starting Infinity Saga');
    let index = 0;
    while (true){
        index++;
        try{
        console.log(`Inside infinte loop ${index}`);
        yield delay(1000);
        }
        catch(error) {
            console.error('An error happened:', error);
        } finally{
            console.log('The fork was cancelled?', yield cancelled());
        }
    }
    //console.log('Ending Infinity Saga');
}

export function* dispatchTest(){
    let index = 0;
    //yield put({type: 'TEST_MESSAGE_4', payload: index });
    
    while(true){
        yield delay(5000);
        yield put({type: 'TEST_MESSAGE_5', payload: index });
        index++;
    }
}
