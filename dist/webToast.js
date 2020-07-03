/*Author :AL EMRAN
email:emrancu1@gmail.com
website:http://alemran.me
*/


"use strict";

const webToast= (function($) {

// variable defining
 let i,htmlData,cssPrepend=false; 
 let align='';

  // set stylesheet as constants
  const cssContent = "<style>*{box-sizing:border-box}@keyframes slideRight{0%{transform:translateX(100px)}70%{transform:translateX(-30px)}100%{transform:translateX(0)}}@keyframes slideLeft{0%{transform:translateX(-100px)}70%{transform:translateX(30px)}100%{transform:translateX(0)}}@keyframes slideDown{0%{transform:translateY(-100px)}70%{transform:translateY(30px)}100%{transform:translateY(0)}}@keyframes slideUp{0%{transform:translateY(100px)}70%{transform:translateY(-30px)}100%{transform:translateY(0)}}.toasttopright{left:initial;right:20px;animation:slideRight .8s}.toasttopleft{left:20px;animation:slideLeft .8s}.toasttopcenter{left:0;right:0;text-align:center;animation:slideDown .8s}.toastbottomcenter{left:0;right:0;bottom:20px;top:initial!important;text-align:center;animation:slideUp .8s}.toastbottomleft{bottom:20px;top:initial!important;animation:slideLeft .8s}.toastbottomright{right:20px;bottom:20px;top:initial!important;animation:slideRight .8s}.toastContainer{position:fixed;top:20px;z-index:999999}.webToast{display:inline-block;text-align:left;padding:10px 0;background-color:#fff;border-radius:4px;max-width:500px;top:0;position:relative;box-shadow:0 0 10px 0 rgba(0,0,0,.2);transition:all .8s ease-in;z-index:99999}.webToast:before{content:'';position:absolute;top:0;left:0;width:4px;height:100%;border-top-left-radius:4px;border-bottom-left-radius:4px}.toastIcon{position:absolute;top:50%;left:15px;transform:translateY(-50%);width:30px;height:30px;padding:5px;border-radius:50%;display:inline-block;font-size:20px;font-weight:700;text-align:center;color:#fff;padding-top:1px}.toastStatus{color:#3e3e3e;font-weight:700;margin-top:0;margin-bottom:2px;font-size:20px}.toastMessage{font-size:16px;margin-top:0;margin-bottom:0;color:#878787}.toastContent{padding-left:60px;padding-right:40px}.toast__close{position:absolute;right:15px;top:38%;width:14px;cursor:pointer;height:14px;color:#ada9a9;transform:translateY(-50%);font-size:28px}.toastSuccess .toastIcon{background-color:#2bde3f}.toastSuccess:before{background-color:#2bde3f}.toastInfo .toastIcon{background-color:#1d72f3}.toastInfo:before{background-color:#1d72f3}.toastDanger .toastIcon{background-color:#ef6658}.toastDanger:before{background-color:#ef6658}.ConfirmConainer{top:0;bottom:0;left:0;right:0;display:flex;justify-content:center;align-items:center}.ConfirmConainer .toastConfirm{padding:20px;min-width:400px;max-width:100%}.ConfirmConainer .confirm-description{padding:10px 0;margin-bottom:5px}.toastConfirm>.toastContent{padding:0 10px;min-width:300px}.toastConfirm>.toastContent>p{font-size:20px;border-bottom:1px solid #ddd;margin-bottom:6px;padding-bottom:5px;color:#1654b3;font-weight:700}.toastConfirm>.toastContent button{padding:5px;font-size:15px;border-radius:4px;cursor:pointer;outline:0 solid;color:#fff}.toastConfirm>.toastContent button[data-confirm]{border:1px solid #0a5ede;background:#0a5ede}.toastConfirm>.toastContent button[data-confirm]:focus{border:2px solid #eae541}.toastConfirm>.toastContent button[data-cancel]{border:1px solid #ef6658;background:#ef6658;float:right}.confirmBG{content:'';position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.4)}.webToast-loader{border-radius:50%;border-top:3px solid #3498db;width:30px;height:30px;-webkit-animation:webToastSpin 1s linear infinite;animation:webToastSpin 1s linear infinite;margin-left:-6px}@-webkit-keyframes webToastSpin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes webToastSpin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.webToast-line-loader{position:fixed;top:0;left:0;right:0;z-index:99999;height:5px;background-color:#1d72f3;background-image:linear-gradient(-45deg,rgba(255,255,255,.5) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.5) 50%,rgba(255,255,255,.5) 75%,transparent 75%,transparent);background-size:30px 30px;animation:move 1s linear infinite}@keyframes move{0%{background-position:0 0}100%{background-position:30px 30px}}</style>" ;
  
  /* function for adding stylesheet to body*/
	 let AddStylehtmlData= function(){
				$('body').prepend( cssContent );
     	$('body').append('<div id="webtoast"></div>')
         cssPrepend=true;
		}
   
   /* function for hiding toast Message*/
	 let hideToast= function(selector){
				$(selector).fadeOut(1000, function() { selector.remove(); });
		}
    
    
      /* function for auto hiding toast Message*/
	 let autoHide= function(selector,delay){

    let delayTime=(delay?delay:3000);    
       
		 setTimeout(function(){ hideToast(selector); }, delayTime);       
  
     
		}
		
  const capitalize=function(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }
 
const successToast=function(options){

  align=(options.align? (options.align).toLowerCase():'topright' );

  htmlData= $('<div class="toastContainer toast'+align+'" onclick="webToast.ToastRemove(this)"><div  class="webToast toastSuccess"><div class="toastIcon"> &#10003; </div><div class="toastContent"><p class="toastStatus">'+ options.status +'</p><p class="toastMessage">'+options.message+'</p></div><div class="toast__close"> &#10799; </div></div></div>');
    
	 if(!cssPrepend){ 
    	AddStylehtmlData();
   }
   
$("#webtoast").append(htmlData);
   
  autoHide(htmlData, options.delay);
  
  
}


const dangerToast=function(options){

  align=(options.align? (options.align).toLowerCase():'topright' );

  htmlData= $('<div class="toastContainer  toast'+align+'"  onclick="webToast.ToastRemove(this)"><div  class="webToast toastDanger"><div class="toastIcon"> &#9432; </div><div class="toastContent"><p class="toastStatus">'+ options.status +'</p><p class="toastMessage">'+options.message+'</p></div><div class="toast__close"> &#10799; </div></div></div>');
  
 
   if(!cssPrepend){ 
    	AddStylehtmlData();
   }
  

$("#webtoast").append(htmlData);
    
    	autoHide(htmlData, options.delay );
   
  
}


const infoToast=function(options){

  align=(options.align? (options.align).toLowerCase():'topright' );

  htmlData= $('<div class="toastContainer  toast'+align+'" onclick="webToast.ToastRemove(this)"><div  class="webToast toastInfo"><div class="toastIcon"> &#9432; </div><div class="toastContent"><p class="toastStatus">'+ options.status +'</p><p class="toastMessage">'+options.message+'</p></div><div class="toast__close"> &#10799; </div></div></div>');
  
    if(!cssPrepend){ 
    	AddStylehtmlData();
   }
  
$("#webtoast").append(htmlData);
   
    	autoHide(htmlData, options.delay );
  
}



const LoadingToast=function(options){

  let topLineProgress='';

  if(options.line==true){
    topLineProgress='<div class="webToast-line-loader"></div>';
  } 
   
  align=(options.align? (options.align).toLowerCase():'topright' );
 
  htmlData= $('<div> '+topLineProgress+'<div class="toastContainer toast'+align+'" ><div  class="webToast"><div class="toastIcon" style="background:transparent"><div class="webToast-loader"></div> </div><div class="toastContent"><p class="toastStatus">'+ options.status +'</p><p class="toastMessage">'+options.message+'</p></div></div></div></div>');
 
    if(!cssPrepend){ 
    	AddStylehtmlData();
   }
  
$("#webtoast").append(htmlData);
  
 return htmlData;
}

    
// confirm toast
const ConfirmToast=function(options){
  
  align=(options.align? (options.align).toLowerCase():'topright' );

  htmlData= $('<div class=""><div class="confirmBG"></div><div class="toastContainer toast'+align+' ConfirmConainer"><div  class="webToast toastConfirm">'+ 
  '<div class="toastContent"> '+
  '<p class="toastMessage">'+(options.message?options.message:options)+'</p>'+
  '<button data-confirm > Confirm </button><button data-cancel > Cancel </button></div> </div></div></div>');
   
   
    if(!cssPrepend){ 
    	AddStylehtmlData();
   }
  
$("#webtoast").append(htmlData);

let confirmBtn=htmlData.find('button[data-confirm]');
let cancelBtn=htmlData.find('button[data-cancel]');

confirmAction(confirmBtn,cancelBtn,htmlData);

return confirmBtn;

}

 

const confirmAction=function(confirmBtn,cancelBtn,ConfirmArea){

  confirmBtn.click(function(){
     hideToast(ConfirmArea);
  })

  cancelBtn.click(function(){
    hideToast(ConfirmArea);
  })

}



  return {
      Success: function(options){       
        
        successToast(options); 
      
      } ,
	  Danger:function(options){  

			dangerToast(options);   
	 
	  },
	  Info:function(options){  

			infoToast(options);   
		  
	  },
     ToastRemove:function(selector){
      	hideToast(selector);	  
    },
	  loading:function(options){ 
            
			return  LoadingToast(options); 
     
	  },
    confirm:function(options){
      return ConfirmToast(options);
    } 
  };


})(jQuery);
