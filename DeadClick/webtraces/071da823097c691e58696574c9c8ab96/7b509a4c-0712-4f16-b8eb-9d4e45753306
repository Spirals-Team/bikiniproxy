var colwizOptions = {
  darkLogoURL : 'https://cdn.colwiz.com/static/images/webpdf/logo/tf_w.png',
  lightLogoURL : 'https://cdn.colwiz.com/static/images/webpdf/logo/tf_c.png',
  theme: 'dark',
  buttonBackground: '#888888',
  showAddToColwiz: true,
  appId: '34000f34a146a2017e2b5acad48d6b07',
  issn: '0000-0000'
};
var publisher = {
    name: "taylor and francis",
    appIds: {
        stage: 'e4705a17747c66f1a7426b87379ebc4a',
        production: '34000f34a146a2017e2b5acad48d6b07'
    },
    logoUrl: '/images/webpdf/logo/tflogo.png',
	logoClass: 'tf-logo',
    pubModeBtnsTxt: {
        view: "View & annotate PDF",
        add: "Add to colwiz Library",
        viewHover: "Read, annotate and save this article using the colwiz Interactive PDF Reader",
        addHover: "Save this article to your colwiz library to read and reference anywhere"
    },
    readerOptions: {
        sideBarVisible: false,
        tools:{
            dragPage: true,
            textSelection: true,
            drawHighlight: true,
            eraser: true,
            pencil: true,
            rectangle: true,
            ellipse: true,
            arrow: true,
            line: true,
            comments: true,
            download: true
        },
        fullScreenMode: true,
        searchBarVisible: true,
        addToLibraryShow: true,
        referenceTabShow : true,
        shareTabShow : true,
        citeTabShow : true,
        readerSamePage: true,
        showSuppMaterial: true,
        showClosedAccessmessage:true,
        relatedTabShow: true,
		mobileModeEnable: false
    },
    id: 'tandf',
    buttonStyle: "popup",
    showAddButton: false
};
window.publisher = publisher;
(function() {
  var crs = document.createElement('script');
  crs.type = 'text/javascript';
  crs.async = true;
  var ts = new Date().valueOf()/1000;
  ts = ts - (ts % 86400) ;
  crs.src = 'https://www.colwiz.com/js/webpdf/ireader.js?ts='+ts;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(crs, s);
})();
