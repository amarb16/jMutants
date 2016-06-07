$(document).on('click', 'a.delete', handleDeleteClick)

  function handleDeleteClick(ev) {//passes event as handler
      ev.preventDefault();
      var li = $(ev.currentTarget).closest('li');
      var id = li.attr('data-id');
      deleteMutant(id, li);
  }

function deleteMutant(id, li) {
  $.ajax({
    url: url + '/' + id,
    method: 'delete',
    success: function() {
      if (li) {
        li.remove();
      }
    }
  });
};
