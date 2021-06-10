

const {createStore} = window.Redux;
// state

// reducer

// store
//SET UP REDUX STORE
const initialState = JSON.parse(localStorage.getItem('hobby_list')) || [];

const hobbyReducer = (state = initialState,action) => {

    switch (action.type){
        case 'ADD_HOBBY':{
            const newList = [...state];
            newList.push(action.payload);

            return newList;
        
        }

        default:
           return state;
    }
	return state;
}


const store =  createStore(hobbyReducer);



//--------

// RENDER REDUX HOOBY LIST

const renderHoobyList = (hobbyList) => {
	if (!Array.isArray(hobbyList) || hobbyList.length === 0) return;

    const ulElement = document.querySelector('#hobbyListId');

    if (!ulElement) return;
    
    //reset previous content of ul
    ulElement.innerHTML= '';

    for (const hobby of hobbyList) {
    	const liElement = document.createElement('li');

    	liElement.textContent = hobby;

    	ulElement.appendChild(liElement);


    }


}


//RENDER INITIAL HOBBY LIST

const InitialhobbyList = store.getState();
renderHoobyList(InitialhobbyList);


// Handle Form Submit

const hobbyFormElement = document.querySelector("#hobbyFormId");

if(hobbyFormElement) {
    const handleFormSubmit = (e) => {
        //Prevent browser from reloading
       e.preventDefault();

       const hobbyTextElement = hobbyFormElement.querySelector("#hobbyTextId");
       if(!hobbyTextElement) return;

       console.log("submit", hobbyTextElement.value);

       const action = {
        type: 'ADD_HOBBY',
        payload: hobbyTextElement.value
       };

       store.dispatch(action);

       //reset form

       hobbyFormElement.reset();
    };

    hobbyFormElement.addEventListener('submit', handleFormSubmit);
}


store.subscribe(() =>{
    console.log("STATE UPDATE:", store.getState());

    const newHobbyList = store.getState();
    renderHoobyList(newHobbyList)

    localStorage.setItem("hobby_list",JSON.stringify(newHobbyList));
})


