const { default: profileReducer, addPost, deletePost } = require("./profile-reducer");

let state = {
    posts: [
        { profileName: 'Username', text: 'What a day to be alive!' },
        { profileName: 'Username', text: 'Hello World!' }
    ]
}

test('length of posts should be incremented', () => {
    //1. Test data
    let action = addPost("Hello")

    //2. Action
    let newState = profileReducer(state, action)
    //3. Expectation
    expect(newState.posts.length).toBe(3);
});

test('message of post should be as in action creator', () => {
    //1. Test data
    let action = addPost("Hello")

    //2. Action
    let newState = profileReducer(state, action)
    //3. Expectation
    expect(newState.posts.message).toBe("Hello");
});

test('after deleting post length should be decremented', () => {
    //1. Test data
    let action = deletePost(1)

    //2. Action
    let newState = profileReducer(state, action)
    //3. Expectation
    expect(newState.posts.length).toBe(newState.posts.length - 1);
});


