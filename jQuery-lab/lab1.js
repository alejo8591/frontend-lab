/*
HTML
<table class="data" id="celebs"> 
    <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Occupation</th>
      <th>Approx. Location</th>
      <th>Price</th>
    </tr>
    </thead>
    <tr>
      <td>ID</td>
      <td>Name</td>
      <td>Occupation</td>
      <td>Approx. Location</td>
      <td>Price</td>
    </tr>
    <tr>
      <td>ID</td>
      <td>Name</td>
      <td>Occupation</td>
      <td>Approx. Location</td>
      <td>Price</td>
    </tr>
        <tr>
      <td>ID</td>
      <td>Name</td>
      <td>Occupation</td>
      <td>Approx. Location</td>
      <td>Price</td>
    </tr>
        <tr>
      <td>ID</td>
      <td>Name</td>
      <td>Occupation</td>
      <td>Approx. Location</td>
      <td>Price</td>
    </tr>
    </table>
     <div id="disclaimer">
         <h1>perro yopo</h1>       
   </div>
<input type="button" id="hideButton" value="hide" />
<input type="button" id="toggleButton" value="COmo" />
​-----------------------------------------------------------
.zebra{
    background-color:#dddddd;
    color: #222777;
    font-size:16px;
    line-heigth:2.5em;
    
}
tr.zebraHover{
    background-color: #FFFACD;
}

*/

$(document).ready(function(){
    $('#celebs th').css('background-color', '#bf7779');
    $('#celebs tbody tr:even').addClass('zebra');
    $('#celebs tbody tr').mouseover(function(){
        $(this).addClass('zebraHover');
    });
    $('#celebs tbody tr').mouseout(function(){
        $(this).removeClass('zebraHover');
    });
    $('#hideButton').click(function(){
        $(this).slideToggle();
    });
    $('#disclaimer').click(function(){
        $('#hideButton').show();
    });
    $('#toggleButton').click(function(){
        $('#disclaimer').slideToggle('slow');
        if($('#disclaimer').is(':visible')){
            $(this).val('hide');
        }else{
            $(this).val('show');
        }
    });
});​
