function deleteMutant(ev) {
  ev.preventDefault
  $.ajax({
    url: mutantsUrl + '/' + id,
    method: 'put',
    data: {
      mutant: {
        mutant_name: mutantName,
        real_name: 'Not-So-Super ' + mutantName,
        power: 'Ajax!'
      }
    },
    success: function() {
      console.log('Updated: ' + mutant.mutant_name);
      }
    }
  });
};
