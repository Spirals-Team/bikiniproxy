function toggle_checkboxes(id) {
    if (!document.getElementById){ return; }
    if (!document.getElementsByTagName){ return; }
    var inputs = document.getElementsByTagName("input");
    for(var x=0; x < inputs.length; x++) {
        if (inputs[x].type == 'checkbox' && inputs[x].id != 'toggle'){
            inputs[x].checked = !inputs[x].checked;
        }
    }
    return true;
}
