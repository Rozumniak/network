const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
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
    messageText: 'lol'

}

const messagesReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            let body = state.messageText;
            return {
                ...state,
                messageText:'',
                messages: [...state.messages,
                    {id: 1,
                    message: body}]
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                messageText: action.messageText
            }
        default:   return state;
    }

}
export const sendMessageActionCreator = () => ({type : SEND_MESSAGE})
export const messageTextActionCreator = (text) =>
    ({type : UPDATE_NEW_MESSAGE_TEXT, messageText: text})
export default messagesReducer;