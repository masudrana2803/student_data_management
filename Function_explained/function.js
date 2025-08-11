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



let todo = document.querySelector('#todo')
let inputType = document.querySelector('#inputType')
let addbtn = document.querySelector('#addbtn')

addbtn.addEventListener('click',()=>{
    console.log('i am done')

    let totalToDo=document.createElement('div')
    totalToDo.classList.add=('totalToDo')
    totalToDo.innerHTML=`
    <div class="totalToDo">
    <input type="text" id="singleAdd">
    <button id="editBtn">Edit</button>
    <button id="updateBtn">Update</button>
    <button id="deleteBtn">Delete</button>
    </div>
    `
    // Add to DOM first
    todo.appendChild(totalToDo)

    // Get input inside this new item
    const singleAdd = totalToDo.querySelector('#singleAdd')
    singleAdd.value = inputType.value
    inputType.value = '' // now clear the input

    // Button references
    const editBtn = totalToDo.querySelector('#editBtn')
    const updateBtn = totalToDo.querySelector('#updateBtn')
    const deleteBtn = totalToDo.querySelector('#deleteBtn')

    // Edit
    editBtn.addEventListener('click', () => {
        singleAdd.removeAttribute('readonly')
        singleAdd.focus()
    })

    // Update
    updateBtn.addEventListener('click', () => {
        singleAdd.setAttribute('readonly', '')
    })

    // Delete
    deleteBtn.addEventListener('click', () => {
        totalToDo.remove()
    })

})

inputType.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addbtn.click()
    }
})