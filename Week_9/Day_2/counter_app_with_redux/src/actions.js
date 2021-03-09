const CounterTypes = {
    INCREASE_COUNT: 'INCREASE_COUNT',
    DECREASE_COUNT: 'DECREASE_COUNT'
}

export const increaseCount = () => ({
     type: ActionTypes.INCREASE_COUNT
})  

export const decreaseCount = () => ({
     type: ActionTypes.DECREASE_COUNT
})