export default function(state = {visible: false}, action) {
    switch(action.type){
        case 'ACTIVATE':
            return Object.assign({}, state, {
                visible: action.payload
            })
        default:
            return state;
    }
}