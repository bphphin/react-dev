//1.Tao gia tri mac dinh
const initState = {
    //initState la gia tri khoi tao
    count: 0,
};

//2. Viet 1 ham
export const increment = () => ({
    // type: la action de minh nhan biet dang lam chuc nang nao
    type: 'increment'
});
export const decrement = () => ({
    type: 'decrement'
});

const counterReduce = (state = initState,action) => {
    switch (action.type) {
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            };
        case 'decrement':
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
}
export default counterReduce;
