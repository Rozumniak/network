const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {

    dialogs: [
        {id: 1, name: "Ruslan"},
        {id: 2, name: "Ihor"},
        {id: 3, name: "Diana"},
    ],
    messages: [
        {id: 1, message: "Hello world"},
        {id: 2, message: "Yo"},
        {id: 3, message: "Yo"},
        {id: 3, message: "Yawawdaao"},

    ],

}

const messagesReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messageText:'',
                messages: [...state.messages,
                    {id: 1,
                    message: action.messageText}]
            }
        default:   return state;
    }

}
export const sendMessageActionCreator = (text) => ({type : SEND_MESSAGE, messageText: text})
export default messagesReducer;