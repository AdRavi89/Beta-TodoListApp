// script.js

// Fungsi untuk menambahkan tugas baru
function addTask() {
    var inputBox = $('#input-box');
    var taskText = inputBox.val();

    if (taskText.trim() !== '') {
        // Buat elemen daftar baru
        var newTask = $('<li>' + taskText + '<span onclick="deleteTask(this)">X</span></li>');

        // Tambahkan elemen daftar ke dalam kontainer
        $('#list-container').append(newTask);

        // Reset nilai input box
        inputBox.val('');
    }
}

// Fungsi untuk menandai tugas sebagai selesai atau belum selesai
function toggleTask(element) {
    $(element).toggleClass('checked');
}

// Fungsi untuk menghapus tugas
function deleteTask(element) {
    $(element).parent().remove();
}

// Event listener untuk menanggapi klik tombol "Add"
$('#add-button').click(function () {
    addTask();
});

// Event listener untuk menanggapi klik pada elemen daftar
$('#list-container').on('click', 'li', function () {
    toggleTask(this);
});
