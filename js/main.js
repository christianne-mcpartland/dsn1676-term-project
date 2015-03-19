var $btnExpand = $(".btn-expand");
var $togglePanel = $('.toggle-panel');

$btnExpand.on('click', function() {
    $togglePanel.toggleClass('toggle-panel-expand');
});

var $btnCollapse = $('.btn-collapse-expand');
var $panel = $('.panel');

$btnCollapse.on('click', function () {
    $panel.toggleClass('js-panel-collapse');
});

