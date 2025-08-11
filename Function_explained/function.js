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
    <button id="editBtn" onclick="editThis()">Edit</button>
    <button id="updateBtn" onclick="updateThis()">Update</button>
    <button id="deleteBtn" onclick="deleteThis()">Delete</button>
    </div>
    `
    inputType.value=''

    addbtn.querySelector('.singleAdd').value = inputType.value
    todo.appendChild(addbtn)


    let editBtn = document.getElementById('editBtn')
    let updateBtn = document.getElementById('updateBtn')
    let deleteBtn = document.getElementById('deleteBtn')

    editBtn.addEventListener('click',()=>{
        editBtn.style='background:red'
    })


}