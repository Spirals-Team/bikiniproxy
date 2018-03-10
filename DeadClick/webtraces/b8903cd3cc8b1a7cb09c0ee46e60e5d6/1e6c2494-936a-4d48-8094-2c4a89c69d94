jQuery(function(){
	saisies_fieldset_pliable();
	onAjaxLoad(saisies_fieldset_pliable);
});

function saisies_fieldset_pliable(){
	// On cherche les groupes de champs pliables
	jQuery('.fieldset.pliable')
		.each(function(){
			var fieldset = jQuery(this);
			var groupe = jQuery(this).find('> fieldset > .editer-groupe');
			var legend = jQuery(this).find('> fieldset > .legend');

			// S'il est déjà plié on cache le contenu
			if (fieldset.is('.plie'))
				groupe.hide();

			// Ensuite on ajoute une action sur le titre
			legend
				.unbind('click')
				.click(
					function(){
						fieldset.toggleClass('plie');
						if (groupe.is(':hidden'))
							groupe.show();
						else
							groupe.hide();
					}
				);
		});
};

function saisies_date_jour_mois_annee_changer_date(me, datetime) {
	var champ = jQuery(me);
	var li = champ.closest('.editer');
	var	jour = jQuery.trim(li.find('.date_jour').val());
	var	mois = jQuery.trim(li.find('.date_mois').val());
	var	annee = jQuery.trim(li.find('.date_annee').val());
	var	date = jQuery.trim(li.find('.datetime').val());
	
	while(jour.length < 2) {jour = '0' + jour;}
	while(mois.length < 2) {mois = '0' + mois;}
	while(annee.length < 4) {annee = '0' + annee;}
	
	if (datetime == 'oui') {
		date = annee + '-' + mois + '-' + jour + date.substring(10);
	}
	else {
		date = annee + '-' + mois + '-' + jour;
	}
	li.find('.datetime').attr('value', date);
}
