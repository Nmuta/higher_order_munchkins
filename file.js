var munchkins = ["kim", "tim", "sim", "bim", "whim"] ;
$("#cats2_image").hide();
$("#catsfilter2_image").hide();
$("#catsreduce2_image").hide();
$("#catsmap2_image").hide();

$("#munchies1trigger").on("click", function (){
    $("#cats1_image").show();
    $("#cats2_image").hide();

    //clear out existing feedback div.
    $("#munchies1div").html("");

    var truck = [];
    var user_input = $("#munchies1").val();

    if(user_input.length < 1){
      $("#munchies1div").html("you must enter some code");
      return;
    }

    try {
      truck.push(eval(user_input));
      if( ( (user_input).indexOf("function") > -1 ) || ( (user_input).indexOf("=>")  > -1 )) {
        truck.forEach(function(thing){
          $("#munchies1div").html("ready to roll");
          $("#cats1_image").hide();
          $("#cats2_image").show();
        });
      } else {
        $("#munchies1div").html("your code works, but is this a higher order function?");
      }
   } catch(err){
        $("#munchies1div").html("syntax error:  try again");
   }
});


var munchkins = [ {shirt: "red", name: "frisky"}, {shirt: "blue", name: "shorty"}, {shirt: "purple", name: "misty"}, {shirt: "green", name: "evil"}, {shirt: "purple", name: "mighty"}];
$("#cats2_image").hide();
$("#catsfilter2_image").hide();
$("#catsreduce2_image").hide();
$("#catsmap2_image").hide();

$("#munchies2trigger").on("click", function (){
    $("#catsfilter1_image").show();
    $("#catsfilter2_image").hide();

    //clear out existing feedback div.
    $("#munchies2div").html("");

    var truck = [];
    var user_input = $("#munchies2").val();

    if(user_input.length < 1){
      $("#munchies2div").html("you must enter some code");
      return;
    }

    try {
      truck.push(eval(user_input));
      if( ( (user_input).indexOf("filter") > -1 ) || ( (user_input).indexOf("=>")  > -1 )) {
        truck.filter(function(thing){
          $("#munchies2div").html("ready to roll");
          $("#catsfilter1_image").hide();
          $("#catsfilter2_image").show();
        });
      } else {
        $("#munchies2div").html("your code works, but is this a higher order function?");
      }
   } catch(err){
        $("#munchies2div").html("syntax error:  try again");
   }
});


var munchkins = [5,7,2,10,1]
// $("#cats2_image").hide();
// $("#catsfilter2_image").hide();
// $("#catsreduce2_image").hide();
// $("#catsmap2_image").hide();
$("#catsreduce1_image").hide();

$("#munchies3trigger").on("click", function (){
    $("#catsreduce2_image").show();
    $("#catsreduce1_image").hide();

    //clear out existing feedback div.
    $("#munchies3div").html("");

    var truck = [];
    var user_input = $("#munchies3").val();
    var result = munchkins.reduce(function(a, b) {
      return a + b;
    });

    if(user_input.length < 1){
      $("#munchies3div").html("you must enter some code");
      return;
    }

    try {
      truck.push(eval(user_input));
      console.log(truck);
      if(  (user_input).indexOf("reduce") > -1 && (user_input)===result){
        truck.reduce(function(thing){
          $("#munchies3div").html("ready to roll");
          $("#catsreduce1_image").hide();
          $("#catsreduce2_image").show();
        });
      } else {
        $("#munchies3div").html("your code works, but is this a higher order function?");
      }
   } catch(err){
        $("#munchies3div").html("syntax error:  try again");
   }
});






// $("#cats2_image").hide();
// $("#catsfilter2_image").hide();
// $("#catsreduce2_image").hide();
// $("#catsmap2_image").hide();
// $("#catsmap1_image").show();

$("#munchies4trigger").on("click", function (){
    // $("#catsmap2_image").show();
    // $("#catsmap1_image").hide();
    $("#cats1_image").show();
    $("#cats2_image").hide();

    //clear out existing feedback div.
    $("#munchies4div").html("");

    var mapped = [];
    var user_input = $("#munchies4").val();
    var munchkins = [5,7,2,10,1];
    var squared = [25,49,4,100,1];

    if(user_input.length < 1){
      $("#munchies4div").html("you must enter some code");
      return;
    }

    try {
      mapped.push(eval(user_input));
      // if(  (user_input).indexOf("map") > -1 ){
      if( ((user_input).indexOf("map") > -1 ) && mapped.join("") === squared.join("")){
        mapped.forEach(function(thing){
          $("#munchies4div").html("ready to roll");
          $("#catsmap1_image").hide();
          $("#catsmap2_image").show();
        });
      } else if (((user_input).indexOf("map") > -1 ) && mapped.join("") !== squared.join("")){
        $("#munchies4div").html("wrong answer!");
    }else {
        $("#munchies4div").html("your code works, but is this a higher order function?");
      }
   } catch(err){
        $("#munchies4div").html("syntax error:  try again");
   }
});
// map transforms elments of an array and pushes them into a new array.
