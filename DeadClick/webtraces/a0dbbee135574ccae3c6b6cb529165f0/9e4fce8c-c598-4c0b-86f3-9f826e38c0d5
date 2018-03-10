
 /**
 * Classe Mootools pour effet Mooopacite
 * @copyright	Copyright (C) 2010 Cédric KEIFLIN alias ced1870
 * http://www.ck-web-creation-alsace.com
 * http://www.joomlack.fr.nf
 * @license		GNU/GPL
 * */

var mooOpacite_ck = new Class({
    Implements: Options,
	
    options: {    //options par défaut si aucune option utilisateur n'est renseignée
        mooDuree1 : 500,
        mooDuree2 : 500,
        opacite : 0.5
    },
			
    initialize: function(items, options) {
        this.setOptions(options);
        var maduree1 = this.options.mooDuree1;
        var maduree2 = this.options.mooDuree2;
        var opacite = this.options.opacite;


        items.each(function(item){
            var fx = new Fx.Morph(item, {
                duration:maduree1,
                wait:false
            });
            var fx2 = new Fx.Morph(item, {
                duration:maduree2,
                wait:false
            });
		
            item.addEvent('mouseenter', function(){

                fx.start({
                    'opacity': opacite
                });
                fx2.stop();
            });

            item.addEvent('mouseleave', function(){
                fx2.start({
                    'opacity': 1
                });
                fx.stop();
            });
	
		
        });
    }
});
mooOpacite_ck.implement(new Options);
