var errClass = 'is-error';
var msgErrClass = 'ctct-form-errorMessage';

localizedErrMap['unsubscribed'] = 'Sorry, you were previously unsubscribed from our lists. Please contact us to subscribe again.';

if (typeof $ === 'undefined' && typeof jQuery === 'undefined') {
  /* Load JQuery */
  var jquery_lib = document.createElement('script');
  document.head.appendChild(jquery_lib);
  jquery_lib.onload = function() {
    var __$$ = jQuery.noConflict(true);
    main(__$$);
  };
  jquery_lib.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js';
} else {
  main(jQuery);
}

function main($) {
  $.support.cors = true;
  if (typeof postURL === 'undefined') {
    postURL = 'https://visitor2.constantcontact.com/api/signup';
  }
  var _form = $('[data-id="embedded_signup:form"]');
  var stateInput = $("<input/>").attr({ type: 'text', name: 'address_state', maxlength: '50', style: 'display:none;' });
  var stateSelect = $("<select/>").attr({ name: 'address_state'});
  stateSelect.append($("<option>--</option>").attr({value: '', selected:'selected'}));
  var stateValues = {
    'AL':'Alabama','AK':'Alaska','AB':'Alberta','AZ':'Arizona','AR':'Arkansas',
    'AA':'Armed Forces Americas','AE':'Armed Forces Europe','AP':'Armed Forces Pacific',
    'BC':'British Columbia','CA':'California','CO':'Colorado','CT':'Connecticut','DE':'Delaware',
    'DC':'District of Columbia','FL':'Florida','GA':'Georgia','HI':'Hawaii','ID':'Idaho',
    'IL':'Illinois','IN':'Indiana','IA':'Iowa','KS':'Kansas','KY':'Kentucky','LA':'Louisiana',
    'ME':'Maine','MB':'Manitoba','MD':'Maryland','MA':'Massachusetts','MI':'Michigan',
    'MN':'Minnesota','MS':'Mississippi','MO':'Missouri','MT':'Montana','NE':'Nebraska',
    'NV':'Nevada','NB':'New Brunswick','NH':'New Hampshire','NJ':'New Jersey','NM':'New Mexico',
    'NY':'New York','NL':'Newfoundland and Labrador','NC':'North Carolina','ND':'North Dakota',
    'NT':'Northwest Territories','NS':'Nova Scotia','NU':'Nunavut','OH':'Ohio','OK':'Oklahoma',
    'ON':'Ontario','OR':'Oregon','PA':'Pennsylvania','PE':'Prince Edward Island','QC':'Quebec',
    'RI':'Rhode Island','SK':'Saskatchewan','SC':'South Carolina','SD':'South Dakota','TN':'Tennessee',
    'TX':'Texas','UT':'Utah','VT':'Vermont','VA':'Virginia','WA':'Washington','WV':'West Virginia',
    'WI':'Wisconsin','WY':'Wyoming','YT':'Yukon Territory'
  };

  $.each(stateValues, function(key, value) {
      stateSelect.append($("<option/>", {
          value: key,
          text: value
      }));
  });
  _form.find("p[data-id='State/Province:p']").append(stateInput);
  _form.find("p[data-id='State/Province:p']").append(stateSelect);

  var countrySelect = $("<select/>").attr({ name: 'address_country'});
  countrySelect.append($("<option/>", {value: '', text: '--', selected:'selected'}));
  countrySelect.append($("<option/>", {value: 'us', text: 'United States'}));
  countrySelect.append($("<option/>", {value: 'ca', text: 'Canada'}));
  var countryValues = {
    'af':'Afghanistan','ax':'Aland Islands','al':'Albania','dz':'Algeria',
    'as':'American Samoa','ad':'Andorra','ao':'Angola','ai':'Anguilla',
    'aq':'Antarctica','ag':'Antigua and Barbuda','ar':'Argentina','am':'Armenia',
    'aw':'Aruba','au':'Australia','at':'Austria','az':'Azerbaijan','bs':'Bahamas',
    'bh':'Bahrain','bd':'Bangladesh','bb':'Barbados','by':'Belarus','be':'Belgium',
    'bz':'Belize','bj':'Benin','bm':'Bermuda','bt':'Bhutan','bo':'Bolivia',
    'ba':'Bosnia and Herzegovina','bw':'Botswana','bv':'Bouvet Island','br':'Brazil',
    'io':'British Indian Ocean Territory','bn':'Brunei Darussalam','bg':'Bulgaria',
    'bf':'Burkina Faso','bi':'Burundi','kh':'Cambodia','cm':'Cameroon',
    'ca':'Canada','cv':'Cape Verde','ky':'Cayman Islands','cf':'Central African Republic',
    'td':'Chad','cl':'Chile','cn':'China','cx':'Christmas Island','cc':'Cocos (Keeling) Islands',
    'co':'Colombia','km':'Comoros','cg':'Congo','cd':'Congo, Democratic Republic of',
    'ck':'Cook Islands','cr':'Costa Rica','ci':'Cote D\'Ivoire','hr':'Croatia',
    'cy':'Cyprus','cz':'Czech Republic','dk':'Denmark','dj':'Djibouti','dm':'Dominica',
    'do':'Dominican Republic','tl':'East Timor','ec':'Ecuador','eg':'Egypt','sv':'El Salvador',
    'U1':'England','gq':'Equatorial Guinea','er':'Eritrea','ee':'Estonia','et':'Ethiopia',
    'fo':'Faroe Islands','fk':'Faukland Islands','fj':'Fiji','fi':'Finland','fr':'France',
    'gf':'French Guyana','pf':'French Polynesia','tf':'French Southern Territories',
    'ga':'Gabon','gm':'Gambia','ge':'Georgia','de':'Germany','gh':'Ghana','gi':'Gibraltar',
    'gr':'Greece','gl':'Greenland','gd':'Grenada','gp':'Guadeloupe','gu':'Guam','gt':'Guatemala',
    'gg':'Guernsey','gn':'Guinea','gw':'Guinea-Bissau','gy':'Guyana','ht':'Haiti',
    'hm':'Heard and McDonald Islands','hn':'Honduras','hk':'Hong Kong','hu':'Hungary',
    'is':'Iceland','in':'India','id':'Indonesia','iq':'Iraq','ie':'Ireland',
    'im':'Isle of Man','il':'Israel','it':'Italy','jm':'Jamaica','jp':'Japan',
    'je':'Jersey','jo':'Jordan','kz':'Kazakhstan','ke':'Kenya','ki':'Kiribati',
    'xk':'Kosovo','kw':'Kuwait','kg':'Kyrgyzstan','la':'Laos','lv':'Latvia',
    'lb':'Lebanon','ls':'Lesotho','lr':'Liberia','ly':'Libya','li':'Liechtenstein',
    'lt':'Lithuania','lu':'Luxembourg','mo':'Macao','mk':'Macedonia','mg':'Madagascar',
    'mw':'Malawi','my':'Malaysia','mv':'Maldives','ml':'Mali','mt':'Malta','mh':'Marshall Islands',
    'mq':'Martinique','mr':'Mauritania','mu':'Mauritius','yt':'Mayotte','mx':'Mexico',
    'fm':'Micronesia','md':'Moldova','mc':'Monaco','mn':'Mongolia','me':'Montenegro',
    'ms':'Montserrat','ma':'Morocco','mz':'Mozambique','mm':'Myanmar','na':'Namibia',
    'nr':'Nauru','np':'Nepal','nl':'Netherlands','an':'Netherlands Antilles','nt':'Neutral Zone',
    'nc':'New Caledonia','nz':'New Zealand','ni':'Nicaragua','ne':'Niger','ng':'Nigeria',
    'nu':'Niue','nf':'Norfolk Island','U4':'Northern Ireland','mp':'Northern Mariana Islands',
    'no':'Norway','om':'Oman','pk':'Pakistan','pw':'Palau','ps':'Palestinian Territory, Occupied',
    'pa':'Panama','pg':'Papua New Guinea','py':'Paraguay','pe':'Peru','ph':'Philippines','pn':'Pitcairn',
    'pl':'Poland','pt':'Portugal','pr':'Puerto Rico','qa':'Qatar','re':'Reunion','ro':'Romania',
    'ru':'Russian Federation','rw':'Rwanda','bl':'Saint Barthelemy','sh':'Saint Helena',
    'kn':'Saint Kitts and Nevis','lc':'Saint Lucia','mf':'Saint Martin','pm':'Saint Pierre and Miquelon',
    'vc':'Saint Vincent &amp; the Grenadines','ws':'Samoa','sm':'San Marino',
    'st':'Sao Tome and Principe','sa':'Saudi Arabia','U3':'Scotland','sn':'Senegal',
    'rs':'Serbia','sc':'Seychelles','sl':'Sierra Leone','sg':'Singapore','sk':'Slovakia',
    'si':'Slovenia','sb':'Solomon Islands','so':'Somalia','za':'South Africa',
    'gs':'South Georgia &amp; S. Sandwich Is.','kr':'South Korea','ss':'South Sudan',
    'es':'Spain','lk':'Sri Lanka','sr':'Suriname','sj':'Svalbard and Jan Mayen','sz':'Swaziland',
    'se':'Sweden','ch':'Switzerland','tw':'Taiwan','tj':'Tajikistan','tz':'Tanzania','th':'Thailand',
    'tg':'Togo','tk':'Tokelau','to':'Tonga','tt':'Trinidad and Tobago','tn':'Tunisia','tr':'Turkey',
    'tm':'Turkmenistan','tc':'Turks and Caicos Islands','tv':'Tuvalu','ug':'Uganda','ua':'Ukraine',
    'ae':'United Arab Emirates','gb':'United Kingdom','us':'United States','um':'United States Minor Outlying Is.',
    'uy':'Uruguay','uz':'Uzbekistan','vu':'Vanuatu','va':'Vatican City State','ve':'Venezuela','vn':'Viet Nam',
    'vg':'Virgin Islands, British','vi':'Virgin Islands, U.S.','U2':'Wales','wf':'Wallis and Futuna',
    'eh':'Western Sahara','ye':'Yemen','zm':'Zambia','zw':'Zimbabwe'
  };

  $.each(countryValues, function(key, value) {
      countrySelect.append($("<option/>", {
          value: key,
          text: value
      }));
  });

  var canada_states = ['AB','BC','MB','NB','NL','NT','NS','NU','ON','PE','QC','SK','YT'];

  _form.find("p[data-id='Country:p']").append(countrySelect);
  _form.find('select[name=address_country]').change(function() {
    if ($(this).val() == 'us' || $(this).val() == 'ca' ){
      _form.find('select[name=address_state]').show();
      _form.find('select[name=address_state]').attr('disabled',false);
      _form.find('input[name=address_state]').hide();
      _form.find('input[name=address_state]').attr('disabled',true);
    } else {
      _form.find('select[name=address_state]').hide();
      _form.find('select[name=address_state]').attr('disabled',true);
      _form.find('input[name=address_state]').show();
      _form.find('input[name=address_state]').attr('disabled',false);
    }
  });

  _form.submit(function(e) {
    e.preventDefault();

    /*  Generate the serialized payload and hash to map with */
    var payload = $(this).serialize();
    var payload_check = payload.split('&');
    var payload_check_hash = {};
    /* Populate the hash with values */
    var i, j;
    var field, fnames, fname;
    /* Handle the option to redirect */
    var redirect = false;
    var redirect_url = "";
    for (i = 0; i < payload_check.length; i++) {
      var p = payload_check[i].split('=');
      if(p[0].lastIndexOf('list_', 0) === 0){
        p[0] = 'list';
      }
      payload_check_hash[p[0]] = p[1];
    }
    /* Clear any errors that may of been set before */
    _form.find('.' + msgErrClass).remove();
    _form.find('.' + errClass).removeClass(errClass);
    _form.find('.ctct-flagged').removeClass('ctct-flagged');

    /* This is the ONLY client side validation */
    var isError = false;
    /* Validate State/Country if present */
    if( $('select[name=address_state]').length && $('select[name=address_state]').val() !== '' ){
      if( $('select[name=address_country]').val() == 'ca' ){
        if( canada_states.indexOf( _form.find('select[name=address_state]').val() ) == -1 ){
          _form.find('select[name=address_country]').before('<div class="' + msgErrClass + '">' + localizedErrMap['state_mismatch'] + '</div>');
          isError = true;
        }
      }
      if( $('select[name=address_country]').val() == 'us' ){
        if( canada_states.indexOf( _form.find('select[name=address_state]').val() ) != -1 ){
          _form.find('select[name=address_country]').before('<div class="' + msgErrClass + '">' + localizedErrMap['state_mismatch'] + '</div>');
          isError = true;
        }
      }
    }

    if (isError === true) {
      return false;
    }

    /* Clean custom fields if needed */
    var payload_clean = payload.split('&');
    var id, item;
    var custom_data_to_clean = {};
    for (i = 0; i < payload_clean.length; i++) {
      item = payload_clean[i].split('=');
      /* See if we have a empty value */
      if (!item[1] || item[1] === "") {
        /* Check the field name to see if its custom */
        if(item[0].match(/cf_text_value--[\w0-9\-\:\_]*/)) {
          id = item[0].split('--')[1];
          custom_data_to_clean[id] = true;
        } else if(item[0].match(/cf_date_value_day--[\w0-9\-\:\_]*/)) {
          id = item[0].split('--')[1];
          if (!custom_data_to_clean[id]) {
            custom_data_to_clean[id] = {};
          }
          custom_data_to_clean[id]['day'] = true;
        } else if(item[0].match(/cf_date_value_month--[\w0-9\-\:\_]*/)) {
          id = item[0].split('--')[1];
          if (!custom_data_to_clean[id]) {
            custom_data_to_clean[id] = {};
          }
          custom_data_to_clean[id]['month'] = true;
        } else if(item[0].match(/cf_date_value_year--[\w0-9\-\:\_]*/)) {
          id = item[0].split('--')[1];
          if (!custom_data_to_clean[id]) {
            custom_data_to_clean[id] = {};
          }
          custom_data_to_clean[id]['year'] = true;
        } else {
          delete payload_clean[i];
        }
      }
    }

    payload_clean = payload_clean.filter(function(n){ return n !== undefined; });
    /* Iterate over the flagged ids and scrub the data */
    for (i in custom_data_to_clean) {
      /* Loop over the payload and remove the fields that match out scrub needs */
      for (j = 0; j < payload_clean.length; j++) {
        item = payload_clean[j];
        if(item) {
          item = item.split('=');
          /* Match based of field id */
          if(item[0].match(new RegExp('.*--' + i, 'i'))) {
            /* If the value is a bool then we are dealing with text */
            if (custom_data_to_clean[i] === true) {
              delete payload_clean[j];
            /* If the value is an object its a date and we should only scrub if all fields are empty */
            } else if (typeof custom_data_to_clean[i] === 'object') {
              if (custom_data_to_clean[i]['day'] === true && custom_data_to_clean[i]['month'] === true && custom_data_to_clean[i]['year'] === true) {
                delete payload_clean[j];
              }
            }
          }
        }
      }
    }

    /* Search for a redirect URL in the payload, and extract the URL. */
    /* Exclude undefined entries when searching for URL to prevent calling a method on an undefined object */
    var url_filtered_payload = $.grep(payload_clean.filter(function(n){ return n !== undefined; }),function (n, i) {
      return n.substring(0,3) == "url" ? true : false;
    });
    /* If there are any matches, this will be greater than zero */
    if (url_filtered_payload.length > 0)
    {
      redirect = true;
      for (i in url_filtered_payload)
      {
        redirect_url = decodeURIComponent(url_filtered_payload[i].substring(4));
        break;
      }
      /* After storing the redirect URL, remove it from the payload */
      payload_clean = payload_clean.filter(function(n){ return n.substring(0,3) !== "url";});
    }

    payload_clean = payload_clean.filter(function(n){ return n !== undefined; }).join('&');

    $.ajax({
      type: 'POST',
      crossDomain: true,
      url: postURL,
      data: payload_clean,
      error: function(xhr, status, err) {
        json = xhr.responseJSON;
        if (json) {
          if (json.offenders) {
            for (var i in json.offenders) {
              var item = json.offenders[i];
              var offender = item.offender;
              var required = item.required;
              var inputUI = _form.find('[name=' + offender + ']');
              var labelUI = null;
              var p = inputUI.parent('p');
              if (p.length === 0) {
                labelUI = _form.find('[data-name=' + offender + ']');
                /* if the offender s unsubscribed, have the error message above the email. */
                if (offender === 'unsubscribed') {
                  labelUI = _form.find('[data-name=email]');
                }
                if (labelUI.length === 0) {
                  continue;
                }
              } else {
                labelUI = p.find('label');
              }

              if (required === true && !offender.match(/list.*/)) {
                if (!labelUI.hasClass('ctct-flagged')) {
                  labelUI.after(errorSection('required'));
                }
              } else if (offender === 'ca') {
                if (!labelUI.hasClass('ctct-flagged')) {
                  labelUI.after(errorSection('ca'));
                }
              } else if (offender === 'email' || offender === 'unsubscribed') {
                if (!labelUI.hasClass('ctct-flagged')) {
                  if (offender === 'email') {
                    labelUI.after(errorSection('email'));
                  } else {
                    labelUI.after(errorSection('unsubscribed'));
                  }
                }
              } else if (offender === 'birthday_day' || offender === 'birthday_month') {
                if (!labelUI.hasClass('ctct-flagged')) {
                  labelUI.after(errorSection('birthday'));
                }
              } else if (offender === 'anniversary_day' || offender === 'anniversary_month' || offender === 'anniversary_year') {
                if (!labelUI.hasClass('ctct-flagged')) {
                  labelUI.after(errorSection('anniversary'));
                }
              } else if (offender.match(/cf_date_value_day--[\w0-9-:]*/) ||
                        offender.match(/cf_date_value_month--[\w0-9-:]*/) ||
                        offender.match(/cf_date_value_year--[\w0-9-:]*/) ||
                        offender.match(/cf_date_name--[\w0-9-:]*/) ||
                        offender.match(/cf_date_label--[\w0-9-:]*/)) {
                if (!labelUI.hasClass('ctct-flagged')) {
                  labelUI.after(errorSection('custom_date'));
                }
              } else if (offender.match(/list.*/)) {
                if (!labelUI.hasClass('ctct-flagged')) {
                  labelUI.after(errorSection('list'));
                }
              } else {
                if (!labelUI.hasClass('ctct-flagged')) {
                  labelUI.after(errorSection('generic'));
                }
              }
              inputUI.addClass(errClass);
              labelUI.addClass('ctct-flagged');
            }
          } else {
            _form.prepend(errorSection('shared'));
          }
        } else {
          _form.prepend(errorSection('shared'));
        }
      },
      success: function(data, status, xhr) {
        /* If there is no redirect, display success message as usual */
        if (redirect === false)
        {
          $('.ctct-embed-signup p').hide();
          $('.ctct-embed-signup h2').hide();
          $('.ctct-embed-signup button').hide();
          $('.ctct-embed-signup form').hide();
          $('#success_message').removeClass('u-hide');
          $('#success_message').show();
        }
        /* Otherwise, redirect the browser to the specified redirect */
        else
        {
          window.location.href = redirect_url;
        }
      }
    });
    return false;
  });
}

function errorSection(errorType) {
  return '<div class="' + msgErrClass + '">' + localizedErrMap[errorType] + '</div>';
}
