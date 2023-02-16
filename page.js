'use strict';
// RISKY PRIAVATE MESSAGE
const privateMessage = document.querySelector('.mes-pos')
const messageInfo = document.querySelector('.message-info')


privateMessage.addEventListener('click', function() {
 messageInfo.classList.toggle('hidden');
})



const markAll = document.querySelector('.mark-all');
const coment = document.querySelector('notification-message');
const message = document.querySelectorAll('.message');
// CHANGE OF BACKGROUND COLOR FOR CLICK ON EACH NOTIFICATION
for(let i=0; i < message.length; i++) {
 message[i].addEventListener('click', function(){
  message[i].style.backgroundColor = 'white'
 })

 markAll.addEventListener('click', function(){
 document.querySelector('.not-no').textContent = 0;
 message[i].style.backgroundColor = 'white'
 })
}

const notificationDetails = document.querySelectorAll('.note');
let notificationNumber = 8;

// NOTIFICATION COUNTDOWN TO 0
for(let i=0; i < notificationDetails.length; i++) {
 notificationDetails[i].addEventListener('click', function(){
  if(notificationNumber > 0) {
  notificationNumber--;
  document.querySelector('.not-no').textContent = notificationNumber;
  } else {
   document.querySelector('.not-no').textContent = 0;
  }
 })
}













