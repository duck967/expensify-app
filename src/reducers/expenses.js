
const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'EDIT_EXPENSE':
            const ss = state.map((e) => {
                return e.id === action.id ? {...e, ...action.updates} : e;
            });
            return ss;
        case 'REMOVE_EXPENSE':
            const s = state.filter(({ id }) => {return id !== action.id});
            return s;
        default:
            return state;
    }
};
