$(function(){
    $('#sortable').sortable({
        items: ".row > div",
        placeholder: {
            element: function (currentItem) {
              return $("<div class='ui-state-highlight'><div></div></div>")[0];
            },
            update: function(container, p) {
              return;
            }
        },
        start: function( event, ui ) {
            $('.row > div').height(ui.item.innerHeight());
          },
        over: function(event, ui) {
            var placeholderHeight = ui.item.innerHeight();
            ui.placeholder.height(placeholderHeight);
            var cl = ui.item.attr('class');
            $('.ui-state-highlight').addClass(cl);
        },
        stop: function(event,ui){
            $('.row > div').height('auto');
        }
    }).disableSelection();
});