import {renderEntireTree} from '../render';

let state = {
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
	messageList: [
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

window.state = state;

export let addComment = () => {
	let newMessage = {
		id: 4,
		name: "Саша",
		body: state.commentText,
	};
	state.messageList.push(newMessage);
    state.commentText = '';
    renderEntireTree(state);
}

export let updateComment = (item) => {
    state.commentText = item;
    renderEntireTree(state);
}

export default state;