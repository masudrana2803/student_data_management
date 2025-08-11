

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

let appearit = document.querySelector('#appearit'); // ✅ correct spelling
let append_name = document.querySelector('#append_name');
let append_age = document.querySelector('#append_age');
let append_gender = document.querySelector('#append_gender');
let append_interest = document.querySelector('#append_interest');
let appendIt = document.querySelector('#appendIt'); // ✅ need to select this too

appendIt.addEventListener('click', (e) => {
    e.preventDefault(); // ✅ prevent page reload
    console.log('clicked');

    const append_list = document.createElement('div');
    append_list.classList.add('append_list');

    append_list.innerHTML = `
        <p>Name: ${append_name.value}</p>
        <p>Age: ${append_age.value}</p>
        <p>Gender: ${append_gender.value}</p>
        <p>Interested: ${append_interest.value}</p>
    `;

    if (!append_name.value||!append_age.value||!append_gender.value||!append_interest.value) {
        alert('put value')
        return
    }
    appearit.appendChild(append_list);
    

    // Optional: clear form fields after adding
    append_name.value = '';
    append_age.value = '';
    append_gender.value = '';
    append_interest.value = '';
});
