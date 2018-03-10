function upm_pop_img(src, w, h, name, title)
{
	var ww = parseInt(w);
	var wh = parseInt(h);

	if (ww < 100)
	{
		ww = 125;
	}

	if (wh < 100)
	{
		wh = 125;

		ww += 75;
	}

	var scroll = false;

	if (screen.width && (screen.width < ww))
	{
		scroll = 'yes';
		ww = screen.width;
	}

	if (screen.height && (screen.height < wh))
	{
		scroll = 'yes';
		wh = screen.height;
	}

	if (!title)
	{
		title = name;
	}

	var t = (screen.height) ? (screen.height - wh) / 2 : 0;
	var l = (screen.width) ? (screen.width - ww) / 2 : 0;

	var upm_pop_win = window.open('', 'upm_pop_win', 'top = '+t+', left = '+l+', width = '+ww+', height = '+wh+', toolbar = no, location = no, directories = no, status = no, menubar = no, scrollbars = '+scroll+', copyhistory = no, resizable = yes');

	upm_pop_win.document.writeln('<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">');
	upm_pop_win.document.writeln('<html>');
	upm_pop_win.document.writeln('<head>');
	upm_pop_win.document.writeln('<meta http-equiv="Content-Type" content="text/html; charset=utf-8">');
	upm_pop_win.document.writeln('<meta http-equiv="imagetoolbar" content="no">');
	upm_pop_win.document.writeln('<title>'+title+'</title>');
	upm_pop_win.document.writeln('<style type="text/css">');
	upm_pop_win.document.writeln('<!--');
	upm_pop_win.document.writeln('body {');
	upm_pop_win.document.writeln('margin: 0;');
	upm_pop_win.document.writeln('padding: 0;');
	upm_pop_win.document.writeln('color: #000;');
	upm_pop_win.document.writeln('background-color: #fff;');
	upm_pop_win.document.writeln('text-align: center;');

	if (scroll == false)
	{
		upm_pop_win.document.writeln('overflow: hidden;');
	}

	upm_pop_win.document.writeln('}');

	upm_pop_win.document.writeln('');
	upm_pop_win.document.writeln('img {');
	upm_pop_win.document.writeln('margin: 0 auto;');
	upm_pop_win.document.writeln('padding: 0;');
	upm_pop_win.document.writeln('border: none;');

	if (wh == 125)
	{
		upm_pop_win.document.writeln('margin-top: ' + Math.floor(50-(h/2)) + 'px;');
	}

	upm_pop_win.document.writeln('}');

	upm_pop_win.document.writeln('-->');
	upm_pop_win.document.writeln('</style>');
	upm_pop_win.document.writeln('</head>');
	upm_pop_win.document.writeln('<body>');
	upm_pop_win.document.writeln('<div id="upm-image-view">');
	upm_pop_win.document.writeln('<img src="'+src+'" width="'+w+'" height="'+h+'" alt="">');
	upm_pop_win.document.writeln('</div>');
	upm_pop_win.document.writeln('</body>');
	upm_pop_win.document.write('</html>');

	upm_pop_win.document.close();

	upm_pop_win.focus();

	return false;
}