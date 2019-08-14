//this function is registering an event listener for the document load
$(function () {
	//this function is targeting the searchbar and registering a keyup event listener
	$('#searchBar').keyup(function () {
		var searchText = $( this ).val().toLowerCase();
		if (searchText === '') {
			$('.image').show();
		} else {
			$('.image').each(function () {
				var txtInfo = $( this ).data('title').toLowerCase();
				if (txtInfo.includes(searchText)) {
					$(this).show();
				} else {
					$(this).hide();
				}
			});
		}
	});
});