document.addEventListener('DOMContentLoaded', () => {

    function Student(name, roll, id, className, age) {
        this.name = name;
        this.roll = roll;
        this.id = id;
        this.className = className;
        this.age = age;
    }

    const studentForm = document.getElementById('student-form');
    const studentList = document.getElementById('student-list');
    const totalStudent = document.getElementById('totalStudent').querySelector('h2');
    const studentName = document.getElementById('studentName');
    const roll = document.getElementById('roll');
    const studentId = document.getElementById('studentId');
    const className = document.getElementById('className');
    const age = document.getElementById('age');

    let students = [];
    let editIndex = null;

    function renderStudentList() {
        studentList.innerHTML = '';
        totalStudent.textContent = `Total Students: ${students.length}`;

        if (students.length === 0) {
            studentList.innerHTML = '<p class="text-muted text-center">No students added yet.</p>';
            return;
        }

        students.forEach((student, idx) => {
            const studentItem = document.createElement('div');
            studentItem.classList.add('student-item');
            studentItem.innerHTML = `
                <p>Name: ${student.name}</p>
                <p>Roll: ${student.roll}</p>
                <p>ID: ${student.id}</p>
                <p>Class: ${student.className}</p>
                <p>Age: ${student.age}</p>
                <div class="action_button">
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;

            // Edit button
            studentItem.querySelector('.edit-btn').onclick = function() {
                studentName.value = student.name;
                roll.value = student.roll;
                studentId.value = student.id;
                className.value = student.className;
                age.value = student.age;
                editIndex = idx;
                studentForm.querySelector('.btn').textContent = 'Update Student';
            };

            // Delete button
            studentItem.querySelector('.delete-btn').onclick = function() {
                students.splice(idx, 1);
                renderStudentList();
                // Reset form if editing the deleted student
                if (editIndex === idx) {
                    studentForm.reset();
                    editIndex = null;
                    studentForm.querySelector('.btn').textContent = 'Add Student';
                }
            };

            studentList.appendChild(studentItem);
        });
    }

    studentForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const newStudent = new Student(
            studentName.value.trim(),
            roll.value.trim(),
            studentId.value.trim(),
            className.value.trim(),
            age.value.trim()
        );

        if (editIndex !== null) {
            students[editIndex] = newStudent;
            editIndex = null;
            studentForm.querySelector('.btn').textContent = 'Add Student';
        } else {
            students.push(newStudent);
        }

        renderStudentList();
        studentForm.reset();
    });

    renderStudentList();
});