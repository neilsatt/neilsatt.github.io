// Movie object
function Movie(title, rating, genre, description) {
      this.title = title;
      this.rating = rating;
      this.genre = genre;
      this.description = description;
                
      this.showText = function() {
        var sentence = "Title: "+ this.title + ", My rating: " + this.rating + ", Genre: " + this.genre + "</br> "
                +"Synopsis: "+ this.description;
        return sentence;
      }
    }
    
	// create new array, and set up init function
    var movieList = [];    
	
    window.onload = init;              
    function init() {
      var submitButton = document.getElementById("submitButton");
      submitButton.onclick = getMovieData;
    }
     
	// Get form data
    function getMovieData() {
      var titleInput = document.getElementById("title");
      var title = titleInput.value;
	  
	  // get selected radio button
	  var theForm = document.forms.theForm;
	  var ratingsArray = theForm.elements.rating;
	  var rating; 
	  for (var i=0; i <ratingsArray.length; i++)
	  {
		  if (ratingsArray[i].checked) {
			console.log('selected radio button '+ratingsArray[i].value);
			rating = ratingsArray[i].value;
			//return rating; 
		  }
	  }
  
      var genreSelect = document.getElementById("genre");
      var genreOption = genreSelect.options[genreSelect.selectedIndex];
      var genre = genreOption.value;
  
      var descriptionTextarea = document.getElementById("description");
      var description = descriptionTextarea.value;
	  var noText = document.getElementById("noText");
  
      if (title == null || title == "") {
        noText.innerHTML = " Please enter a movie title";
        return;
      }
	  // add form data into movie array
      else {
	    noText.innerHTML = "";
        var movie = new Movie(title,  rating, genre, description);
        movieList.push(movie);
        addMovieToList(movie);
        var theForm = document.getElementById("theForm");
        theForm.reset();
      }                
    }
    
	// Add movie list element to page
    function addMovieToList(movie) {
      var movieList = document.getElementById("movieList");
      var li = document.createElement("li");
      li.innerHTML = movie.showText();
      if (movieList.childElementCount == 0) {
        movieList.appendChild(li);
      }
      else {
        movieList.insertBefore(li, movieList.firstChild);
      }
    } 