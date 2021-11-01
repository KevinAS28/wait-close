// var waitclose = function(window, seconds){
//     var i = 0;
//     var __wait = function(){
//         if (i==seconds){
//     
//     window.close();
//             return;
//         };
//         i+=1;
//         console.log(i);
// 
//     setTimeout(
//     __wait
//     , 1000);
//         
//     };
//     setTimeout(
//     __wait
//     , 1000);
//     
// 
// };
// var window = window.open('https://meet.google.com/ric-jwgv-dtj?pli=1&authuser=1');
// waitclose(window, 1300);


// var window1 = window.open('https://meet.google.com/ric-jwgv-dtj?pli=1&authuser=1');


        function closeWindow() {
  
            // Open the new window 
            // with the URL replacing the
            // current page using the
            // _self value
            let new_window =
                open("", '_self');
  
            // Close this window
            new_window.close();
  
            return false;
        }

var i = 0;
var interval = setInterval(function(){
    if (i==3){
//         closeWindow();
        window.onunload = null;

        window.onbeforeunload=null;
//         close();
//         window.location.replace('https://www.google.com');

        clearInterval(interval);
        var w = open('', '_self');
//           w.document.write("");

        w.close();
        var host = window.location.protocol + "//" + window.location.host;
        window.location.replace(host);
        window.location.replace('https://www.google.com');
        
//         exit();
        
    }
    else{
        console.log(i);
        i+=1;
    }
}, 1000);

