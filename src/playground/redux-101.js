import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy: incrementBy
    };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy: decrementBy
    };
};

const resetCount = () => {
    return {
        type: 'RESET'
    };
};


const setCount = ({ count = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        count: count
    };
};

const countReducer = (state = {count: 0}, action) => {

    console.log('running');

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };

        case 'RESET':
            return {
                count: 0
            };
    
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };


        case 'SET':
            return {
                count: action.count
            };
    

        default:
            return state;
    }
    
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: "INCREMENT",
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy : 5}));

store.dispatch(incrementCount());
//unsubscribe();

store.dispatch(resetCount());
// store.dispatch({
//     type: "RESET"
// });


store.dispatch(decrementCount({ decrementBy : 3}));
store.dispatch(decrementCount());
// store.dispatch({
//     type: "DECREMENT",
//     decrementBy: 3
// });


store.dispatch({
    type: "SET",
    count: 101
});

