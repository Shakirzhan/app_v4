import messageList from "./messageList"

const ADD_COMMENT = "ADD_COMMENT";
const UPDATE_COMMENT = "UPDATE_COMMENT";

let store = {
    _state: {
        menuList: [
            {
                "id": 1,
                "url": "/",
                "name_url": "Итоговые отчеты",
                "class_active": ""
            },
            {
                "id": 2,
                "url": "/interimreports",
                "name_url": "Промежуточные отчеты",
                "class_active": ""
            },
            {
                "id": 3,
                "url": "/messages",
                "name_url": "Сообщения",
                "class_active": ""
            },
            {
                "id": 4,
                "url": "/question",
                "name_url": "Задать вопрос",
                "class_active": ""
            }
        ],
        messageList: {
            list: [
                {
                    id: 1,
                    name: "Вика",
                    body: "Так переменная.класс?",
                },
                {
                    id: 2,
                    name: "Саша",
                    body: "Да так!)",
                },
                {
                    id: 3,
                    name: "Вика",
                    body: "Спасибо!",
                }
            ],
            commentText: "samurai",
        }

    },
    _callSucriber() {

	},

	getState() {
    	return this._state;
	},
    subscribe(obser) {
        this._callSucriber = obser;
    },

    _addComment() {
        let newMessage = {
            id: 4,
            name: "Саша",
            body: this._state.commentText,
        };
        this._state.messageList.push(newMessage);
        this._state.commentText = '';
        this._callSucriber(this._state);
    },
    _updateComment(item) {
        this._state.commentText = item;
        this._callSucriber();
    },

    dispatch: function (action) {
        this._state.messageList = messageList( this._state.messageList, action );
        this._callSucriber(this._state);
    },
}

export default store;
window.store = store;