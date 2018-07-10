$(document).ready(function(){
	fetch('https://jsonplaceholder.typicode.com/posts')
  	.then(response => response.json())
 	.then(json => {
 		for(var i = 0; i < json.length; i++){
 			$('#demo').append('<h3>' + json[i].id + '. ' +
 			 json[i].title + '.</h3><p>' + json[i].body + '.</p>');
 		}
 	});
});