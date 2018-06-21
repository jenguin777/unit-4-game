$(document).ready(function () {

    //Define global variables

    var targetNumber;

    $("#number-to-guess").text(targetNumber);

    var counter = 0;
    var losses = 0;
    var wins = 0;
    // var pictures {
    //     image1 : "../images/BlueCrystal200x200.jpg",
    //     image2 : "../images/FuschiaCrystal596x745.jpg",
    //     image3 : "../images/GoldCrystal650x650.jpg",
    //     image4 : "../images/GrayBlueCrystal420x420.jpg"
    // };

    // $("#wins").append();
    // console.log("wins: " + wins);

    // Now we want to create multiple crystals each with their own unique number value between 19 and 120 (inclusive).
    function startGame () {
        targetNumber = Math.floor(Math.random() * (120 -50 + 1)) + 50;
        console.log(targetNumber);
        $("#wins").append();
        console.log("wins: " + wins);
        $("#losses").append();
        $("#target-number").append();
        renderCrystals();
    }

    //The purpose of this function is to render crystals on the screen
    function renderCrystals() {
        //Before we get started, we need to empty out any existing crystals from previous games
        $("#crystals").empty();
        //Now we want to make sure we loop 4 times
        for (var i = 0; i < 4; i++) {
            // We want to assign a random number for each crystal between 1 and 12 (inclusive)
            var randomNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

            // For each iteration, we will create an imageCrystal
            var imageCrystal = $("<img>");
    
            // First each crystal will be given the class ".crystal-image".
            // This will allow the CSS to take effect.
            imageCrystal.addClass("crystal-image");
    
            // Each imageCrystal will be given a src link to the crystal image - need to enhance this to show 4 crystals and apply same logic to each
            // imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

            imageCrystal.attr("src", "../assets/images/GrayBlueCrystal420x420.jpg");

    
            // Each imageCrystal will be given a data attribute called data-crystalValue.
            // This data attribute will be set equal to the array value.
            imageCrystal.attr("data-crystalvalue", randomNumber);
    
            // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
            $("#crystals").append(imageCrystal);
        }    
    }
   
    startGame();

    // This time, our click event applies to every single crystal on the page. Not just one.
    $(document).on("click", ".crystal-image", function () {

        // Determining the crystal's value requires us to extract the value from the data attribute.
        // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
        // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
        // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        // We then add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
        counter += crystalValue;

        // All of the same game win-lose logic applies. So the rest remains unchanged.
        alert("New score: " + counter);

        if (counter === targetNumber) {
            alert("You win!");
            wins++;
            $("#wins").append();
            startGame();
        }

        else if (counter > targetNumber) {
            alert("You lose!!");
            losses++;
            $("#losses").append();
            startGame();
        }

    });
    startGame();
});