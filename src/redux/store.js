import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


let store = {
    _subscriber() {

    },
    _state : {
        profilePage: {
            posts: [
                { profileName: 'Franz Ferdinand', text: 'What a day to be alive!' },
                { profileName: 'Franz Ferdinand', text: 'Another day in the greatest empire!' }
            ],
            newPostText : '',
            friends: [
                { profileName: 'Julius', profileImg: 'https://www.biography.com/.image/t_share/MTY2NjgyMzA1MzM3NzYyODcx/gettyimages-51242589-2048x2048.jpg' },
                { profileName: 'Otto', profileImg: 'https://myhero.com/images/guest/g293101/hero114688/Otto-von-Bismarck-1-4.jpg' }
            ]
        },
        dialogsPage: {
            dialogs: [
                { id: 2, profileImg: 'https://myhero.com/images/guest/g293101/hero114688/Otto-von-Bismarck-1-4.jpg', profileName: 'Otto Von Bismarck' },
                { id: 1, profileImg: 'https://www.biography.com/.image/t_share/MTY2NjgyMzA1MzM3NzYyODcx/gettyimages-51242589-2048x2048.jpg', profileName: 'Julius Caesar' }
            ],
            messages: [
                { id: 1, profileName: 'Julius Caesar', message: 'Hello, i wrote you a poem! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam libero est quasi repudiandae assumenda facere. Id facilis officia distinctio. Temporibus iste sunt in. Eum odio iusto ipsa rem ea recusandae!', profileImg: 'https://www.biography.com/.image/t_share/MTY2NjgyMzA1MzM3NzYyODcx/gettyimages-51242589-2048x2048.jpg' },
                { id: 2, profileName: 'Otto Von Bismarck', message: 'Hello, there!', profileImg: 'https://myhero.com/images/guest/g293101/hero114688/Otto-von-Bismarck-1-4.jpg' }
            ],
            outMessages : [
                { message : 'Thank you, very cool!'},
                { message : 'Hello!'}
            ],
            newMessageText : ''
        }
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._subscriber = observer;
    },
    dispatch(action) {
        
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._subscriber(this._state);
        
    }
}


export default store;