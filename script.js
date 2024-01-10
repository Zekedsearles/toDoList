$(document).ready(function () {
    $('.remove').on('click', '.btn.remove', function() {
        $(this).closest("label").remove();
    });
});

