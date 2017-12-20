const initialState = {
    windowSize: window.innerWidth
}

export default function(state = initialState, action) {
    switch(action.type){
        case 'RESIZE':
            return action.payload;
    }
    return state;
}