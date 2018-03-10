function NO_launchAVConsoleStory(storyid)
{
	if(bbcV2Tst())
	{
		consoleurl = "http://www.bbc.co.uk/mediaselector/check/nolavconsole/ukfs_news/hi?redirect=fs.stm&news=1&bbram=1&bbwm=1&nbram=1&nbwm=1&nol_storyid=" + storyid;
		clickmain=window.open(consoleurl,"console","toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=0,width=681,height=527");
	}
	else
	{
		self.location.href="http://news.bbc.co.uk/1/hi/help/3662494.stm";
	}
}

function NO_launchAVConsoleV3(section)
{
	if(bbcV2Tst())
	{	
		var url = "http://www.bbc.co.uk/mediaselector/check/nolavconsole/ukfs_news/hi?redirect=fs.stm&bbram=1&bbwm=1&nbram=1&nbwm=1&news=1";	
		if (section)
		{
			url = url + "&nol_index=" + section;
		}
		clickmain=window.open(url,"console","toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=0,width=681,height=527");
		var i = new Image(1,1); i.src="http://stats.bbc.co.uk/o.gif?~RS~s~RS~News~RS~t~RS~HighWeb_Ignore~RS~i~RS~0~RS~p~RS~0~RS~u~RS~http://news.bbc.co.uk/1/hi/help/3681938.stm~RS~r~RS~" + document.location + "~RS~a~RS~Domestic~RS~q~RS~-~RS~z~RS~0";
	}
	else
	{
		self.location.href="http://news.bbc.co.uk/1/hi/help/3662494.stm";
	}return false;
}

function NO_launchAVConsoleV3Banner(section)
{
	if(bbcV2Tst())
	{	
		var url = "http://www.bbc.co.uk/go/newsbanner/int/ukfs/avplayer/-/mediaselector/check/nolavconsole/ukfs_news/hi?redirect=fs.stm&bbram=1&bbwm=1&nbram=1&nbwm=1&news=1";	
		if (section)
		{
			url = url + "&nol_index=" + section;
		}
		clickmain=window.open(url,"console","toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=0,width=681,height=527");
	}
	else
	{
		self.location.href="http://news.bbc.co.uk/go/newsbanner/int/ukfs/noV2Tst/-/1/hi/help/3662494.stm";
	}
}