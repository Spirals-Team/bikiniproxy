/**
 *
 *  Base64 encode / decode
 *  http://www.webtoolkit.info/
 *
 **/
var Base64 = {_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode: function(c) {
    try {
        var a = "";
        var k, h, f, j, g, e, d;
        var b = 0;
        c = Base64._utf8_encode(c);
        while (b < c.length) {
            k = c.charCodeAt(b++);
            h = c.charCodeAt(b++);
            f = c.charCodeAt(b++);
            j = k >> 2;
            g = ((k & 3) << 4) | (h >> 4);
            e = ((h & 15) << 2) | (f >> 6);
            d = f & 63;
            if (isNaN(h)) {
                e = d = 64
            } else {
                if (isNaN(f)) {
                    d = 64
                }
            }
            a = a + this._keyStr.charAt(j) + this._keyStr.charAt(g) + this._keyStr.charAt(e) + this._keyStr.charAt(d)
        }
        return a
    } catch (e) {
        return "";
    }
}, decode: function(c) {
    var a = "";
    var k, h, f;
    var j, g, e, d;
    var b = 0;
    c = c.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (b < c.length) {
        j = this._keyStr.indexOf(c.charAt(b++));
        g = this._keyStr.indexOf(c.charAt(b++));
        e = this._keyStr.indexOf(c.charAt(b++));
        d = this._keyStr.indexOf(c.charAt(b++));
        k = (j << 2) | (g >> 4);
        h = ((g & 15) << 4) | (e >> 2);
        f = ((e & 3) << 6) | d;
        a = a + String.fromCharCode(k);
        if (e != 64) {
            a = a + String.fromCharCode(h)
        }
        if (d != 64) {
            a = a + String.fromCharCode(f)
        }
    }
    a = Base64._utf8_decode(a);
    return a
}, _utf8_encode: function(b) {
    b = b.replace(/\r\n/g, "\n");
    var a = "";
    for (var e = 0; e < b.length; e++) {
        var d = b.charCodeAt(e);
        if (d < 128) {
            a += String.fromCharCode(d)
        } else {
            if ((d > 127) && (d < 2048)) {
                a += String.fromCharCode((d >> 6) | 192);
                a += String.fromCharCode((d & 63) | 128)
            } else {
                a += String.fromCharCode((d >> 12) | 224);
                a += String.fromCharCode(((d >> 6) & 63) | 128);
                a += String.fromCharCode((d & 63) | 128)
            }
        }
    }
    return a
}, _utf8_decode: function(a) {
    var b = "";
    var d = 0;
    var e = c1 = c2 = 0;
    while (d < a.length) {
        e = a.charCodeAt(d);
        if (e < 128) {
            b += String.fromCharCode(e);
            d++
        } else {
            if ((e > 191) && (e < 224)) {
                c2 = a.charCodeAt(d + 1);
                b += String.fromCharCode(((e & 31) << 6) | (c2 & 63));
                d += 2
            } else {
                c2 = a.charCodeAt(d + 1);
                c3 = a.charCodeAt(d + 2);
                b += String.fromCharCode(((e & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                d += 3
            }
        }
    }
    return b
}};

var abbreviations = {"default": {"container-title": {"Pacific Rim Law & Policy Journal": "Pac. Rim L. & Pol\u2019y J.", "\u65e5\u672c\u6559\u80b2\u5de5\u5b66\u4f1a\u8ad6\u6587\u8a8c": "\u65e5\u6559\u8ad6\u8a8c", "Journal of the Japan Educational Engineering Society": "J. Japan Educ. Engineering Soc.", "Applied and Environmental Microbiology": "Applied and Environmental Microbiology"}, "collection-title": {"International Rescue Wildlife Series": "I.R. Wildlife Series"}, "authority": {"United Nations": "U.N."}, "institution": {"U.S. Bureau of the Census": "U.S. Bureau of the Census"}, "title": {}, "classic": {}, "hereinafter": {}, "nickname": {}, "place": {}}, "slightly_weird": {"container-title": {"Pacific Rim Law & Policy Journal": "PRL & PJ", "\u65e5\u672c\u6559\u80b2\u5de5\u5b66\u4f1a\u8ad6\u6587\u8a8c": "\u65e5\u6559\u8ad6", "Journal of the Japan Educational Engineering Society": "J. Japan Educ. Eng. Soc.", "Applied and Environmental Microbiology": "Appl'd. & Env'tal Microbio."}, "collection-title": {"International Rescue Wildlife Series": "I.R. Wildlife Series"}, "authority": {"United Nations": "U.N."}, "institution": {"U.S. Bureau of the Census": "U.S. Census Bureau"}, "title": {}, "classic": {}, "hereinafter": {}, "nickname": {}, "place": {}}};

// en-US locale used previously it works when locale is other then en-US
// but it fails on citing books, with chicago style,
// to-do: add csl-locale project
var OLD_LOCALE = "<locale xml:lang=\"en\" xmlns=\"http://purl.org/net/xbiblio/csl\">  <style-options punctuation-in-quote=\"true\"/>  <date form=\"text\">    <date-part name=\"month\" suffix=\" \"/>    <date-part name=\"day\" suffix=\", \"/>    <date-part name=\"year\"/>  </date>  <date form=\"numeric\">    <date-part name=\"year\"/>    <date-part name=\"month\" form=\"numeric\" prefix=\"-\" range-delimiter=\"/\"/>    <date-part name=\"day\" prefix=\"-\" range-delimiter=\"/\"/>  </date>  <terms>    <term name=\"document-number-label\">No.</term>    <term name=\"document-number-authority-suffix\">Doc.</term>    <term name=\"un-sales-number-label\">U.N. Sales No.</term>    <term name=\"collection-number-label\">No.</term>    <term name=\"open-quote\">\u201c</term>    <term name=\"close-quote\">\u201d</term>    <term name=\"open-inner-quote\">\u2018</term>    <term name=\"close-inner-quote\">\u2019</term>    <term name=\"ordinal-01\">st</term>    <term name=\"ordinal-02\">nd</term>    <term name=\"ordinal-03\">rd</term>    <term name=\"ordinal-04\">th</term>    <term name=\"long-ordinal-01\">first</term>    <term name=\"long-ordinal-02\">second</term>    <term name=\"long-ordinal-03\">third</term>    <term name=\"long-ordinal-04\">fourth</term>    <term name=\"long-ordinal-05\">fifth</term>    <term name=\"long-ordinal-06\">sixth</term>    <term name=\"long-ordinal-07\">seventh</term>    <term name=\"long-ordinal-08\">eighth</term>    <term name=\"long-ordinal-09\">ninth</term>    <term name=\"long-ordinal-10\">tenth</term>    <term name=\"at\">at</term>    <term name=\"in\">in</term>    <term name=\"ibid\">ibid</term>    <term name=\"accessed\">accessed</term>    <term name=\"retrieved\">retrieved</term>    <term name=\"from\">from</term>    <term name=\"forthcoming\">forthcoming</term>    <term name=\"references\">      <single>reference</single>      <multiple>references</multiple>    </term>    <term name=\"references\" form=\"short\">      <single>ref</single>      <multiple>refs</multiple>    </term>    <term name=\"no date\">n.d.</term>    <term name=\"and\">and</term>    <term name=\"et-al\">et al.</term>    <term name=\"interview\">interview</term>    <term name=\"letter\">letter</term>    <term name=\"anonymous\">anonymous</term>    <term name=\"anonymous\" form=\"short\">anon.</term>    <term name=\"and others\">and others</term>    <term name=\"in press\">in press</term>    <term name=\"online\">online</term>    <term name=\"cited\">cited</term>    <term name=\"internet\">internet</term>    <term name=\"presented at\">presented at the</term>    <term name=\"ad\">AD</term>    <term name=\"bc\">BC</term>    <term name=\"season-01\">Spring</term>    <term name=\"season-02\">Summer</term>    <term name=\"season-03\">Autumn</term>    <term name=\"season-04\">Winter</term>    <term name=\"with\">with</term>        <!-- CATEGORIES -->    <term name=\"anthropology\">anthropology</term>    <term name=\"astronomy\">astronomy</term>    <term name=\"biology\">biology</term>    <term name=\"botany\">botany</term>    <term name=\"chemistry\">chemistry</term>    <term name=\"engineering\">engineering</term>    <term name=\"generic-base\">generic base</term>    <term name=\"geography\">geography</term>    <term name=\"geology\">geology</term>    <term name=\"history\">history</term>    <term name=\"humanities\">humanities</term>    <term name=\"literature\">literature</term>    <term name=\"math\">math</term>    <term name=\"medicine\">medicine</term>    <term name=\"philosophy\">philosophy</term>    <term name=\"physics\">physics</term>    <term name=\"psychology\">psychology</term>    <term name=\"sociology\">sociology</term>    <term name=\"science\">science</term>    <term name=\"political_science\">political science</term>    <term name=\"social_science\">social science</term>    <term name=\"theology\">theology</term>    <term name=\"zoology\">zoology</term>        <!-- LONG LOCATOR FORMS -->    <term name=\"book\">      <single>book</single>      <multiple>books</multiple>    </term>    <term name=\"chapter\">      <single>chapter</single>      <multiple>chapters</multiple>    </term>    <term name=\"column\">      <single>column</single>      <multiple>columns</multiple>    </term>    <term name=\"figure\">      <single>figure</single>      <multiple>figures</multiple>    </term>    <term name=\"folio\">      <single>folio</single>      <multiple>folios</multiple>    </term>    <term name=\"issue\">      <single>number</single>      <multiple>numbers</multiple>    </term>    <term name=\"line\">      <single>line</single>      <multiple>lines</multiple>    </term>    <term name=\"note\">      <single>note</single>      <multiple>notes</multiple>    </term>    <term name=\"opus\">      <single>opus</single>      <multiple>opera</multiple>    </term>    <term name=\"page\">      <single>page</single>      <multiple>pages</multiple>    </term>    <term name=\"paragraph\">      <single>paragraph</single>      <multiple>paragraph</multiple>    </term>    <term name=\"part\">      <single>part</single>      <multiple>parts</multiple>    </term>    <term name=\"section\">      <single>section</single>      <multiple>sections</multiple>    </term>    <term name=\"volume\">      <single>volume</single>      <multiple>volumes</multiple>    </term>    <term name=\"edition\">      <single>edition</single>      <multiple>editions</multiple>    </term>    <term name=\"verse\">      <single>verse</single>      <multiple>verses</multiple>    </term>    <term name=\"sub verbo\">      <single>sub verbo</single>      <multiple>s.vv</multiple>    </term>        <!-- SHORT LOCATOR FORMS -->    <term name=\"book\" form=\"short\">bk.</term>    <term name=\"chapter\" form=\"short\">chap.</term>    <term name=\"column\" form=\"short\">col.</term>    <term name=\"figure\" form=\"short\">fig.</term>    <term name=\"folio\" form=\"short\">f.</term>    <term name=\"issue\" form=\"short\">no.</term>    <term name=\"opus\" form=\"short\">op.</term>    <term name=\"page\" form=\"short\">      <single>p.</single>      <multiple>pp.</multiple>    </term>    <term name=\"paragraph\" form=\"short\">para.</term>    <term name=\"part\" form=\"short\">pt.</term>    <term name=\"section\" form=\"short\">sec.</term>    <term name=\"sub verbo\" form=\"short\">      <single>s.v.</single>      <multiple>s.vv.</multiple>    </term>    <term name=\"verse\" form=\"short\">      <single>v.</single>      <multiple>vv.</multiple>    </term>    <term name=\"volume\" form=\"short\">    	<single>vol.</single>    	<multiple>vols.</multiple>    </term>    <term name=\"edition\">edition</term>    <term name=\"edition\" form=\"short\">ed.</term>        <!-- SYMBOL LOCATOR FORMS -->    <term name=\"paragraph\" form=\"symbol\">      <single>¶</single>      <multiple>¶¶</multiple>    </term>    <term name=\"section\" form=\"symbol\">      <single>§</single>      <multiple>§§</multiple>    </term>        <!-- LONG ROLE FORMS -->    <term name=\"author\">      <single></single>      <multiple></multiple>    </term>    <term name=\"editor\">      <single>editor</single>      <multiple>editors</multiple>    </term>    <term name=\"translator\">      <single>translator</single>      <multiple>translators</multiple>    </term>        <!-- SHORT ROLE FORMS -->    <term name=\"author\" form=\"short\">      <single></single>      <multiple></multiple>    </term>    <term name=\"editor\" form=\"short\">      <single>ed.</single>      <multiple>eds.</multiple>    </term>    <term name=\"translator\" form=\"short\">      <single>tran.</single>      <multiple>trans.</multiple>    </term>        <!-- VERB ROLE FORMS -->    <term name=\"editor\" form=\"verb\">edited by</term>    <term name=\"translator\" form=\"verb\">translated by</term>    <term name=\"recipient\" form=\"verb\">to</term>    <term name=\"interviewer\" form=\"verb\">interview by</term>        <!-- SHORT VERB ROLE FORMS -->    <term name=\"editor\" form=\"verb-short\">ed.</term>    <term name=\"translator\" form=\"verb-short\">trans.</term>        <!-- LONG MONTH FORMS -->    <term name=\"month-01\">January</term>    <term name=\"month-02\">February</term>    <term name=\"month-03\">March</term>    <term name=\"month-04\">April</term>    <term name=\"month-05\">May</term>    <term name=\"month-06\">June</term>    <term name=\"month-07\">July</term>    <term name=\"month-08\">August</term>    <term name=\"month-09\">September</term>    <term name=\"month-10\">October</term>    <term name=\"month-11\">November</term>    <term name=\"month-12\">December</term>        <!-- SHORT MONTH FORMS -->    <term name=\"month-01\" form=\"short\">Jan.</term>    <term name=\"month-02\" form=\"short\">Feb.</term>    <term name=\"month-03\" form=\"short\">Mar.</term>    <term name=\"month-04\" form=\"short\">Apr.</term>	<term name=\"month-05\" form=\"short\">May</term>    <term name=\"month-06\" form=\"short\">Jun.</term>    <term name=\"month-07\" form=\"short\">Jul.</term>    <term name=\"month-08\" form=\"short\">Aug.</term>    <term name=\"month-09\" form=\"short\">Sep.</term>    <term name=\"month-10\" form=\"short\">Oct.</term>    <term name=\"month-11\" form=\"short\">Nov.</term>    <term name=\"month-12\" form=\"short\">Dec.</term>  </terms></locale>";

var LOCALE_STR = "<?xml version=\"1.0\" encoding=\"utf-8\"?><locale xmlns=\"http:\/\/purl.org\/net\/xbiblio\/csl\" version=\"1.0\" xml:lang=\"en-US\">  <info>    <rights license=\"http:\/\/creativecommons.org\/licenses\/by-sa\/3.0\/\">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License<\/rights>    <updated>2015-10-10T23:31:02+00:00<\/updated>  <\/info>  <style-options punctuation-in-quote=\"true\"\/>  <date form=\"text\">    <date-part name=\"month\" suffix=\" \"\/>    <date-part name=\"day\" suffix=\", \"\/>    <date-part name=\"year\"\/>  <\/date>  <date form=\"numeric\">    <date-part name=\"month\" form=\"numeric-leading-zeros\" suffix=\"\/\"\/>    <date-part name=\"day\" form=\"numeric-leading-zeros\" suffix=\"\/\"\/>    <date-part name=\"year\"\/>  <\/date>  <terms>    <term name=\"accessed\">accessed<\/term>    <term name=\"and\">and<\/term>    <term name=\"and others\">and others<\/term>    <term name=\"anonymous\">anonymous<\/term>    <term name=\"anonymous\" form=\"short\">anon.<\/term>    <term name=\"at\">at<\/term>    <term name=\"available at\">available at<\/term>    <term name=\"by\">by<\/term>    <term name=\"circa\">circa<\/term>    <term name=\"circa\" form=\"short\">c.<\/term>    <term name=\"cited\">cited<\/term>    <term name=\"edition\">      <single>edition<\/single>      <multiple>editions<\/multiple>    <\/term>    <term name=\"edition\" form=\"short\">ed.<\/term>    <term name=\"et-al\">et al.<\/term>    <term name=\"forthcoming\">forthcoming<\/term>    <term name=\"from\">from<\/term>    <term name=\"ibid\">ibid.<\/term>    <term name=\"in\">in<\/term>    <term name=\"in press\">in press<\/term>    <term name=\"internet\">internet<\/term>    <term name=\"interview\">interview<\/term>    <term name=\"letter\">letter<\/term>    <term name=\"no date\">no date<\/term>    <term name=\"no date\" form=\"short\">n.d.<\/term>    <term name=\"online\">online<\/term>    <term name=\"presented at\">presented at the<\/term>    <term name=\"reference\">      <single>reference<\/single>      <multiple>references<\/multiple>    <\/term>    <term name=\"reference\" form=\"short\">      <single>ref.<\/single>      <multiple>refs.<\/multiple>    <\/term>    <term name=\"retrieved\">retrieved<\/term>    <term name=\"scale\">scale<\/term>    <term name=\"version\">version<\/term>    <!'+'-- ANNO DOMINI; BEFORE CHRIST --'+'>    <term name=\"ad\">AD<\/term>    <term name=\"bc\">BC<\/term>    <!'+'-- PUNCTUATION --'+'>    <term name=\"open-quote\">“<\/term>    <term name=\"close-quote\">”<\/term>    <term name=\"open-inner-quote\">‘<\/term>    <term name=\"close-inner-quote\">’<\/term>    <term name=\"page-range-delimiter\">–<\/term>    <!'+'-- ORDINALS --'+'>    <term name=\"ordinal\">th<\/term>    <term name=\"ordinal-01\">st<\/term>    <term name=\"ordinal-02\">nd<\/term>    <term name=\"ordinal-03\">rd<\/term>    <term name=\"ordinal-11\">th<\/term>    <term name=\"ordinal-12\">th<\/term>    <term name=\"ordinal-13\">th<\/term>    <!'+'-- LONG ORDINALS --'+'>    <term name=\"long-ordinal-01\">first<\/term>    <term name=\"long-ordinal-02\">second<\/term>    <term name=\"long-ordinal-03\">third<\/term>    <term name=\"long-ordinal-04\">fourth<\/term>    <term name=\"long-ordinal-05\">fifth<\/term>    <term name=\"long-ordinal-06\">sixth<\/term>    <term name=\"long-ordinal-07\">seventh<\/term>    <term name=\"long-ordinal-08\">eighth<\/term>    <term name=\"long-ordinal-09\">ninth<\/term>    <term name=\"long-ordinal-10\">tenth<\/term>    <!'+'-- LONG LOCATOR FORMS --'+'>    <term name=\"book\">      <single>book<\/single>      <multiple>books<\/multiple>    <\/term>    <term name=\"chapter\">      <single>chapter<\/single>      <multiple>chapters<\/multiple>    <\/term>    <term name=\"column\">      <single>column<\/single>      <multiple>columns<\/multiple>    <\/term>    <term name=\"figure\">      <single>figure<\/single>      <multiple>figures<\/multiple>    <\/term>    <term name=\"folio\">      <single>folio<\/single>      <multiple>folios<\/multiple>    <\/term>    <term name=\"issue\">      <single>number<\/single>      <multiple>numbers<\/multiple>    <\/term>    <term name=\"line\">      <single>line<\/single>      <multiple>lines<\/multiple>    <\/term>    <term name=\"note\">      <single>note<\/single>      <multiple>notes<\/multiple>    <\/term>    <term name=\"opus\">      <single>opus<\/single>      <multiple>opera<\/multiple>    <\/term>    <term name=\"page\">      <single>page<\/single>      <multiple>pages<\/multiple>    <\/term>    <term name=\"number-of-pages\">      <single>page<\/single>      <multiple>pages<\/multiple>    <\/term>    <term name=\"paragraph\">      <single>paragraph<\/single>      <multiple>paragraphs<\/multiple>    <\/term>    <term name=\"part\">      <single>part<\/single>      <multiple>parts<\/multiple>    <\/term>    <term name=\"section\">      <single>section<\/single>      <multiple>sections<\/multiple>    <\/term>    <term name=\"sub verbo\">      <single>sub verbo<\/single>      <multiple>sub verbis<\/multiple>    <\/term>    <term name=\"verse\">      <single>verse<\/single>      <multiple>verses<\/multiple>    <\/term>    <term name=\"volume\">      <single>volume<\/single>      <multiple>volumes<\/multiple>    <\/term>    <!'+'-- SHORT LOCATOR FORMS --'+'>    <term name=\"book\" form=\"short\">      <single>bk.<\/single>      <multiple>bks.<\/multiple>    <\/term>    <term name=\"chapter\" form=\"short\">      <single>chap.<\/single>      <multiple>chaps.<\/multiple>    <\/term>    <term name=\"column\" form=\"short\">      <single>col.<\/single>      <multiple>cols.<\/multiple>    <\/term>    <term name=\"figure\" form=\"short\">      <single>fig.<\/single>      <multiple>figs.<\/multiple>    <\/term>    <term name=\"folio\" form=\"short\">      <single>fol.<\/single>      <multiple>fols.<\/multiple>    <\/term>    <term name=\"issue\" form=\"short\">      <single>no.<\/single>      <multiple>nos.<\/multiple>    <\/term>    <term name=\"line\" form=\"short\">      <single>l.<\/single>      <multiple>ll.<\/multiple>    <\/term>    <term name=\"note\" form=\"short\">      <single>n.<\/single>      <multiple>nn.<\/multiple>    <\/term>    <term name=\"opus\" form=\"short\">      <single>op.<\/single>      <multiple>opp.<\/multiple>    <\/term>    <term name=\"page\" form=\"short\">      <single>p.<\/single>      <multiple>pp.<\/multiple>    <\/term>    <term name=\"number-of-pages\" form=\"short\">      <single>p.<\/single>      <multiple>pp.<\/multiple>    <\/term>    <term name=\"paragraph\" form=\"short\">      <single>para.<\/single>      <multiple>paras.<\/multiple>    <\/term>    <term name=\"part\" form=\"short\">      <single>pt.<\/single>      <multiple>pts.<\/multiple>    <\/term>    <term name=\"section\" form=\"short\">      <single>sec.<\/single>      <multiple>secs.<\/multiple>    <\/term>    <term name=\"sub verbo\" form=\"short\">      <single>s.v.<\/single>      <multiple>s.vv.<\/multiple>    <\/term>    <term name=\"verse\" form=\"short\">      <single>v.<\/single>      <multiple>vv.<\/multiple>    <\/term>    <term name=\"volume\" form=\"short\">      <single>vol.<\/single>      <multiple>vols.<\/multiple>    <\/term>    <!'+'-- SYMBOL LOCATOR FORMS --'+'>    <term name=\"paragraph\" form=\"symbol\">      <single>¶<\/single>      <multiple>¶¶<\/multiple>    <\/term>    <term name=\"section\" form=\"symbol\">      <single>§<\/single>      <multiple>§§<\/multiple>    <\/term>    <!'+'-- LONG ROLE FORMS --'+'>    <term name=\"director\">      <single>director<\/single>      <multiple>directors<\/multiple>    <\/term>    <term name=\"editor\">      <single>editor<\/single>      <multiple>editors<\/multiple>    <\/term>    <term name=\"editorial-director\">      <single>editor<\/single>      <multiple>editors<\/multiple>    <\/term>    <term name=\"illustrator\">      <single>illustrator<\/single>      <multiple>illustrators<\/multiple>    <\/term>    <term name=\"translator\">      <single>translator<\/single>      <multiple>translators<\/multiple>    <\/term>    <term name=\"editortranslator\">      <single>editor &amp; translator<\/single>      <multiple>editors &amp; translators<\/multiple>    <\/term>    <!'+'-- SHORT ROLE FORMS --'+'>    <term name=\"director\" form=\"short\">      <single>dir.<\/single>      <multiple>dirs.<\/multiple>    <\/term>    <term name=\"editor\" form=\"short\">      <single>ed.<\/single>      <multiple>eds.<\/multiple>    <\/term>    <term name=\"editorial-director\" form=\"short\">      <single>ed.<\/single>      <multiple>eds.<\/multiple>    <\/term>    <term name=\"illustrator\" form=\"short\">      <single>ill.<\/single>      <multiple>ills.<\/multiple>    <\/term>    <term name=\"translator\" form=\"short\">      <single>tran.<\/single>      <multiple>trans.<\/multiple>    <\/term>    <term name=\"editortranslator\" form=\"short\">      <single>ed. &amp; tran.<\/single>      <multiple>eds. &amp; trans.<\/multiple>    <\/term>    <!'+'-- VERB ROLE FORMS --'+'>    <term name=\"container-author\" form=\"verb\">by<\/term>    <term name=\"director\" form=\"verb\">directed by<\/term>    <term name=\"editor\" form=\"verb\">edited by<\/term>    <term name=\"editorial-director\" form=\"verb\">edited by<\/term>    <term name=\"illustrator\" form=\"verb\">illustrated by<\/term>    <term name=\"interviewer\" form=\"verb\">interview by<\/term>    <term name=\"recipient\" form=\"verb\">to<\/term>    <term name=\"reviewed-author\" form=\"verb\">by<\/term>    <term name=\"translator\" form=\"verb\">translated by<\/term>    <term name=\"editortranslator\" form=\"verb\">edited &amp; translated by<\/term>    <!'+'-- SHORT VERB ROLE FORMS --'+'>    <term name=\"director\" form=\"verb-short\">dir. by<\/term>    <term name=\"editor\" form=\"verb-short\">ed. by<\/term>    <term name=\"editorial-director\" form=\"verb-short\">ed. by<\/term>    <term name=\"illustrator\" form=\"verb-short\">illus. by<\/term>    <term name=\"translator\" form=\"verb-short\">trans. by<\/term>    <term name=\"editortranslator\" form=\"verb-short\">ed. &amp; trans. by<\/term>    <!'+'-- LONG MONTH FORMS --'+'>    <term name=\"month-01\">January<\/term>    <term name=\"month-02\">February<\/term>    <term name=\"month-03\">March<\/term>    <term name=\"month-04\">April<\/term>    <term name=\"month-05\">May<\/term>    <term name=\"month-06\">June<\/term>    <term name=\"month-07\">July<\/term>    <term name=\"month-08\">August<\/term>    <term name=\"month-09\">September<\/term>    <term name=\"month-10\">October<\/term>    <term name=\"month-11\">November<\/term>    <term name=\"month-12\">December<\/term>    <!'+'-- SHORT MONTH FORMS --'+'>    <term name=\"month-01\" form=\"short\">Jan.<\/term>    <term name=\"month-02\" form=\"short\">Feb.<\/term>    <term name=\"month-03\" form=\"short\">Mar.<\/term>    <term name=\"month-04\" form=\"short\">Apr.<\/term>    <term name=\"month-05\" form=\"short\">May<\/term>    <term name=\"month-06\" form=\"short\">Jun.<\/term>    <term name=\"month-07\" form=\"short\">Jul.<\/term>    <term name=\"month-08\" form=\"short\">Aug.<\/term>    <term name=\"month-09\" form=\"short\">Sep.<\/term>    <term name=\"month-10\" form=\"short\">Oct.<\/term>    <term name=\"month-11\" form=\"short\">Nov.<\/term>    <term name=\"month-12\" form=\"short\">Dec.<\/term>    <!'+'-- SEASONS --'+'>    <term name=\"season-01\">Spring<\/term>    <term name=\"season-02\">Summer<\/term>    <term name=\"season-03\">Autumn<\/term>    <term name=\"season-04\">Winter<\/term>  <\/terms><\/locale>";

// var locale = {"en-US": "<locale xml:lang=\"en\" xmlns=\"http://purl.org/net/xbiblio/csl\">  <style-options punctuation-in-quote=\"true\"/>  <date form=\"text\">    <date-part name=\"month\" suffix=\" \"/>    <date-part name=\"day\" suffix=\", \"/>    <date-part name=\"year\"/>  </date>  <date form=\"numeric\">    <date-part name=\"year\"/>    <date-part name=\"month\" form=\"numeric\" prefix=\"-\" range-delimiter=\"/\"/>    <date-part name=\"day\" prefix=\"-\" range-delimiter=\"/\"/>  </date>  <terms>    <term name=\"document-number-label\">No.</term>    <term name=\"document-number-authority-suffix\">Doc.</term>    <term name=\"un-sales-number-label\">U.N. Sales No.</term>    <term name=\"collection-number-label\">No.</term>    <term name=\"open-quote\">\u201c</term>    <term name=\"close-quote\">\u201d</term>    <term name=\"open-inner-quote\">\u2018</term>    <term name=\"close-inner-quote\">\u2019</term>    <term name=\"ordinal-01\">st</term>    <term name=\"ordinal-02\">nd</term>    <term name=\"ordinal-03\">rd</term>    <term name=\"ordinal-04\">th</term>    <term name=\"long-ordinal-01\">first</term>    <term name=\"long-ordinal-02\">second</term>    <term name=\"long-ordinal-03\">third</term>    <term name=\"long-ordinal-04\">fourth</term>    <term name=\"long-ordinal-05\">fifth</term>    <term name=\"long-ordinal-06\">sixth</term>    <term name=\"long-ordinal-07\">seventh</term>    <term name=\"long-ordinal-08\">eighth</term>    <term name=\"long-ordinal-09\">ninth</term>    <term name=\"long-ordinal-10\">tenth</term>    <term name=\"at\">at</term>    <term name=\"in\">in</term>    <term name=\"ibid\">ibid</term>    <term name=\"accessed\">accessed</term>    <term name=\"retrieved\">retrieved</term>    <term name=\"from\">from</term>    <term name=\"forthcoming\">forthcoming</term>    <term name=\"references\">      <single>reference</single>      <multiple>references</multiple>    </term>    <term name=\"references\" form=\"short\">      <single>ref</single>      <multiple>refs</multiple>    </term>    <term name=\"no date\">n.d.</term>    <term name=\"and\">and</term>    <term name=\"et-al\">et al.</term>    <term name=\"interview\">interview</term>    <term name=\"letter\">letter</term>    <term name=\"anonymous\">anonymous</term>    <term name=\"anonymous\" form=\"short\">anon.</term>    <term name=\"and others\">and others</term>    <term name=\"in press\">in press</term>    <term name=\"online\">online</term>    <term name=\"cited\">cited</term>    <term name=\"internet\">internet</term>    <term name=\"presented at\">presented at the</term>    <term name=\"ad\">AD</term>    <term name=\"bc\">BC</term>    <term name=\"season-01\">Spring</term>    <term name=\"season-02\">Summer</term>    <term name=\"season-03\">Autumn</term>    <term name=\"season-04\">Winter</term>    <term name=\"with\">with</term>        <!-- CATEGORIES -->    <term name=\"anthropology\">anthropology</term>    <term name=\"astronomy\">astronomy</term>    <term name=\"biology\">biology</term>    <term name=\"botany\">botany</term>    <term name=\"chemistry\">chemistry</term>    <term name=\"engineering\">engineering</term>    <term name=\"generic-base\">generic base</term>    <term name=\"geography\">geography</term>    <term name=\"geology\">geology</term>    <term name=\"history\">history</term>    <term name=\"humanities\">humanities</term>    <term name=\"literature\">literature</term>    <term name=\"math\">math</term>    <term name=\"medicine\">medicine</term>    <term name=\"philosophy\">philosophy</term>    <term name=\"physics\">physics</term>    <term name=\"psychology\">psychology</term>    <term name=\"sociology\">sociology</term>    <term name=\"science\">science</term>    <term name=\"political_science\">political science</term>    <term name=\"social_science\">social science</term>    <term name=\"theology\">theology</term>    <term name=\"zoology\">zoology</term>        <!-- LONG LOCATOR FORMS -->    <term name=\"book\">      <single>book</single>      <multiple>books</multiple>    </term>    <term name=\"chapter\">      <single>chapter</single>      <multiple>chapters</multiple>    </term>    <term name=\"column\">      <single>column</single>      <multiple>columns</multiple>    </term>    <term name=\"figure\">      <single>figure</single>      <multiple>figures</multiple>    </term>    <term name=\"folio\">      <single>folio</single>      <multiple>folios</multiple>    </term>    <term name=\"issue\">      <single>number</single>      <multiple>numbers</multiple>    </term>    <term name=\"line\">      <single>line</single>      <multiple>lines</multiple>    </term>    <term name=\"note\">      <single>note</single>      <multiple>notes</multiple>    </term>    <term name=\"opus\">      <single>opus</single>      <multiple>opera</multiple>    </term>    <term name=\"page\">      <single>page</single>      <multiple>pages</multiple>    </term>    <term name=\"paragraph\">      <single>paragraph</single>      <multiple>paragraph</multiple>    </term>    <term name=\"part\">      <single>part</single>      <multiple>parts</multiple>    </term>    <term name=\"section\">      <single>section</single>      <multiple>sections</multiple>    </term>    <term name=\"volume\">      <single>volume</single>      <multiple>volumes</multiple>    </term>    <term name=\"edition\">      <single>edition</single>      <multiple>editions</multiple>    </term>    <term name=\"verse\">      <single>verse</single>      <multiple>verses</multiple>    </term>    <term name=\"sub verbo\">      <single>sub verbo</single>      <multiple>s.vv</multiple>    </term>        <!-- SHORT LOCATOR FORMS -->    <term name=\"book\" form=\"short\">bk.</term>    <term name=\"chapter\" form=\"short\">chap.</term>    <term name=\"column\" form=\"short\">col.</term>    <term name=\"figure\" form=\"short\">fig.</term>    <term name=\"folio\" form=\"short\">f.</term>    <term name=\"issue\" form=\"short\">no.</term>    <term name=\"opus\" form=\"short\">op.</term>    <term name=\"page\" form=\"short\">      <single>p.</single>      <multiple>pp.</multiple>    </term>    <term name=\"paragraph\" form=\"short\">para.</term>    <term name=\"part\" form=\"short\">pt.</term>    <term name=\"section\" form=\"short\">sec.</term>    <term name=\"sub verbo\" form=\"short\">      <single>s.v.</single>      <multiple>s.vv.</multiple>    </term>    <term name=\"verse\" form=\"short\">      <single>v.</single>      <multiple>vv.</multiple>    </term>    <term name=\"volume\" form=\"short\">    	<single>vol.</single>    	<multiple>vols.</multiple>    </term>    <term name=\"edition\">edition</term>    <term name=\"edition\" form=\"short\">ed.</term>        <!-- SYMBOL LOCATOR FORMS -->    <term name=\"paragraph\" form=\"symbol\">      <single>¶</single>      <multiple>¶¶</multiple>    </term>    <term name=\"section\" form=\"symbol\">      <single>§</single>      <multiple>§§</multiple>    </term>        <!-- LONG ROLE FORMS -->    <term name=\"author\">      <single></single>      <multiple></multiple>    </term>    <term name=\"editor\">      <single>editor</single>      <multiple>editors</multiple>    </term>    <term name=\"translator\">      <single>translator</single>      <multiple>translators</multiple>    </term>        <!-- SHORT ROLE FORMS -->    <term name=\"author\" form=\"short\">      <single></single>      <multiple></multiple>    </term>    <term name=\"editor\" form=\"short\">      <single>ed.</single>      <multiple>eds.</multiple>    </term>    <term name=\"translator\" form=\"short\">      <single>tran.</single>      <multiple>trans.</multiple>    </term>        <!-- VERB ROLE FORMS -->    <term name=\"editor\" form=\"verb\">edited by</term>    <term name=\"translator\" form=\"verb\">translated by</term>    <term name=\"recipient\" form=\"verb\">to</term>    <term name=\"interviewer\" form=\"verb\">interview by</term>        <!-- SHORT VERB ROLE FORMS -->    <term name=\"editor\" form=\"verb-short\">ed.</term>    <term name=\"translator\" form=\"verb-short\">trans.</term>        <!-- LONG MONTH FORMS -->    <term name=\"month-01\">January</term>    <term name=\"month-02\">February</term>    <term name=\"month-03\">March</term>    <term name=\"month-04\">April</term>    <term name=\"month-05\">May</term>    <term name=\"month-06\">June</term>    <term name=\"month-07\">July</term>    <term name=\"month-08\">August</term>    <term name=\"month-09\">September</term>    <term name=\"month-10\">October</term>    <term name=\"month-11\">November</term>    <term name=\"month-12\">December</term>        <!-- SHORT MONTH FORMS -->    <term name=\"month-01\" form=\"short\">Jan.</term>    <term name=\"month-02\" form=\"short\">Feb.</term>    <term name=\"month-03\" form=\"short\">Mar.</term>    <term name=\"month-04\" form=\"short\">Apr.</term>	<term name=\"month-05\" form=\"short\">May</term>    <term name=\"month-06\" form=\"short\">Jun.</term>    <term name=\"month-07\" form=\"short\">Jul.</term>    <term name=\"month-08\" form=\"short\">Aug.</term>    <term name=\"month-09\" form=\"short\">Sep.</term>    <term name=\"month-10\" form=\"short\">Oct.</term>    <term name=\"month-11\" form=\"short\">Nov.</term>    <term name=\"month-12\" form=\"short\">Dec.</term>  </terms></locale>"};

var locale = {"en-US": LOCALE_STR, "old-locale": OLD_LOCALE };

var Sys = function (abbreviations) {
    this.abbreviations = abbreviations;
    this.abbrevsname = "default";
    if (!this.abbreviations) {
        this.abbreviations = {};
    }
};

Sys.prototype.retrieveItem = function (id) {
    return data[id];
};

Sys.prototype.retrieveLocale = function (lang) {
	if (lang != "en-US") {
		return locale["old-locale"];
	} else {
		return locale[lang];
	}
};

Sys.prototype.getAbbreviation = function (dummy, obj, jurisdiction, vartype, key) {
    try {
        if (this.abbreviations[this.abbrevsname][vartype][key]) {
            obj["default"][vartype][key] = this.abbreviations[this.abbrevsname][vartype][key];
        } else {
            obj["default"][vartype][key] = "";
        }
    } catch (e) {
        // There is breakage here that needs investigating.
    }
};

Sys.prototype.setAbbreviations = function (abbrevsname) {
    this.abbrevsname = abbrevsname;
};
var data = {};
var CWCSL = {
    testPublication: [
        {"EntryKey":"1401.2184","EntryType":"article","fields":{volume:1,pages:"20-50",authors:"Gondran, Alexandre and Amjad, Monis and Zaffar, Mehmood","title":"Variations on Memetic Algorithms for Graph Coloring Problems","year":"2014/01/08/"}},
        {"EntryKey":"1312.5143","EntryType":"article","fields":{startPage:113,endPage:121,"authors":"Fink, J.","title":"The high-energy anomaly in ARPES spectra of the cuprates-many body or matrix element effect?","year":"2013/12/18/"}},
        {"EntryKey":"1402.5134","EntryType":"article","fields":{pages:20,"authors":"Yang, Hyun Seok and Mehmood, Z.","title":"Highly Effective Action from Large N Gauge Fields","year":"2014/02/20/"}}
    ],
    testStyle: '<?xml version="1.0" encoding="utf-8"?><style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0" demote-non-dropping-particle="sort-only" default-locale="en-US"><info><title>ACM SIG Proceedings With Long Author List</title><id>http://www.zotero.org/styles/acm-sig-proceedings-long-author-list</id><link href="http://www.zotero.org/styles/acm-sig-proceedings-long-author-list" rel="self"/><author><name>Naeem Esfahani</name><email>nesfaha2@gmu.edu</email><uri>http://mason.gmu.edu/~nesfaha2/</uri></author><contributor><name>Chris Horn</name><email>chris.horn@securedecisions.com</email></contributor><category field="science"/><category field="engineering"/><category citation-format="numeric"/><updated>2012-01-01T00:00:00+00:00</updated><link href="http://www.acm.org/sigs/publications/proceedings-templates" rel="documentation"/><rights>This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License: http://creativecommons.org/licenses/by-sa/3.0/</rights></info><macro name="author"><choose><if type="webpage"><text variable="title" suffix=":"/></if><else><names variable="author"><name name-as-sort-order="all" and="text" sort-separator=", " initialize-with="." delimiter-precedes-last="never" delimiter=", "/><label form="short" prefix=" " suffix="." text-case="lowercase" strip-periods="true"/><substitute><names variable="editor"/><names variable="translator"/></substitute></names></else></choose></macro><macro name="editor"><names variable="editor"><name initialize-with="." delimiter=", " and="text"/><label form="short" prefix=", " text-case="lowercase" suffix="." strip-periods="true"/></names></macro><citation collapse="citation-number"><sort><key variable="citation-number"/></sort><layout prefix="[" suffix="]" delimiter=", "><text variable="citation-number"/></layout></citation><bibliography entry-spacing="0" second-field-align="flush" et-al-min="15" et-al-use-first="1"><sort><key macro="author"/><key variable="title"/></sort><layout suffix="."><text variable="citation-number" prefix="[" suffix="]"/><text macro="author" suffix=" "/><date variable="issued" suffix=". "><date-part name="year"/></date><choose><if type="paper-conference"><group delimiter=". "><text variable="title"/><group delimiter=" "><text variable="container-title" font-style="italic"/><group delimiter=", "><group delimiter=", " prefix="(" suffix=")"><text variable="publisher-place"/><date variable="issued"><date-part name="month" form="short" suffix=". " strip-periods="true"/><date-part name="year"/></date></group><text variable="page"/></group></group></group></if><else-if type="article-journal"><group delimiter=". "><text variable="title"/><text variable="container-title" font-style="italic"/><group delimiter=", "><text variable="volume"/><group delimiter=" "><text variable="issue"/><date variable="issued" prefix="(" suffix=")"><date-part name="month" form="short" suffix=". " strip-periods="true"/><date-part name="year"/></date></group><text variable="page"/></group></group></else-if><else-if type="patent"><group delimiter=". "><text variable="title"/><text variable="number" prefix="U.S. Patent #"/><date variable="issued"><date-part name="month" form="short" suffix=". " strip-periods="true"/><date-part name="day" suffix=", "/><date-part name="year"/></date></group></else-if><else-if type="thesis"><group delimiter=". "><text variable="title" font-style="italic"/><text variable="archive_location" prefix="Doctoral Thesis #"/><text variable="publisher"/></group></else-if><else-if type="report"><group delimiter=". "><text variable="title" font-style="italic"/><text variable="number" prefix="Technical Report #"/><text variable="publisher"/></group></else-if><else-if type="webpage"><group delimiter=". "><text variable="URL" font-style="italic"/><date variable="accessed" prefix="Accessed: "><date-part name="year" suffix="-"/><date-part name="month" form="numeric-leading-zeros" suffix="-"/><date-part name="day" form="numeric-leading-zeros"/></date></group></else-if><else-if type="chapter paper-conference" match="any"><group delimiter=". "><text variable="title"/><text variable="container-title" font-style="italic"/><text macro="editor"/><text variable="publisher"/><text variable="page"/></group></else-if><else-if type="bill book graphic legal_case legislation motion_picture report song" match="any"><group delimiter=". "><text variable="title" font-style="italic"/><text variable="publisher"/></group></else-if><else><group delimiter=". "><text variable="title"/><text variable="container-title" font-style="italic"/><text variable="publisher"/></group></else></choose></layout></bibliography></style>',
    getNamesPart: function (names) {
        var author = {};
        if (names.indexOf(",") >= 0) {
            var atemp = names.split(",");
            author.family = atemp[0];
            author.given = atemp[1].trim().split(' ')[0];
        } else if (names.indexOf(" ")) {
            var atemp = names.split(" ");
            author.family = atemp[atemp.length - 1];
            author.given = "";
            for (var agi = 0; agi < atemp.length - 1; agi++)
                author.given += atemp[agi] + " ";
        } else {
            author.family = "";
            author.given = names;
        }
        return author;
    },
    getDate:function(dt){
        var dateObj={},d = new Date(Date.parse(dt)),
            yr = d.getFullYear(), mo = d.getMonth() + 1, da = d.getDate(), parts = [];
        dateObj["year"]=yr;
        dateObj["month"]=mo;
        dateObj["day"]=da;
        return dateObj;
    },
    createCSLJson: function (args) {
       try{
        var cslJSon = {}, metadata = args.metadata || {};
        var publication = metadata["fields"] || metadata["Fields"];
        var jcsl = new Object();
        jcsl.id = "cwc-" + Base64.encode(metadata.EntryKey + "@@" + metadata.EntryType);
        jcsl.note = ""; //todo: notes
        if (typeof publication != "undefined") {
                // Title
            var newPub={};
            for(var key in publication){
                try{
                    newPub[key.toLowerCase()]=publication[key].toString();
                }catch(ex){}
            }
            publication=newPub;
            if (typeof publication.title != "undefined" && publication.title != "") {
                jcsl.title = publication.title;
            }

            // Authors
            if (typeof publication.authors != "undefined" && publication.authors != "") {
                jcsl.author = [];
                var authorArray = publication.authors.split(" and ");
                for (var ai = 0; ai < authorArray.length; ai++) {
                    var names = authorArray[ai];
                    if (!names || names == "")
                        continue;
                    jcsl.author.push(CWCSL.getNamesPart(names));
                }
            }
            // Single Author
            if (typeof publication.author != "undefined" && publication.author != "") {
                jcsl.author = [];
                jcsl.author.push(CWCSL.getNamesPart(publication.author));
            }
            // Year
            if (typeof publication.year != "undefined" && publication.year != "" ) {
                if(publication.year.trim().length!=4){
                    jcsl.issued = CWCSL.getDate(publication.year);
                }else{
                    jcsl.issued = {"year":publication.year};
                }
            }else if (typeof publication.date != "undefined" && publication.date != "") { // Date
                jcsl.issued = CWCSL.getDate(publication.date);
            }

            if (typeof publication.pages != "undefined" && publication.pages != "") {
                if(publication.pages.indexOf("-")>=0){
                    var pages=publication.pages.trim().replace(/\-+/,"-").split("-");
                    jcsl.page = pages[0] +(pages[1]? ("-" + pages[1]):"");
                } else{
                    jcsl.page = publication.pages;
                }
            } else if (typeof publication.startpage != "undefined" && publication.startpage != ""
                && typeof publication.endpage != "undefined" && publication.endpage != "") {  // Pages
                jcsl.page = publication.startpage + "-" + publication.endpage;
            } else if ((typeof publication.startpage != "undefined" && publication.startpage != "")    // Single Page
                || (typeof publication.endpage != "undefined" && publication.endpage != "")) {
                jcsl.page = publication.startpage || publication.endpage;
            }
            //volume
            if (typeof publication.volume != "undefined" && publication.volume != "") {
                jcsl.volume = publication.volume;
            }
            //issue
            if (typeof publication.issue != "undefined" && publication.issue != "") {
                jcsl.issue = publication.issue;
            }
            //container-title
            if(typeof publication.journal != "undefined" && publication.journal != "") {
                jcsl["container-title"] = publication.journal;
            }
        }
        //DOI
        if (typeof metadata.EntryKey != "undefined" && metadata.EntryKey != ""
            && metadata.EntryKey.indexOf("10.") == 0) {
            jcsl.DOI = metadata.EntryKey
        }

        //type
        if (typeof metadata.EntryType != "undefined" && metadata.EntryType != "") {
            jcsl.type = metadata.EntryType;
        }
       }catch(ex){
          console.log(ex);
       }
        return jcsl;
    },
    getCitation:function(mods,style) {
        var format=style;
        var jcsl = new Object();
        jcsl.id = "cwc-1";
        jcsl.note = "dummy note";

        mods=mods.mods;
        if (mods)
        {
            //title
            if (mods.titleInfo)
            {
                if (mods.titleInfo.title) {
                    jcsl.title = mods.titleInfo.title;
                }
            }

            //authors
            jcsl.author = [];
            if (mods.name) {
                for (var i = 0; i < mods.name.length; i++) {
                    if (mods.name[i].type == "personal") {
                        var a = new Object;
                        for (var j = 0; j < mods.name[i].namePart.length; j++) {
                            var np = mods.name[i].namePart[j];
                            switch (np.type) {
                                case "family":
                                    a.family = np.__text;
                                    break;
                                case "given":
                                    a.given = np.__text;
                                    break;
                            }
                        }
                        jcsl.author.push(a);
                    }
                }
            }

            //container-title
            if (mods.relatedItem) {
                if (mods.relatedItem.type == "host") {
                    if (mods.relatedItem.titleInfo) {
                        if (mods.relatedItem.titleInfo.title) {
                            jcsl["container-title"] = mods.relatedItem.titleInfo.title;
                        }
                    }
                }
            }

            //issued [To Do: add more intelligence]
            if (mods.originInfo) {
                if (mods.originInfo.dateIssued) {
                    var d = new Date(Date.parse(mods.originInfo.dateIssued));
                    var yr = d.getFullYear();
                    var mo = d.getMonth() + 1;
                    var da = d.getDate();

                    jcsl.issued = CWCSL.getDate(yr+'-'+mo+'-'+da);
                }
            }

            //pages
            var found = false;
            if (mods.part) {
                if (mods.part.extent) {
                    var extent = mods.part.extent;
                    if (extent.unit == "page") {
                        if (extent.start && extent.end) {
                            jcsl.page = extent.start + "-" + extent.end;
                            found = true;
                        }
                    }
                }
                if (!found) {
                    if (mods.part.detail) {
                        var detail = mods.part.detail;
                        if (detail.type == "page") {
                            if (detail.number) {
                                jcsl.page = detail.number;
                                found = true;
                            }
                        }
                    }
                }
                if (!found) {
                    if (mods.relatedItem) {
                        if (mods.relatedItem.type == "host") {
                            if (mods.relatedItem.part) {
                                if (mods.relatedItem.part.extent) {
                                    var extent = mods.relatedItem.part.extent;
                                    if (extent.unit == "page") {
                                        if (extent.start && extent.end) {
                                            jcsl.page = extent.start + "-" + extent.end;
                                            found = true;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

            //volume
            found = false;
            if (mods.part) {
                if (mods.part.detail) {
                    for (var i = 0; i < mods.part.detail.length; i++) {
                        var dtl = mods.part.detail[i];
                        if (dtl.type == "volume") {
                            jcsl.volume = dtl.number;
                            found = true;
                            break;
                        }
                    }
                }
            }
            if (!found) {
                if (mods.relatedItem) {
                    if (mods.relatedItem.type == "host") {
                        if (mods.relatedItem.part) {
                            if (mods.relatedItem.part.detail) {
                                for (var i = 0; i < mods.relatedItem.part.detail.length; i++) {
                                    var dtl = mods.relatedItem.part.detail[i];
                                    if (dtl.type == "volume") {
                                        jcsl.volume = dtl.number;
                                        found = true;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }

            //issue
            found = false;
            if (mods.part) {
                if (mods.part.detail) {
                    for (var i = 0; i < mods.part.detail.length; i++) {
                        var dtl = mods.part.detail[i];
                        if (dtl.type == "issue" || dtl.type == "number") {
                            jcsl.issue = dtl.number;
                            found = true;
                            break;
                        }
                    }
                }
            }
            if (!found) {
                if (mods.relatedItem) {
                    if (mods.relatedItem.type == "host") {
                        if (mods.relatedItem.part) {
                            if (mods.relatedItem.part.detail) {
                                for (var i = 0; i < mods.relatedItem.part.detail.length; i++) {
                                    var dtl = mods.relatedItem.part.detail[i];
                                    if (dtl.type == "issue" || dtl.type == "number") {
                                        jcsl.issue = dtl.number;
                                        found = true;
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
            //DOI
            if (mods.identifier) {
                /*for (var i = 0; i < mods.identifier.length; i++) {
                 var idnt = mods.identifier[i];
                 if (idnt.type == "doi") {
                 jcsl.doi = idnt.__text;
                 break;
                 }
                 }*/
                jcsl.DOI = mods.identifier.__text;
            }

            //type
            if (mods.genre) {
                for (var i = 0; i < mods.genre.length; i++) {
                    var gnr = mods.genre[i];
                    if (gnr.authority) {
                        if (gnr.authority == "colwiz") {
                            jcsl.type = gnr.__text;
                        }
                    }
                }
            }
            //jcsl.type = "article-journal";
        }

        data["cwc-1"] = jcsl;

        var sys = new Sys(abbreviations);
        var citeproc = new CSL.Engine(sys,format);// chicago_author_date);

        var citation = {"citationItems": [{id: "cwc-1"}],"properties": {"noteIndex": 1}};
        citeproc.appendCitationCluster(citation);

        var res = citeproc.makeBibliography();
        if (res && res.length && res[1].length){
            res = res[0].bibstart + res[1].join("") + res[0].bibend;
        }
        return res;
    },
    getHTML: function (publication, cslStyle) {
        if (typeof publication === "undefined" && !publication.length && typeof cslStyle === "undefined")
            return;
        var sys = new Sys(abbreviations);
        var citeproc = new CSL.Engine(sys, cslStyle);
        var bibliographyfinalRes = "",list=[];
        var finalResArr = [];
        for (var zz = 0; zz < publication.length; zz++) {
            list.push({"id": publication[zz].id});
        }
        var citation = {"citationID": 0, "citationItems": list, "properties": {"noteIndex": 1}};
        var rs = citeproc.appendCitationCluster(citation);
        var res = citeproc.makeBibliography();
        if (res && res.length && res[1].length) {
            res = res[0].bibstart + res[1].join("") + res[0].bibend;
        }
        data= {};
        return {bibliography:res,citation:rs[0][1]};
    },
    getCitationHTML:function(publications,cslFormat){
        var pubsArray = publications, cslPubsArray = [];
        if (pubsArray.length) {
            for (var i = 0; i < pubsArray.length; i++) {
                var cslJson=CWCSL.createCSLJson({"metadata": pubsArray[i]});
                data[cslJson.id]=cslJson;
                cslPubsArray.push(cslJson);
                //data={};
            }
        }else{
            var cslJson=CWCSL.createCSLJson({"metadata": pubsArray});
            data[cslJson.id]=cslJson;
            cslPubsArray.push(cslJson);
            //data={};
        }
        return CWCSL.getHTML(cslPubsArray, cslFormat);
    },
    testCitationHTML: function () {
        var pubsArray = this.testPublication, cslPubsArray = [];
        if (pubsArray.length) {
            for (var i = 0; i < pubsArray.length; i++) {
                var cslJson=CWCSL.createCSLJson({"metadata": pubsArray[i]});
                data[cslJson.id]=cslJson;
                cslPubsArray.push(cslJson);
            }
        }else{
            var cslJson=CWCSL.createCSLJson({"metadata": pubsArray});
            data[cslJson.id]=cslJson;
            cslPubsArray.push(cslJson);
        }
        document.body.innerHTML+= CWCSL.getHTML(cslPubsArray, this.testStyle).bibliography;
    }
};
