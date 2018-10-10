//Hunter, add the id for the player input form here where #userSearch is for player stats data
$("#userSearch").on('click', function(event){
    event.preventDefault();
var userInputFirst = $("#userInputFirst").val().trim();
var userInputLast = $("#userInputLast").val().trim();
clearInput();
getPlayers(userInputFirst, userInputLast);

//console.log(userInputFirst);
// console.log(userInputLast);
});
// returns list of players with match firstName lastName
function getPlayers(firstName,lastName){
var players = [];

var queryURL = "https://api.fantasydata.net/v3/nfl/stats/JSON/Players?key=f63459df4d324742a9ef550a4ad5a83f&Name=Michael";  


$.ajax({
url: queryURL,
method:"GET",
data:"{body}",
})
.done(function(data) {
alert("success"); 
console.log(data);

for(var i = 0; i < data.length; i++){
    if(data[i].FirstName === firstName && data[i].LastName === lastName){
        
        // console.log(data);

        //Player Names
        var playerFirstName = data[i].FirstName ;
        var playerLastName = data[i].LastName;

        //Player Age & weight/height
        var playerAge = data[i].Age;
        var playerWeight = data[i].Weight;
        var playerHeight = data[i].Height;

        //Player Number & Team
        var playerNumber = data[i].Number;
        var playerTeam = data[i].Team;
        var playerPosition = data[i].FantasyPosition;
        var playerCollege = data[i].College;

        var player = {
            Name: playerFirstName + " " + playerLastName,
            Team: playerTeam,
            Age: playerAge,
            Number: playerNumber,
            Position:playerPosition,
            Weight: playerWeight,
            Height: playerHeight,
            College: playerCollege
        };
        players.push(player);
        console.log(players);
        
        
    }
}


})
.fail(function() {
alert("error");
});
return players;
};


//make two var playerFirstName= $("#inputButtonFirstName").val().trim()
//var playerLastName = $("#inputButtonLastName").val().trim
// var result = getPlayers("Tom","Brady");

var result = getPlayers(userInputFirst, userInputLast);
console.log(result)

function clearInput(){
$("#userInputFirst").val("");
$("#userInputLast").val("");
}