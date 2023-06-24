$(document).ready(function(){
    $.getJSON('categories.json', function(data) {
        var select = $('#categorySelect');
        $.each(data.categories, function(key, value) {
            select.append($('<option></option>').attr('value', value).text(value));
        });
    });
    function loadBooks(category) {
        $.get('fetchBooks.php', {category: category}, function(data) {
            $('#bookList').html(data);
        });
    }
    loadBooks('All');
    $(document).on('change', '#categorySelect', function() {
        loadBooks($(this).val());
    });
});