$(document).ready(function(){
  console.log (`it's working!`); 
  $('#article1').append(`<button type="button" id="btn1">Click Me!</button>`);

  // Ação de clicar no botão login da página Cadastro/Login
  $('#log-bt').click(function() {
    $('#logcad-desc').text("Login");
    $(this).css('font-weight', 'bold');
  });

  // Ação de clicar no botão cadastro da página Cadastro/Login
  $('#cad-bt').click(function() {
    $('#logcad-desc').text("Cadastro");
    $(this).css('font-weight', 'bold');
    $('.logcad-form').append(`<div>OI TUDO BEM?</div>`);
  });

  
});

