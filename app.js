
$('#mynote')
	.on("keyup",function(){
		localStorage.setItem( "note", $('#mynote').val() );
		// console.log(111)
	})
	.val( localStorage.getItem("note") );


// $('button.save').on("click",function(){

// 	localStorage.setItem( "note", $('#mynote').val() );

// });