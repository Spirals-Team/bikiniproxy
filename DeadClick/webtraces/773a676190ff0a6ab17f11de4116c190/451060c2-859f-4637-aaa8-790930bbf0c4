
    var windowSizeArray = [ "width=460,height=230",
                            "width=460,height=460,scrollbars=yes" ];

    jQuery(document).ready(function($){
        $('.newPlayerWindow').click(function (event){
 
            var url = $(this).attr("href");
            var windowName = "popUp";//$(this).attr("name");
            var windowSize = windowSizeArray[ $(this).attr("rel") ];
 
            window.open(url, windowName, windowSize);
 
            event.preventDefault();
 
        });
    });
