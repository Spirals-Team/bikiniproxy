
/**
* JS File of module
* 
* @author Olivier Michaud
* @copyright  Olivier Michaud
* @license    http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*/

$(document).ready(function() {
    //Display shopping list on hover
    $(".shopping_list_block").hover(function() {
        $(this).find('ul').slideDown();
    }, function() {
        $(this).find('ul').slideUp();
    })
    
    //Add to shopping list action
    $(".shopping_list_block ul li a").click(function() {
        $href = $(this).attr('data-href');
        $attribute = $('#idCombination').val();
        $product = $('#product_page_product_id').val();
        $title = $('#title-product').html();
        if($("#product_reference").length == 1) {
            $reference = " (" + $("#product_reference").text() + ")";
        }
        else {
            $reference = "";
        }

        $.ajax({
            url: $href,
            type: 'POST',
            dataType: 'json',
            data: {
                id_product: $product,
                id_product_attribute: $attribute,
                title: $title + $reference,
                ajax: true,
                action: 'add-shopping-list'
            },
            success: function(msg){
                alert(msg.result);
            },
            error: function(msg){
                alert(msg.result);
            },
        });
    });
});