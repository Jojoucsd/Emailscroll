console.log("Sanity Check: JS is working!");

$(document).ready(function (){

	var $inputTitle = $('#title');
	var $inputBody = $('#body');
	var $inputPost = $('#post');

	$inputPost.submit(function (e) {
		e.preventDefault();

		var blog = new Blog($inputTitle.val(),$inputBody.val());
		var blogPost = new BlogPost(blog);
		
		$('#todos').append(blogPost.$el);
		$('#title').val('');
		$('#body').val('');

	})

	function Blog(title, body){
		this.title = title;
		this.body = body;
	}

	function BlogPost(blog){
		this.blog = blog;
		this.$el = this.domElement();
		this.eventHandler();

	}

	BlogPost.prototype.domElement = function() {
		var $collapseId = parseInt(this.blog.title);
		var $el = $("<div class='panel panel-default'>");
		var collapseHead = "<div class='panel-heading' role='tab'><h4 class='panel-title'>"
		var collapseButton = "<span id='X' class='glyphicon glyphicon-trash pull-right'></span>"
		var collapseFront = "<a role='button' data-toggle='collapse' data-parent='#accordion' href="+"'#" + $collapseId + "'"+ " aria-expanded='true' aria-controls="+"'"+ $collapseId +"'>";
		var collapseMid = "</a></h4></div><div id="+"'" + $collapseId + "'"+" class='panel-collapse collapse in' role='tabpanel' aria-labelledby='headingOne'><div class='panel-body'>";
		
		var newPost = collapseHead + collapseButton + collapseFront + " "+ this.blog.title + collapseMid + " " + this.blog.body +"</div></div>";

		$el.append(newPost);

		return $el 
	}

	BlogPost.prototype.eventHandler = function() {
		this.$el.on('dblclick', function (e){
			$(this).slideUp(800, function(){
				$(this).remove();
			});		
		});			
		this.$el.on('click', function (e){
			$('#completed').append(this);	
		});
	}
})

