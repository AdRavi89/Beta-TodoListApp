const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === "") {
        alert("Tidak boleh kosong guys");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
    listContainer.addEventListener("click",
        function (e) {
            if (e.target.tagName === "LI") {
                e.target.classList.toggle("checked");
                saveData();
            }
        },
        false
    );
    }

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
function dateteTask() {
}
showTask();

// // script.js

// // Fungsi untuk menambahkan tugas baru
// function addTask() {
//     var inputBox = $('#input-box');
//     var taskText = inputBox.val();

//     if (taskText.trim() !== '') {
//         // Buat elemen daftar baru
//         var newTask = $('<li>' + taskText + '<span onclick="deleteTask(this)">X</span></li>');

//         // Tambahkan elemen daftar ke dalam kontainer
//         $('#list-container').append(newTask);

//         // Reset nilai input box
//         inputBox.val('');
//     }
// }

// // Fungsi untuk menandai tugas sebagai selesai atau belum selesai
// function toggleTask(element) {
//     $(element).toggleClass('checked');
// }

// // Fungsi untuk menghapus tugas
// function deleteTask(element) {
//     $(element).parent().remove();
// }

// // Event listener untuk menanggapi klik tombol "Add"
// $('#add-button').click(function () {
//     addTask();
// });

// // Event listener untuk menanggapi klik pada elemen daftar
// $('#list-container').on('click', 'li', function () {
//     toggleTask(this);
// });
