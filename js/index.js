

// Need to fix the very first quote shared to twitter when the random quote button hasn't been pressed before


$(document).ready(function() {
	/*$('#newQuote').on('click', function(e) {
		e.preventDefault();
		$.ajax( {
			type: 'GET',
			dataType: 'json',
			url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
			success: function(data) {
			var post = data.shift(); // The data is an array of posts. Grab the first one.
			$('#author').text(post.title);
			$('#quote').html(post.content);
		  }
		});
	});*/

	function tweet() {
		window.open('https://twitter.com/intent/tweet?hashtags= freecodecamp&text=' + encodeURIComponent(post.content + ' -' + (post.title)));
	}
	var post;
	
	$('#newQuote').on('click', function(e) {
		e.preventDefault();
		$.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(data) {
			post = data.shift(); 
			$('#author').text(post.title);
			$('#quote').html(post.content);
		});
	});	
	
	
	
	/*$('#newQuote').on('click', function(e) {
		e.preventDefault();
		$.ajax({
			url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=?',
			dataType: 'jsonp',
			success: function(data) {
			post = data.shift(); // The data is an array of objects. Grab the first one.
			$('#author').text(post.title);
			$('#quote').html(post.content);
			},
			timeout: 5000,
			error: function(jqXHR, textStatus, errorThrown) {
				if (textStatus == "timeout")
				    $("#quote").html("Timeout occurred");
			}
		});
	});*/
  $('#twitter-share-button').on('click', tweet)
});