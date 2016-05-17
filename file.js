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

// try{
//   var truck = munchkins.filter(function(truck,index){
// if(munchkins.shirt === purple){
// return truck[munchkins[index].shirt]
// }
// })
// }
// var munchkins = [ {shirt: "red", name: "frisky"},
//        {shirt: "blue", name: "shorty"},
//        {shirt: "purple", name: "misty"},
//        {shirt: "green", name: "evil"},
//        {shirt: "purple", name: "mighty"}];
//
//        $("#cats2_image").hide();
//        $("#catsfilter2_image").hide();
//        $("#catsreduce2_image").hide();
//        $("#catsmap2_image").hide();
//
//
 $("#munchies2trigger").on("click", function (){
     $("#cats1_image").show();
     $("#cats2_image").hide();

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
      if( ( (user_input).indexOf("function") > -1 ) || ( (user_input).indexOf("=>")  > -1 )) {
        truck.forEach(function(thing){
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
//*********
$("#munchies3trigger").on("click", function (){
    $("#cats1_image").show();
    $("#cats2_image").hide();

   //clear out existing feedback div.
   $("#munchies3div").html("");

   var truck = [];
   var user_input = $("#munchies3").val();

   if(user_input.length < 1){
     $("#munchies3div").html("you must enter some code");
     return;
   }

   try {
     truck.push(eval(user_input));
     if( ( (user_input).indexOf("function") > -1 ) || ( (user_input).indexOf("=>")  > -1 )) {
       truck.forEach(function(thing){
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
//*******

$("#munchies4trigger").on("click", function (){
    $("#cats1_image").show();
    $("#cats2_image").hide();

   //clear out existing feedback div.
   $("#munchies4div").html("");

   var truck = [];
   var user_input = $("#munchies4").val();

   if(user_input.length < 1){
     $("#munchies4div").html("you must enter some code");
     return;
   }

   try {
     truck.push(eval(user_input));
     if( ( (user_input).indexOf("function") > -1 ) || ( (user_input).indexOf("=>")  > -1 )) {
       truck.forEach(function(thing){
         $("#munchies4div").html("ready to roll");
         $("#catsmap1_image").hide();
         $("#catsmap2_image").show();
       });
     } else {
       $("#munchies4div").html("your code works, but is this a higher order function?");
     }
  } catch(err){
       $("#munchies4div").html("syntax error:  try again");
  }
});
