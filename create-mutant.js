$('#new_mutant').on('submit', handleCreateFormSubmit); //DO NOT DO IT ON CLICK, DO IT ON SUBMIT BECAUSE IT IS A FORM

  function handleCreateFormSubmit(ev) {//passes event as handler
      ev.preventDefault();
      var f = ev.currentTarget; //"f" points to the form, like this does
      var mutant = {
        mutant_name: f.mutantName.value, //could also be this.mutantName is it wasn't for the f variable
        real_name: f.realName.value, //could also be this.realName is it wasn't for the f variable
        power: f.power.value //could also be this.power is it wasn't for the f variable
      };
      createMutant(mutant);
  }

  function createMutant(mutant) {
    $.post({ //shorthand for $ajax.post
      url: url,
      data: {
        mutant: mutant
      },
      success: function(mutant) {
        addMutant(mutant);
        //console.log(mutant.mutant_name); this shows what you added after the page is refreshed
      }
    })
  };
