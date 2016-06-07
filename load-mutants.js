var url = 'https://mutant-school.herokuapp.com/api/v1/mutants';

function loadMutants(mutants) {//mutants us an array of mutants; this is the function that's called second, and it calls the function each, which is third
  $.each(mutants, function(i, mutant){
    addMutant(mutant);
  });//want to loop through the mutants array, so you call each on the mutants array //you could also hard code the array in .each['fruits','veggies',etc]
}

function addMutant(mutant) {//this is the fourth function called after the function each runs, then append is run
  var li = $('.template') //
    .clone()
    .removeClass('template'); //
  li.find('.mutant-name').text(mutant.mutant_name) //limits search to element, not the whole document
  li.attr('data-id', mutant.id)
  $('#mutantList').append(li); //if we just append mutant, nothing appears, because it isn't an object?
  //$('body').prepend(mutant.mutant_name); //produces a jumbled mess on the screen
  //console.log(mutant.mutant_name);//i think we pulled mutant_name from the url file
}

$.get({ //this is the first function to be called, and calls loadMutants second
  url: url,
  success: loadMutants //loadMutants doesnt need to be called, it loads when $.get finishes
});//$.get(url); //gets the url

/*$.get({
  url: 'https://mutant-school.herokuapp.com/api/v1/mutants'
  success: function(mutants) {
    $.each(mutants, function(i, mutant) {
      $('#mutantList').append('<li>' + mutant.mutant_name + '</li>');
      //console.log(mutant.mutant_name);//not needed anymore because of line above it
    })
  }
})*/
//These last few lines do the exact same thing as the lines of code up top

//order of function calls
/*$.getloadMutants
$.each
addMutant
append
addMutant
append
addMutant
append*/
