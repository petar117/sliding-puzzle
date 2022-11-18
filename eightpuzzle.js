
   var count;
   var reset = document.getElementById("#reset");
   var easyBtn = document.querySelector("#easyBtn");
   var hardBtn = document.querySelector("#hardBtn");

   
   var gameArray=new Array();
   gameArray[1]="1.JPG";
   gameArray[2]="2.JPG";
   gameArray[3]="3.JPG";
   gameArray[4]="4.JPG";
   gameArray[5]="5.JPG";
   gameArray[6]="6.JPG";
   gameArray[7]="7.JPG";
   gameArray[8]="8.JPG";
   gameArray[9]="blank.JPG";
   
   var tiles=new Array();
   for(var i=1;i<=9;i++)
   tiles[i]=gameArray[i];


   
   function  themeNumbers()
   {
		gameArray[1]="1.JPG";
		gameArray[2]="2.JPG";
		gameArray[3]="3.JPG";
		gameArray[4]="4.JPG";
		gameArray[5]="5.JPG";
		gameArray[6]="6.JPG";
		gameArray[7]="7.JPG";
		gameArray[8]="8.JPG";
		gameArray[9]="blank.JPG";
	   
	   for(var i=1;i<=9;i++)
	   tiles[i]=gameArray[i];
		    count=0;
	          
	           var b=new Array();
			   for(var i=1;i<=9;i++)
			      b[i]=0;
				 for(var i=1;i<=9;)
				 {
				     var v=Math.floor(Math.random()*9+1);
					 if(b[v]==0)
					 {
					     gameArray[v]=tiles[i];
                          i++;	
                            b[v]=1;						  
					 }
				 }
				 
				 
				 for(var i=1;i<=9;i++)
				 {
				    var random="im"+i;
                
                document.getElementById(random).src=gameArray[i];
                
				 }
				 for(var i=1;i<=9;i++)
				 {
				    var stil="iim"+i;
                
                document.getElementById(stil).src=tiles[i];
				 }
		   
		   
	}
/*		hardBtn.addEventListener("click", function(){
		hardBtn.classList.add("selected");
		easyBtn.classList.remove("selected");
	}*/

	 function  themeImage()
   {
		gameArray[1]="01.JPG";
		gameArray[2]="02.JPG";
		gameArray[3]="03.JPG";
		gameArray[4]="04.JPG";
		gameArray[5]="05.JPG";
		gameArray[6]="06.JPG";
		gameArray[7]="07.JPG";
		gameArray[8]="08.JPG";
		gameArray[9]="blank.JPG";
	   
	   for(var i=1;i<=9;i++)
	   tiles[i]=gameArray[i];
		    count=0;
	          
	           var b=new Array();
			   for(var i=1;i<=9;i++)
			      b[i]=0;
				 for(var i=1;i<=9;)
				 {
				     var v=Math.floor(Math.random()*9+1);
					 if(b[v]==0)
					 {
					     gameArray[v]=tiles[i];
                          i++;	
                            b[v]=1;						  
					 }
				 }
				 
				 
				 for(var i=1;i<=9;i++)
				 {
				    var random="im"+i;
                
                document.getElementById(random).src=gameArray[i];
                
				 }
				 for(var i=1;i<=9;i++)
				 {
				    var stil="iim"+i;
                
                document.getElementById(stil).src=tiles[i];
				 }
		   
		   
	}



	/*	easyBtn.addEventListener("click", function(){
		hardBtn.classList.remove("selected");
		easyBtn.classList.add("selected");
	};*/

   function on()
   {       count=0;
		  
		   var b=new Array();
		   for(var i=1;i<=9;i++)
			  b[i]=0;
			 for(var i=1;i<=9;)
			 {
				 var v=Math.floor(Math.random()*9+1);
				 if(b[v]==0)
				 {
					 gameArray[v]=tiles[i];
					  i++;	
						b[v]=1;						  
				 }
			 }
			 
			 
			 for(var i=1;i<=9;i++)
			 {
				var random="im"+i;
			
			document.getElementById(random).src=gameArray[i];
			
			 }

			 for(var i=1;i<=9;i++)
			 {
				var stil="iim"+i;
			
			document.getElementById(stil).src=tiles[i];
			
			 }

		}
	   
	   
   function imageClicked(imageId,imageNumber)
	{
		var selectedImageSrc=gameArray[imageNumber];
		
		if(selectedImageSrc=="blank.JPG")
		{
		   // document.getElementById("error").innerText="Blank Can't Move";
		   alert("Can't Move");
		}
		
		else
		{            
			
			var index=0; 
			
			for(var i=1;i<=9;i++)
			{
				if(gameArray[i]=="blank.JPG")
				{
					index=i;
					break;                        
				}
			}
			
			
		
			
			if(gameArray[imageNumber+1]==gameArray[index] || gameArray[imageNumber-1]==gameArray[index] || gameArray[imageNumber+3]==gameArray[index] || gameArray[imageNumber-3]==gameArray[index])
			{
				//document.getElementById("error").innerText="";
				
			var destImageId="im"+index;
			
			document.getElementById(destImageId).src=selectedImageSrc;
			document.getElementById(imageId).src="blank.JPG";
			
			gameArray[imageNumber]="blank.JPG";
			gameArray[index]=selectedImageSrc;
			count++;
			if(document.getElementById('reset').clicked == true) {
					count=0;
			}

			document.getElementById("error").innerText="Total Moves : "+count;

		   } 
		else
		{
			//document.getElementById("error").innerText="Wrong Movement";
			alert("Wrong Movement");
		}
	  
		   var temp=0;			   
		   for(var i=1;i<=9;i++)
		   {
			  if(gameArray[i]!=tiles[i]){
			  temp=1;
			  break;
			  }
		   }
		   if(temp==0){
				window.location="winnerpage.html";	
		   }
		
		}
	}       
      