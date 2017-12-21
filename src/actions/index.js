export default function windowResize(windowsize) {
    console.log(windowsize);
    return {
        type: 'RESIZE',
        payload: windowsize
    };
}




