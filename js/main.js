$(document).ready(function(){
  $('#btn1').click(() => {
    $('nameFilm').append(``);
    console.log(collection[0].name);
  });
});