  var ww=33.48;
	var bl=68;
	var bt=20;
	var cmd ="F8:CF:C5:D5:36:29"; //"14:F6:5A:AC:BF:4B";//"F8:CF:C5:D5:36:29";
	var isShowMe = false;
	var isShowHeatmap = false;
	var map;

String.prototype.startWith=function(s){
  if(s==null||s==""||this.length==0||s.length>this.length)
   return false;
  if(this.substr(0,s.length)==s)
     return true;
  else
     return false;
  return true;
 }
 
function getCookie(name)//È¡cookiesº¯Êý        
{
    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));
     if(arr != null) return unescape(arr[2]); return null;

}
 
function init()
{
	backgroudlayer();
	///navigation/////////
	isSetTarget=0;
	isStopNavigation = 1;
	navigationTargetX=0;
	navigationTargetY=0;
	navigationLayer = document.getElementById("navigationCanvas");
	navigationLayer.addEventListener('mousedown',this.mousedown,false);
	navigationLayer.addEventListener('mousemove',this.mousemove,false);
	isSend =0;
	//map = h337.create({"element":document.getElementById("heatMapCanvas"), "radius":30, });
	///location/////////////
	var canvasID="locationCanvas";
	var host = "ws://172.19.13.9:1990";
	//alert(cmd);
	if (cmd==null)
	{
		window.location.href="./index.php";
	}

	try
  {
    socket = new WebSocket(host);
    socket.onopen = function() {
    	//var a=0;
    	//alert("Welcome To Our WiFi Localization System!");
    	ShowOneUser();
    	};
    socket.onclose = function (evt) {
 			//alert("Time out, Pls refresh the page")
 			}; 
 		socket.onmessage = function (evt) {
 			
 			var pos= evt.data;
			if (pos.length <10)
			{
				return;
			}
			
			if (pos == "There is no this id")
 			{
 				StopShow();
 				return;
 			}
 			
 			if (isSend==1)
 			{
 				isSend = 0;
 				//alert(pos);
 			}
			
			if (pos.startWith("N:"))
			{
				showNavigation(pos.split(":")[1]);
			}
			else if (pos=="clearToShown")
			{
				 if (canvasID=="locationCanvas")
				 {
				 	  document.getElementById(canvasID).className = "CanvasToShow";
				 	  canvasID="locationCanvas2";
				 	  document.getElementById(canvasID).className = "CanvasToHidden";
				 	  clearlocation(canvasID);
				 }
				 else
				 {
				 		document.getElementById(canvasID).className = "CanvasToShow";
				 	  canvasID="locationCanvas";
				 	  document.getElementById(canvasID).className = "CanvasToHidden";
				 	  clearlocation(canvasID);
				 }
				 	
			}
		  else
		  {		 
				var str1 = pos.split("-");
				var id = str1[0];
				var posV = str1[1];
				var str2= posV.split(',');
				var posx = parseFloat(str2[0]);
				var posy = parseFloat(str2[1]);
			
				var x_pixel=posx*ww+bl;
				var y_pixel=posy*ww+bt;				
				showuser(x_pixel, y_pixel,id,canvasID);
				if (isStopNavigation == 0)
				{
					SendNavigation();
				}
			}
				
 		}; 
		socket.onerror = function (evt)
		 {
		 	 //alert("Server is error");
		 	}; 
  }
  catch(ex){//alert("Something is error");
  	}
  
}

function timerStart()
{
	SendData();

	t=setTimeout("timerStart()",1000);
}

function SendData() {
            try{
                socket.send(cmd);
            }catch(ex){
               //alert("Send is error");
            }
           
        };
   

     
function ShowAll()
{
	stopNavigation();
	isShowMe = false;
	StopShow();
	cmd="all";
	timerStart();
}

function ShowOneUser()
{
	 isShowMe = true;
	 StopShow();
	 timerStart();
}

function ShowHeatmap()
{
	 self.location="heatmap/index.html";
}

function StopShow()
{
	clearlocation("locationCanvas");
	clearlocation("locationCanvas2");
}

function ShowMe()
{
	 isShowMe = true;
	 StopShow();
	 cmd=document.getElementById('UserId').value;
	 timerStart();
}

function clearlocation(canvasID)
{
	var lc=document.getElementById(canvasID);
	var gc=lc.getContext("2d");
	gc.clearRect(0,0,1300,600);
}

function showuser(x,y,id,canvasID)
{	
	if (isShowHeatmap == true)
	{
		map.store.addDataPoint(x,y,1);
	}
	var lc=document.getElementById(canvasID);
	var gc=lc.getContext("2d");
	img=document.getElementById("userImage");
	gc.drawImage(img,x-12.5,y-12.5);
	gc.font="8px Arial";
	if (isShowMe == false)
	{
	gc.strokeText(id,x-13,y+20);
  }
  else
  {
  	var userName = "here";
  	gc.strokeText(userName,x-13,y+20);
  }
}

function showNavigation(posStr)
{
	clearlocation("navigationCanvas");
	var gc=navigationLayer.getContext("2d");
	gc.lineWidth="2";
	gc.strokeStyle="#006633";
	gc.beginPath();
	var str1 = posStr.split("|");
	var pos1 = str1[0];
	var pos1str = pos1.split(",");
	var pos1x = pos1str[0];
	var pos1y = pos1str[1];
	gc.moveTo(pos1x*ww+bl,pos1y*ww+bt);
	for (i=1;i<str1.length-1;i++)
	{
	var pos2 = str1[i];
	var pos2str = pos2.split(",");
	var pos2x = pos2str[0];
	var pos2y = pos2str[1];
	gc.lineTo(pos2x*ww+bl,pos2y*ww+bt);
	gc.moveTo(pos2x*ww+bl,pos2y*ww+bt);
  }
  gc.lineTo(navigationTargetX,navigationTargetY);
	//gc.moveTo(navigationTargetX,navigationTargetY);
	gc.closePath();
	setTarget();
	gc.stroke();
	
}
  
  function beginNavigation()
  {
  	isStopNavigation = 1;
  	clearlocation("navigationCanvas");
  	isSetTarget=1;	
  }	
  
  function stopNavigation()
  {
  	isSetTarget=0;
  	isStopNavigation = 1;
  	clearlocation("navigationCanvas");
  }	
  
  function setTarget()
	{

		clearlocation("navigationCanvas");
		var gc=navigationLayer.getContext("2d");
		var img=document.getElementById("navigationImage");
		gc.drawImage(img,navigationTargetX-12,navigationTargetY-46);
	}
  
  this.mousedown=function(ev)
	{
		if (isSetTarget==1)
		{
		 isSetTarget=0;

		 if(ev.layerX || ev.layerX == 0)
		 {
		 	  navigationTargetX = ev.layerX;
		 	  navigationTargetY = ev.layerY;
		 }
		 else if (ev.offsetX || ev.offsetX == 0)
		 	{
		 		navigationTargetX = ev.offsetX;
		 		navigationTargetY = ev.offsetY;
		 	}
		  isStopNavigation = 0;
		  
		}
		 
	}
	
	function SetNavigation(nx,ny)
	{
		navigationTargetX = nx;
		navigationTargetY = ny;
		isStopNavigation = 0;
	}
	
	function SendNavigation()
	{
		 try
		  {
         socket.send("Navigation:"+cmd+"|"+(navigationTargetX-bl)/ww+","+(navigationTargetY-bt)/ww);
         ifSend = 1;
      }catch(ex)
      {
         //alert("navigation is error");
      }
	}
	
	this.mousemove=function(ev)
	{
		if (isSetTarget==1)
		{
		 var mx,my;
		 if(ev.layerX || ev.layerX == 0)
		 {
		 	  navigationTargetX = ev.layerX;
		 	  navigationTargetY = ev.layerY;
		 }
		 else if (ev.offsetX || ev.offsetX == 0)
		 	{
		 		navigationTargetX = ev.offsetX;
		 		navigationTargetY = ev.offsetY;
		 	}
		 	setTarget();
		}
	}
	

	

        
