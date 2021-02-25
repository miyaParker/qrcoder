const formReducer = (state = "text", action) => {
    switch (action.payload) {
        case 'text':
            return "text"
        default:
            return 'text'
    }
}
export default formReducer
