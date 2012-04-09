/*<!-- example 1-->
<p>Alejandro Romero</p>

​<!-- example 2-->

<ul id="navigation">
    <li>holala</li>
    <li>colala</li>
    <li>trulala</li>
</ul>

​<!-- example 3-->
     <div id="disclaimer">
         <h1>perro yopo</h1>       
   </div>
*/
​$(document).ready(function() {
    $('p').animate({
        padding: '20px',
        fontSize: '50px'
    }, 500);
    //example 2
    $('#navigation li').hover(function() {
        $(this).animate({
            paddingLeft: '+=15px'
        }, 500);
    }, function() {
        $(this).animate({
            paddingLeft: '-=15px'
        }, 500);
    });
    //example 3
    $('#disclaimer').animate({
        opacity: 'hide',
        height: 'hide'
    }, 'slow');
});​