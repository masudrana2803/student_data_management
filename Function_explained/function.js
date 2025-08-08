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
    // Append the div to the body (or another container)
    document.body.appendChild(appear);
}