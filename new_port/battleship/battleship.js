// The Model keeps track of the ship and board details
var model = {
	boardSize: 7, // size of grid
	numShips: 3,
	shipLength: 3, // number of cells for each ship
	shipsSunk: 0,
	

  ships:   [ { locations: [10, 20, 30], hits: ["", "", ""] },
             { locations: [32, 33, 34], hits: ["", "", ""] },
             { locations: [63, 64, 65], hits: ["", "", ""] }],
				
  // accept a guess, iterate through the ships to see if guess matches			
  fire: function(guess) {
   for (var i = 0; i < this.numShips; i++) {
		var ship = this.ship[i];
       
        // searches array for matching value. Returns index, or -1 if not found.
		var index = ship.locations.indexOf(guess); 
       
       
		if (index >= 0) {
			// hit
			ship.hits[index] = "hit";
			
			view.displayHit(guess);
			view.displayMessage("hit");
			
			if(this.isSunk(ship)) {
				view.displayMessage("you sank my ship");
				this.shipsSunk++;
			}
			return true;
			}
		}
      
		view.displayMiss(guess);
		view.displayMessage("You missed");
		return false;
	}
  }		
}; 


// The View updates the display messages using css classes 
var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},

    // use id from player's guess, to get the correct element to update
	displayHit: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	},

	displayMiss: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}

}; 


// Tests 
/*
view.displayMiss("00");
view.displayMiss("06");
view.displayMiss("55");
view.displayHit("12");
view.displayHit("26");
*/




