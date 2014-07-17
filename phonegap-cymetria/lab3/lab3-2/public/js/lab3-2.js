$(document).ready(function(){
	/* First part for the excercises */
	$('#cleanInfo').click(function(){
		$('#myInfo').empty();
		$(this).addClass('ui-state-disabled');
	});

	$('#callInfo').click(function(event){
		var values = {name : "Jojo", city : "Bogotá"}

		$.ajax({
			url : "/message",
			type : "POST",
			dataType : "JSON",
			data : values,
			success: function(data){
				$('#myInfo').empty();
				$('#myInfo').append('<ul></ul>');
				console.log(data);
				$.each(data, function(key, value){
					$('#myInfo ul').append('<li>' + key + ': ' + value + '</li>');
				});
				$('#cleanInfo').removeAttr('class');
				$('#cleanInfo').addClass('ui-btn');
				event.preventDefault();
			}, 
			error: function(err){
				console.log(err);
				event.preventDefault();
			}
		});
	});

	/* Second part of the excercise */

	$('.error').hide();
	$('#myAge').on('click', function(event){

			var data = $('#age').val();

			var len = data.length;

			var c;

	        for(var i = 0; i < len; i++){
	        	c = data.charAt(i).charCodeAt(0);

	        	if(c < 48 || c > 57){
	        		$('.error').show();
	        		event.preventDefault();
	        		break;
	        	} else {
	        		$('.error').hide();
	        		localStorage.setItem('age', data);
	        		event.preventDefault();
	        		break;
	        	}
	        }
	});

	$('#loadMyAge').on('click', function(event){
		$('#myInfoAge').append('<span>' + localStorage.getItem('age') + '</span>');
	});
});