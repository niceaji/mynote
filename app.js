
$('#mynote').val( localStorage.getItem("note") );


$('button.save').on("click",function(){

	localStorage.setItem( "note", $('#mynote').val() );

});