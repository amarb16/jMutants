var mutantsUrl = 'https://mutant-school.herokuapp.com/api/v1/mutants';

$(document).on('click', 'a.delete', function(ev) {
  var li = $(ev.currentTarget).closest('li'); //closest checks element itself and goes up through the parents until it finds the element we're looking for
  var id = li.data('id');
  deleteMutant(id, li);
});

$(document).on('click', 'a.edit', funtion(ev) {
  var li = $(ev.currentTarget).closest('li');
  var id = li.data('id');
  var mutantName = li.find('.mutant-name').text();
  var form = $('form').get(0);
  $(form.mutantName).val(mutantName);
});

$('form').on('submit', function(ev) {
  ev.preventDefault;
  if(ev.currentTarget.create) {

  }
});

$function() {
  $.get({
    url: mutantsUrl,
    success: processMutants
  });
});
