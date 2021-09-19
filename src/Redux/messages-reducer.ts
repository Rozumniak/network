const SEND_MESSAGE = 'SEND-MESSAGE';

type DialogsType ={
    id: number
    name: string
}
type MessagesType ={
    id: number
    message: string
}

let initialState = {

    dialogs: [
        {id: 1, name: "Ruslan"},
        {id: 2, name: "Ihor"},
        {id: 3, name: "Diana"}
    ] as Array<DialogsType>,
    messages: [

    ]as Array<MessagesType>,
    messageText: ""

}
export type InitialStateType = typeof initialState

const messagesReducer = (state = initialState, action: any): InitialStateType => {


    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messageText: "",
                messages: [...state.messages,
                    {id: 1,
                    message: action.messageText
                    }]
            }
        default:   return state;
    }

}
type sendMessageActionCreatorType = {
    type: typeof SEND_MESSAGE
    messageText: string
}
export const sendMessageActionCreator = (text: string): sendMessageActionCreatorType => ({type : SEND_MESSAGE, messageText: text})
export default messagesReducer;