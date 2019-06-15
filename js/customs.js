var $table = $('#table')
$table.bootstrapTable({
	locale:'en-US'
});

var $table = $('#mainTable')
$table.bootstrapTable({
	locale:'en-US'
});

  
  
function compareNombres(a, b) {
	var aa = (($(a).text()) - ($(b).text()));
	if (aa < 0) return -1;
	if (aa > 0) return 1;
	return 0;
}
  
function compareInt(a, b) {
	var aa = (a - b);
	if (aa < 0) return -1;
	if (aa > 0) return 1;
	return 0;
}


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


  
//Moment.JS Return Date Ranges
function getDates(startDate, stopDate) {
    var dateArray = [];
    var currentDate = moment(startDate);
    var stopDate = moment(stopDate);
    while (currentDate <= stopDate) {
        dateArray.push( moment(currentDate).format('DD/MM/YYYY'))
        currentDate = moment(currentDate).add(1, 'days');
    }
    return dateArray;
}
 
  
  $('#ok').click( function() 
  { 

    var $table = $('#mainTable')
    var from=$("input[type=date][name=date1]" ).val();
    var to=$("input[type=date][name=date2]" ).val();
    $table.bootstrapTable('filterBy',{ startDate: getDates(from,to), endDate: getDates(from,to) }) 
		
    
 
})



