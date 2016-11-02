(function() {
  'use strict';

  window.chat = window.chat || {};

  window.chat.listenForMessages(function messageHandler(data) {

    $('.login')
      .on('submit', function submitUserName(event) {
        event.preventDefault();
        
        $.ajax({
          url: '/login',
          method: 'POST',
          data: JSON.stringify({ username: 'ettore'}),
          headers: {
            'Content-Type': 'application/json'
          }
        })
      .done(function handleLogUserName(data) {
        console.log(data);
      })
      .fail(function messageHandlerFail(xhr) {
        console.log(xhr);
      })
     } )























 });









}());
