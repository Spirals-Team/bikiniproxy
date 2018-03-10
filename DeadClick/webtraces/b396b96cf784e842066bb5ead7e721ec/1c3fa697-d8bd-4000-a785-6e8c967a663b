function SaveAnalyticData(item0, item1, item2) 
{
	var xml = "";	
	var url = new String();
	var Res = ParseBrowserValues();
	
    xml += "<params>\n";
    xml += "	<action>TrackWebAnalyticData</action>";
    xml += "	<id>" + item0 + "</id>\n";
    xml += "	<xid>" + item1 + "</xid>\n";
    xml += "	<definitionid>" + item2 + "</definitionid>\n";
	xml += "	<screenwidth>" + Res.Width + "</screenwidth>\n";
	xml += "	<screenheight>" + Res.Height + "</screenheight>\n";
    xml += "</params>";

	url = (absoluteBaseUrl + "TrackingAjax.aspx");
		
	var params = { contentType:"text/plain", url:url, onSuccess: onSaveSuccess, onFailure:onSaveFailure, payload:xml };
	var request = new HttpRequest(params);
}

function ParseBrowserValues()
{
    var width = 0;
    var height = 0;

    if (self.screen) 
    {   
            width = screen.width
            height = screen.height
    }
    else if (self.java) 
    { 
           var jkit = java.awt.Toolkit.getDefaultToolkit();
           var scrsize = jkit.getScreenSize();       
           width = scrsize.width; 
           height = scrsize.height; 
    }
    else
    {
        width = height = 0 
    }

   return { Width: width, Height: height };  
}

function onSaveSuccess(result){}

function onSaveFailure(res) {}