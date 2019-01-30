# webToast
<p>A jQuery plugin for alerting user and loading box.</p>
<p> You can easily push  Danger, Info & Success alert to user  and you can show loading box when need load data from API.</p>
<p>Check Demo <a target="_blank" href="https://alemran.me/demo/webToast">Here</a></p>

<div class="highlight highlight-text-html-basic">


#Use for ConfirmBox...
<pre>
<button id="conf">  Check ConfirmBox </button>

$("#conf").click(function(){

  var confirmBox= webToast.confirm('Are You Sure ?');

  confirmBox.click(function(){
    alert('confirmed');
 
  }) 

})

</pre>


#Use for Loading...
<pre>
var Loading= webToast.loading({
                 status:'Loading...',
                 message:'Please Wait..'
                 });
   

setTimeout(function(){ 
  
 Loading.remove() ;
 
}, 3000);

</pre>

#Use for Alert...
<pre>
 webToast.Success({
                 status:'Wow !',
                 message:'You are success',
                   /* Default delay time 3 second */
                 })
      webToast.Info({
                 status:'Hello !',
                 message:'I always try to learn',
                 delay:false  /* Never hide autometically */
                 })
                 
     webToast.Danger({
                 status:'Sorry !',
                 message:'I have failed to complete',
                 delay:5000 /* 5 second will stay */
                 })
</pre>

#Features
<ul> 
<li> Loading Alert</li>
<li> Info Alert</li>
<li> Success Alert</li>
<li> Danger Alert</li>
<li> Custom Delay Time as Millisecond. also have default delay time for alert -3/3000 second </li>

</ul>

#License
<p>The MIT License (MIT)</p>

<p>Author: <a href="https://alemran.me">AL EMRAN</a></p>
