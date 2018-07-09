$(document).ready(function(){
	fetch('https://jsonplaceholder.typicode.com/posts/1')
  	.then(response => response.json())
 	.then(json => {
 		$('#demoH').html(json.id + '. ' + json.title);
 	 	$('#demoP').html(json.body)
 	});
});