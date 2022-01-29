import moment from "moment";
import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const aDate = moment();
    const updates = {
        description: "a description",
        amount: 23100,
        createdAt: aDate.valueOf(),
        note: "a note"
    }
    const action = editExpense('123abc' , updates);
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: updates
    });
});

test('should setup add expense action object with provided values', () => {
    const aDate = moment();
    const expenseData = {
        description: "a description",
        amount: 23100,
        createdAt: aDate.valueOf(),
        note: "a note"
    };

    const action = addExpense(expenseData);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        },
    });
});

test('should setup add expense action object with defaults', () => {
    const action = addExpense();

    const expenseData = {
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0
    };

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        },
    });
});
