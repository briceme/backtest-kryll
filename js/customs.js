$('#mainTable').bootstrapTable({});




$('#modalOldGraph').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget) // Button that triggered the modal
	var recipient = button.data('whatever') // Extract info from data-* attributes
	// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	// Update the modal's content. We'll use jQuery here, but you could use a data binding library or othermethodsinstead.
	var mymodal = $(this)
	mymodal.find('#popup').attr('src',recipient);
});


$('#modalTVGraph').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget) // Button that triggered the modal
	var recipient = button.data('whatever') // Extract info from data-* attributes
	// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	// Update the modal's content. We'll use jQuery here, but you could use a data binding library or othermethodsinstead.
	var mymodal = $(this)
	mymodal.find('#popup').attr('src',recipient);
});


$('#modalIMGTV').on('show.bs.modal', function (event) {
	var button = $(event.relatedTarget) // Button that triggered the modal
	var recipient = button.data('whatever') // Extract info from data-* attributes
	// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
	// Update the modal's content. We'll use jQuery here, but you could use a data binding library or othermethodsinstead.
	var mymodal = $(this)
	mymodal.find('#chart').attr('src',recipient);
});