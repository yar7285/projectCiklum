var subscribeModule = (function(){
                       
    var private = function(opt){
    
        var options = {
             email:  null,
             button:  null,
             sendOnEnter: false,
             password: null,
             name: null
        };

        // jquery contains method 'extend' for next code
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
