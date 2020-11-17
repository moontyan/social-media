const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
    dialogs: [
        { id: 2, profileImg: 'https://myhero.com/images/guest/g293101/hero114688/Otto-von-Bismarck-1-4.jpg', profileName: 'Otto Von Bismarck' },
        { id: 1, profileImg: 'https://www.biography.com/.image/t_share/MTY2NjgyMzA1MzM3NzYyODcx/gettyimages-51242589-2048x2048.jpg', profileName: 'Julius Caesar' }
    ],
    messages: [
        { id: 1, profileName: 'Julius Caesar', message: 'Hello, i wrote you a poem! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam libero est quasi repudiandae assumenda facere. Id facilis officia distinctio. Temporibus iste sunt in. Eum odio iusto ipsa rem ea recusandae!', profileImg: 'https://www.biography.com/.image/t_share/MTY2NjgyMzA1MzM3NzYyODcx/gettyimages-51242589-2048x2048.jpg' },
        { id: 2, profileName: 'Otto Von Bismarck', message: 'Hello, there!', profileImg: 'https://myhero.com/images/guest/g293101/hero114688/Otto-von-Bismarck-1-4.jpg' }
    ],
    outMessages: [
        { message: 'Thank you, very cool!' },
        { message: 'Hello!' }
    ]
}

export function dialogsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                message: action.messagaData
            };
            return {
                ...state,
                outMessages: [...state.outMessages, newMessage],
            };

        default: return state;
    }

}

export const addMessage = (messagaData) => {
    return {
        type: ADD_MESSAGE,
        messagaData
    }
}


export default dialogsReducer;