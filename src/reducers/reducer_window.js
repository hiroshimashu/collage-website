
export default function(state = {width:window.innerWidth}, action) {
    switch(action.type){
        case 'RESIZE':
            return  Object.assign({}, state, {
            width: action.payload
        });
        default:
            return state;
    }
}