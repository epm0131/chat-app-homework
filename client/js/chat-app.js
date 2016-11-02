(function() {
  'use strict';

  window.chat = window.chat || {};

  window.chat.listenForMessages(function messageHandler(data) {
    console.log(data);
  });


  var myToken;

  $('.login')
    .on('submit', function submitUserName(event) {
      event.preventDefault();

      $.ajax({
        url: '/login',
        method: 'POST',
        data: JSON.stringify({ username: $('.username').val() }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
    .done(function handleLogUserName(data) {
      myToken = data.token;
      console.log(data);
    })
    .fail(function messageHandlerFail(xhr) {
      console.log(xhr);
    })
  }
  )

  $('.send-message')
    .on('submit', function submitText(event) {
        event.preventDefault();

        $.ajax({
          url: '/chat',
          method: 'POST',
          data: JSON.stringify({ message: $('.message').val() }),
          headers: {
            Authorization: myToken,
            'Content-Type': 'application/json'
          }
        })
        .done(function handleMessage(data) {
        })
        .fail(function messageHandlerFail(xhr) {
          console.log(xhr);
        })
    })




























}());
