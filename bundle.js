var subscribeModule = (function(){

    var private = function(opt){

        var options = {
             email:  null,
             button:  null,
             sendOnEnter: false,
             password: null,
             name: null
        };

        options.email = opt.email || null;
        options.password = opt.password || null;
        options.name = opt.name || null;
        options.button = opt.button || null;
        options.sendOnEnter = opt.sendOnEnter || false;

        var showNotification = function(){
            alert("You log in :)");
        };

        var sentEmail = function(){
            showNotification();
        };

        if(options.sendOnEnter){
            options.email.addEventListener('keypress', function(e){
                if(e.keyCode === 13)
                {
                   sentEmail();
                }
            });
        }

        if(options.button){
            options.button.addEventListener('click', function(){
               sentEmail();
            });
        }
    };

    return {
        init: function(opt){
             private(opt);
        }
   };
})();

var subscr = document.getElementsByClassName('signup_form')[0];

subscribeModule.init({
   email:  subscr.children[7],
   button:  subscr.lastElementChild,
   sendOnEnter: true
});
(function() {
$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('#scroll_up').fadeIn();
        } else {
            $('#scroll_up').fadeOut();
        }
    });
    $('.btn_up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzdWJzY3JpYmUuanMiLCJtYWluLmpzIiwic2Nyb2xsX3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgc3Vic2NyaWJlTW9kdWxlID0gKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICB2YXIgcHJpdmF0ZSA9IGZ1bmN0aW9uKG9wdCl7XHJcbiAgICBcclxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgIGVtYWlsOiAgbnVsbCxcclxuICAgICAgICAgICAgIGJ1dHRvbjogIG51bGwsXHJcbiAgICAgICAgICAgICBzZW5kT25FbnRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICBwYXNzd29yZDogbnVsbCxcclxuICAgICAgICAgICAgIG5hbWU6IG51bGxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBvcHRpb25zLmVtYWlsID0gb3B0LmVtYWlsIHx8IG51bGw7IFxyXG4gICAgICAgIG9wdGlvbnMucGFzc3dvcmQgPSBvcHQucGFzc3dvcmQgfHwgbnVsbDtcclxuICAgICAgICBvcHRpb25zLm5hbWUgPSBvcHQubmFtZSB8fCBudWxsO1xyXG4gICAgICAgIG9wdGlvbnMuYnV0dG9uID0gb3B0LmJ1dHRvbiB8fCBudWxsOyAgIFxyXG4gICAgICAgIG9wdGlvbnMuc2VuZE9uRW50ZXIgPSBvcHQuc2VuZE9uRW50ZXIgfHwgZmFsc2U7XHJcblxyXG4gICAgICAgIHZhciBzaG93Tm90aWZpY2F0aW9uID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgYWxlcnQoXCJZb3UgbG9nIGluIDopXCIpOyAgXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIHNlbnRFbWFpbCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZihvcHRpb25zLnNlbmRPbkVudGVyKXtcclxuICAgICAgICAgICAgb3B0aW9ucy5lbWFpbC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgICAgICAgICAgaWYoZS5rZXlDb2RlID09PSAxMylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgIHNlbnRFbWFpbCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKG9wdGlvbnMuYnV0dG9uKXtcclxuICAgICAgICAgICAgb3B0aW9ucy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICBzZW50RW1haWwoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTsgICAgICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24ob3B0KXtcclxuICAgICAgICAgICAgIHByaXZhdGUob3B0KTsgICBcclxuICAgICAgICB9XHJcbiAgIH07XHJcbn0pKCk7XHJcbiIsInZhciBzdWJzY3IgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzaWdudXBfZm9ybScpWzBdO1xyXG5cclxuc3Vic2NyaWJlTW9kdWxlLmluaXQoe1xyXG4gICBlbWFpbDogIHN1YnNjci5jaGlsZHJlbls3XSxcclxuICAgYnV0dG9uOiAgc3Vic2NyLmxhc3RFbGVtZW50Q2hpbGQsXHJcbiAgIHNlbmRPbkVudGVyOiB0cnVlXHJcbn0pOyIsIihmdW5jdGlvbigpIHsgIFxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpeyAgIFxyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAwKSB7XHJcbiAgICAgICAgICAgICQoJyNzY3JvbGxfdXAnKS5mYWRlSW4oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcjc2Nyb2xsX3VwJykuZmFkZU91dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgJCgnLmJ0bl91cCcpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgc2Nyb2xsVG9wOiAwXHJcbiAgICAgICAgfSwgNDAwKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxufSk7XHJcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
