var subscr = document.getElementsByClassName('signup_form')[0];

subscribeModule.init({
   email:  subscr.children[7],
   button:  subscr.lastElementChild,
   sendOnEnter: true
});
