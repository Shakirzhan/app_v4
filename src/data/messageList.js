const ADD_COMMENT = "ADD_COMMENT";
const UPDATE_COMMENT = "UPDATE_COMMENT";

const messageList = (state, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            let newMessage = {
                id: 4,
                name: "Саша",
                body: state.commentText,
            };
            state.list.push(newMessage);
            state.commentText = '';
            return state;
        case UPDATE_COMMENT:
            state.commentText = action.item;
            return state;
        default:
            return state;
    }
}

export const addCommentActionCreator = () => ({ type: ADD_COMMENT });
export const updateNewMessageActionCreater = (txt) => ({ type: UPDATE_COMMENT, item: txt });

export default messageList;