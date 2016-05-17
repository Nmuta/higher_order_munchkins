var munchkins = ["kim", "tim", "sim", "bim", "whim"] ;
hide_prize_divs();

$("#munchies1trigger").on("click", function (){
    // reset the showing of initial image and hiding prize div on new click
    $("#cats1_image").show();
    $("#cats2_image").hide();

    //clear out existing feedback div.
    $("#munchies1div").html("");

    // set up a truck container
    var truck = [];

    // get input from the user
    var user_input = $("#munchies1").val();

    // for the wise guys :  entering no code in textarea gets them an error.
    if(user_input.length < 1){
      $("#munchies1div").html("you must enter some code");
      return;
    }

    // try to evaluate code entered. use a try / catch to catch syntax errors.
    try {
      // if eval fails, the try will break and it will go to the catch.
      eval(user_input);

      // set up a matching arrays variable to test the match
      var matching_arrays = true;

      // you can Google "indexOf" to see what this next block is doing
      if( ( (user_input).indexOf("function") > -1 ) || ( (user_input).indexOf("=>")  > -1 )) {
        for (var i = 0; i < munchkins.length; i++) {
          if (munchkins[i] != truck[i]){
            matching_arrays = false;
            break;
          }
        }
        if (matching_arrays){
          $("#munchies1div").html("ready to roll");
          $("#cats1_image").hide();
          $("#cats2_image").show();
        } else {
          $("#munchies1div").html("your munchkins and truck arrays do not match");
        }
      } else {
        $("#munchies1div").html("no syntax errors, but is this a higher order function?");
      }
   } catch(err){
        $("#munchies1div").html("syntax error:  try again");
   }
});

/// filter
$("#munchies2trigger").on("click", function (){
   munchkins = [ {shirt: "red", name: "frisky"},
   {shirt: "blue", name: "shorty"},
   {shirt: "purple", name: "misty"},
   {shirt: "green", name: "evil"},
   {shirt: "purple", name: "mighty"}];

    // reset the showing of initial image and hiding prize div on new click
    $("#catsfilter1_image").show();
    $("#catsfilter2_image").hide();

    //clear out existing feedback div.
    $("#munchies2div").html("");

    // set up a truck container
    var truck = [];

    // get input from the user
    var user_input = $("#munchies2").val();

    // for the wise guys :  entering no code in textarea gets them an error.
    if(user_input.length < 1){
      $("#munchies2div").html("you must enter some code");
      return;
    }

    // try to evaluate code entered. use a try / catch to catch syntax errors.
    try {
      // if eval fails, the try will break and it will go to the catch.
      eval("var filtered = "+user_input);
      // you can Google "indexOf" to see what this next block is doing
      if( ( (user_input).indexOf("function") > -1 ) || ( (user_input).indexOf("=>")  > -1 )) {

        if (filtered.length == 2){
          $("#munchies2div").html("purple reigns");
          $("#catsfilter1_image").hide();
          $("#catsfilter2_image").show();
        } else {
          $("#munchies2div").html("you have not filtered out all of the non purple munchkins");
        }
      } else {
        $("#munchies2div").html("no syntax errors, but is this a higher order function?");
      }
   } catch(err){
        $("#munchies2div").html("syntax error:  try again");
   }
});

/// end filter


function hide_prize_divs(){
  $("#cats2_image").hide();
  $("#catsfilter2_image").hide();
  $("#catsreduce2_image").hide();
  $("#catsmap2_image").hide();
}
