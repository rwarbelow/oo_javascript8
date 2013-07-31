$(document).ready(function() {

  function Die(){};

  Die.prototype = {
    dieSides: [1,2,3,4,5,6],
    roll: function(){
      return this.dieSides[Math.floor(Math.random()*6)]
    }
  }

  function addDie(){
    $('.dice').append('<div class="die"></div>');
  }

  function changeValues(){
    $('.die').each(function(index, die){
      gameDie = new Die;
      $(die).text(gameDie.roll())
    })
  }
  
  function bindEvents(){
    $('#roller button.roll').on('click', changeValues)
    $('#roller button.add').on('click', addDie)
  }

  bindEvents();
});
