let container1 = document.getElementById('container1');
// let appear=document.getElementById('appear')
function appearThem() {
    // Create a new div element
    const appear = document.createElement('div');
    // Add the 'appearThem' class to the div
    appear.classList.add('appear');
    // Optionally, set some content for the div
    appear.innerHTML = `
            <div class="menu1">
            <p>I am menu1</p>
        </div>
        <div class="menu2">
            <p>I am menu2</p>
        </div>
        <div class="menu3">
            <p>I am menu3</p>
        </div>
        <div class="menu4">
            <p>I am menu4</p>
        </div>
    `;
        container1.appendChild(appear);

}

function addItems (){
    const todo=document.getElementById('todo')
    const inputType=document.getElementById('inputType')

    const addbtn = document.createElement('div')
    addbtn.classList.add('addbtn')
    addbtn.innerHTML=`
    <div class="totalToDo">
    <input type="text" class="singleAdd">
    <button id="editBtn">Edit</button>
    <button id="updateBtn">Update</button>
    <button id="deleteBtn">Delete</button>
    </div>
    `
    
    const singleAdd = addbtn.querySelector('.singleAdd')
    const editBtn = addbtn.querySelector('.editBtn')
    const updateBtn = addbtn.querySelector('.updateBtn')
    const deleteBtn = addbtn.querySelector('.deleteBtn')
    
    singleAdd.value = inputType.value
    singleAdd.setAttribute('readonly','')
    inputType.value=''
    todo.appendChild(addbtn)


    // editBtn.addEventListener('click',()=>{
    // singleAdd.removeAttribute('readonly')
    // singleAdd.focus()
    // console.log('clicked edit')
    // })

        // Edit button: remove readonly
    editBtn.addEventListener('click', () => {
        singleAdd.removeAttribute('readonly')
        singleAdd.focus()
    })

    // Update button: set readonly again
    updateBtn.addEventListener('click', () => {
        singleAdd.setAttribute('readonly', '')
    })

    // Delete button
    deleteBtn.addEventListener('click', () => {
        addbtn.remove()
    })

}