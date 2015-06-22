function backgroudlayer()
{
	
	var lc=document.getElementById("backGroundCanvas");
	var gc=lc.getContext("2d");
	img=document.getElementById("backgroundImage");
	gc.drawImage(img,40,20);
	/*var c=document.getElementById("backGroundCanvas");
	var g=c.getContext("2d");
	
	g.lineWidth="2";
	g.rect(bl,bt,w,h);
	
	g.moveTo(bl,3.45/17.09*h+bt);
	g.lineTo(4.58/6.36*w+bl,3.45/17.09*h+bt);
	g.stroke();
	
	g.lineWidth="1";
	
	//two risers
	g.rect(5.48/6.36*w+bl,bt,w-(5.48/6.36*w),1.71/17.09*h);
	g.rect(5.48/6.36*w+bl,14.98/17.09*h+bt,w-5.48/6.36*w,h-14.98/17.09*h);

			//conference door
	g.moveTo(4.58/6.36*w+bl,3.45/17.09*h+bt);
	g.lineTo(4.58/6.36*w+bl,4.09/17.09*h+bt);
	g.moveTo(6.07/6.36*w+bl,3.45/17.09*h+bt);
	g.lineTo(6.07/6.36*w+bl,4.09/17.09*h+bt);
	g.moveTo(6.07/6.36*w+bl,3.45/17.09*h+bt);
	g.lineTo(w+bl,3.45/17.09*h+bt);

			//left main door
	g.moveTo(bl,7.27/17.09*h+bt);
	g.lineTo(0.36/6.36*w+bl,7.27/17.09*h+bt);
	g.moveTo(bl,8.7/17.09*h+bt);
	g.lineTo(0.36/6.36*w+bl,8.7/17.09*h+bt);

			//right main door
	g.moveTo(6.01/6.36*w+bl,7.27/17.09*h+bt);
	g.lineTo(w+bl,7.27/17.09*h+bt);
	g.moveTo(6.01/6.36*w+bl,8.7/17.09*h+bt);
	g.lineTo(w+bl,8.7/17.09*h+bt);


	bt =bt +11.5;
			//cubies row 1
	g.rect(bl,5.24/17.09*h+bt,4.9/6.36*w,6.2/17.09*h-5.24/17.09*h);
	g.moveTo(1.63/6.36*w+bl,5.24/17.09*h+bt);
	g.lineTo(1.63/6.36*w+bl,6.2/17.09*h+bt);
	g.moveTo(3.26/6.36*w+bl,5.24/17.09*h+bt);
	g.lineTo(3.26/6.36*w+bl,6.2/17.09*h+bt);

			//cubies row 2
	g.rect(1/6.36*w+bl,8.7/17.09*h+bt,w-1/6.36*w,9.65/17.09*h-8.7/17.09*h);
	g.moveTo(2.83/6.36*w+bl,8.7/17.09*h+bt);
	g.lineTo(2.83/6.36*w+bl,9.65/17.09*h+bt);
	g.moveTo(4.66/6.36*w+bl,8.7/17.09*h+bt);
	g.lineTo(4.66/6.36*w+bl,9.65/17.09*h+bt);

			//cubies row 3
	g.rect(1/6.36*w+bl,10.8/17.09*h+bt,w-1/6.36*w,12.5/17.09*h-10.8/17.09*h);
	g.moveTo(2.83/6.36*w+bl,10.8/17.09*h+bt);
	g.lineTo(2.83/6.36*w+bl,12.5/17.09*h+bt);
	g.moveTo(4.66/6.36*w+bl,10.8/17.09*h+bt);
	g.lineTo(4.66/6.36*w+bl,12.5/17.09*h+bt);
	g.moveTo(1/6.36*w+bl,11.65/17.09*h+bt);
	g.lineTo(w+bl,11.65/17.09*h+bt);

			//cubies row 4
	g.rect(1/6.36*w+bl,13.8/17.09*h+bt,4.66/6.36*w-1/6.36*w,15.5/17.09*h-13.8/17.09*h);
	g.moveTo(2.83/6.36*w+bl,13.8/17.09*h+bt);
	g.lineTo(2.83/6.36*w+bl,15.5/17.09*h+bt);
	g.moveTo(1/6.36*w+bl,14.65/17.09*h+bt);
	g.lineTo(4.66/6.36*w+bl,14.65/17.09*h+bt);
	g.rect(4.66/6.36*w+bl,13.8/17.09*h+bt,6.49/6.36*w-4.66/6.36*w-6,14.65/17.09*h-13.8/17.09*h);
	g.stroke();*/
}