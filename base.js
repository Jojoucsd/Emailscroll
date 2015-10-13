console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	var $inputTitle = $('#title');
	var $inputBody = $('#body');
	var $inputPost = $('#post');

	$inputPost.submit(function (e){
		e.preventDefault();
		var $collapseId = parseInt($inputTitle.val());
		var collapseFront = "<div class='panel panel-default'><span class='glyphicon glyphicon-ok pull-right'></span><div class='panel-heading' role='tab'><h4 class='panel-title'><a role='button' data-toggle='collapse' data-parent='#accordion' href="+"'#" + $collapseId + "'"+ " aria-expanded='true' aria-controls="+"'"+ $collapseId +"'>";
		var collapseMid = "</a></h4></div><div id="+"'" + $collapseId + "'"+" class='panel-collapse collapse in' role='tabpanel' aria-labelledby='headingOne'><div class='panel-body'>";

		var newPost = collapseFront + " "+ $inputTitle.val() + collapseMid + " " + $inputBody.val() +"</div></div></div>";
		

		$('#todos').append(newPost);
		$('#title').val('');
		$('#body').val('');
		
		$('.glyphicon.glyphicon-ok').on('click', function (e){
		e.preventDefault();
		//var completedTask = [];
		//completedTask.push($inputTitle.val());
		console.log(e.target);
		//console.log(completedTask);
		
		$('#completed').append(newPost);
		
		//$('completed').append(completedTask);


	})
	});





});
