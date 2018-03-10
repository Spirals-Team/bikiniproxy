
	
	var menuDisplayHolder, menuKillHolder;
	var flagMenuSwitch,menuTimeout, iloop, jloop,counter,strMatchOnMenu;
	flagMenuSwitch="new";
	counter = 0;
	



//----------------------------------------------------------------------------------------------------------
//menuHandler() function, here is the main function, called from the mouseover event.
//we check for which elements are lit and work our two array's appropriately
//first kill the killMenu function call.
//
//it receives three parameters parentLIO, currentMenu, and childMenu.
//----------------------------------------------------------------------------------------------------------
function menuHandler(parentLIO,currentMenu,childMenu)
{
	
	
		var matchFlag;
		matchFlag=false;
	
		//kill menu killing function, we will check list and kill again soon.
		if(flagMenuSwitch=="off")
		{
			clearTimeout(menuTimeout);
		}
	
		
		//if flagMenuSwitch is "new" then assign base level stuff
		if(flagMenuSwitch=="new")
		{
			//assign base here
			menuDisplayHolder=currentMenu+","+childMenu;
			
			menuKillHolder=menuDisplayArray;	
		
		}//end flagMenuSwitch "new" check
		
		
		
		
		//if flagMenuSwitch is "off" then we got a hit (might be "on") depends on how good the handler is
		//here we do build the correct array's
		if(flagMenuSwitch == "off"||flagMenuSwitch=="on")
		{
		  	
			//menuDisplayHolder equals
			var menuDisplayArray,matchFlag;
			matchFlag=false;
			
			menuDisplayArray = menuDisplayHolder.split(",");
			
			
			
			
			//------------------------------------------------------------------------
			//fill menuKillHolder
			
			//loop and look for match
			for(iloop=0;iloop<menuDisplayArray.length-1;iloop++)
			{
				
				//match on current menu
				if(menuDisplayArray[iloop]==currentMenu)
				{
					
					
					
					//clear out menuKillHolder
					menuKillHolder="";
					
					
					//-----------------------------------------------
					//match on child menu
					if(menuDisplayArray[iloop+1]==childMenu)
					{
						//back fill menuKillHolder
						for(jloop = menuDisplayArray.length-1;jloop>(iloop+1);jloop--)
						{
							
							
							menuKillHolder = menuKillHolder +","+ menuDisplayArray[jloop]
						}//end back fill
						
						
					}//end found child menu match
					
					
					//--------------------------------------------
					//no match on child menu
					else
					{
						//back fill menuKillHolder
						for(jloop = menuDisplayArray.length-1;jloop>iloop;jloop--)
						{
							
							
							menuKillHolder = menuKillHolder +","+ menuDisplayArray[jloop];
						}//end back fill
					
					}//end no child menu match found
				
				}//end found match on current menu
				
				
				//if there is no match on the current menu then we don't need to touch the 
				//menuKillHolder as it means we are killing the whole shabang.
			
			}//end loop
			
			
			
			
			//---------------------------------------------------------------------
			//refill menuDisplayHolder
			
			//loop and look for match
			for(iloop=0;iloop<menuDisplayArray.length;iloop++)
			{
			
				
				//>>>>>>got match will travel
				if(menuDisplayArray[iloop]==currentMenu)
				{
					
					
					
					menuDisplayHolder="";
					matchFlag=true;
				
					//>>>>>match on current and child menu
					if(menuDisplayArray[iloop+1]==childMenu)
					{
						for(jloop = 0;jloop<=iloop+1;jloop++)
						{
							//add a coma if necessary
							if(menuDisplayHolder!="")menuDisplayHolder=menuDisplayHolder+",";
						
							menuDisplayHolder = menuDisplayHolder + menuDisplayArray[jloop];
						}//end build menuDisplayHolder with only current menu match
					}//end check for child menu match
					
					
					//>>>>>>match on only current menu
					else
					{
						for(jloop = 0;jloop<=iloop;jloop++)
						{
							//add a coma if necessary
							if(menuDisplayHolder!="")menuDisplayHolder=menuDisplayHolder+",";
							
							menuDisplayHolder = menuDisplayHolder + menuDisplayArray[jloop];
						}//end build menuDisplayHolder with only current menu match		
						
						//add child menu
						if(childMenu!=""||childMenu!="null")
						{
							//add a coma if necessary
							if(menuDisplayHolder!="")menuDisplayHolder=menuDisplayHolder+",";
						
							menuDisplayHolder=menuDisplayHolder+childMenu;
						}//end add new child menu
						
											
					}//end no match on child leg									
				}//end if check for current menu match
			}//loop end menuDisplayHolder building
			
			
			
			//>>>>>>check if we found a match
			//>>>>>>if not then fill with base and don't touch killMenuHolder
			if(matchFlag==false)
			{
				//assign base here
				menuDisplayHolder=currentMenu+","+childMenu;
				
			}			
			
			
			
		}//end flagMenuSwitch "on/off" check
		
		
	
	
	//------------------------------------------------------------------
	//finish out the routines: kill, light, set var's
	
	//kill it if we need to
	if(flagMenuSwitch!="new")
	{
		killMenu("notAll");
		
	}
	
	//send the light order
	lightMenu();
		
	//set flag
	flagMenuSwitch="on";
	
	menuKillHolder=menuDisplayHolder;	
	
}//end menuHandler() function









//-----------------------------------------------------------------------------
//lightMenu() function fires up the correct menu's depending on 
//the two elements passed. Light up the whole array
//-----------------------------------------------------------------------------
function lightMenu()
{
	//alert("in lightMenu");
	var menuDisplayArray;
	
	menuDisplayArray=menuDisplayHolder.split(",");
	
	//we start at 1 because the zero'th element should be the root
	for(iloop = 1;iloop<menuDisplayArray.length;iloop++)
	{
			//check for null child
			if(menuDisplayArray[iloop]!="null")
			{
				//alert(menuDisplayArray[iloop]);
				if(eval("document.getElementById('"+menuDisplayArray[iloop]+"')")){
					eval("document.getElementById('"+menuDisplayArray[iloop]+"').style.visibility='visible';");
					
				}
			}//end check for "null" child menu
		
	}//end loop
}//end lightMenu() function




	
	
	
	
	
	
	
	
//-------------------------------------------------------------------------------------------------------------------------------
//this function initiallizes the kill menu function, if there are no mouseover events then it kills all menus
//-------------------------------------------------------------------------------------------------------------------------------
function hideMenu()
{
		
		//set a timeout and then kill all the menu's
		//we will check in menuHandler() to see if some stay lit.
		menuTimeout= setTimeout("killMenu('all');",800);
		
		flagMenuSwitch="off";
		
}//end hideMenu() function
	
	
	
	
	
	
	
	
	
	
//----------------------------------------------------------------------------------------------
//kill appropriate menu's, if we are getting here via the hideMenu() funciton
//then kill all the menu's this is known from the passed value 'apocolypse'
//----------------------------------------------------------------------------------------------
function killMenu(apocolypse)
{
	if(apocolypse=="all")menuKillHolder=menuDisplayHolder;
	
	
	var menuKillArray = menuKillHolder.split(",");

	//loop and kill
	//we start at 1 because the zero'th element should be the root
	for(iloop=1;iloop<menuKillArray.length;iloop++)
	{
				if(menuKillArray[iloop]!="null")
				{
					if(eval("document.getElementById('"+menuKillArray[iloop]+"')")){
						eval("document.getElementById('"+menuKillArray[iloop]+"').style.visibility='hidden';");
					}
				}
	}//end loop
	
	//if we are completely out, clear both array's and set flag to new
	if(apocolypse=="all")
	{
		menuDisplayHolder = "";
		menuKillHolder = "";
		flagMenuSwitch = "new";
	}
	
}//end kill menu function
	
	
	
	
	
	
	
	
//capture the click method and navigate to location
function goBabyGo(goString)
{
	window.location.href= goString;
}
