var $btnExpand = $(".btn-expand");
var $togglePanel = $('.toggle-panel');
var $eyeBalls = $('.snowy2');

$btnExpand.on('click', function() {
    $togglePanel.toggleClass('toggle-panel-expand');
});

var $btnCollapseH = $('.btn-collapse-expand-h');
var $panelH = $('.panel-h');

$btnCollapseH.on('click', function () {
    $panelH.toggleClass('js-panel-collapse-h');
});

var $btnCollapse = $('.btn-collapse-expand-d');
var $panel = $('.panel-d');

$btnCollapse.on('click', function () {
    $panel.toggleClass('js-panel-collapse-d');
});

var $btnCollapseB = $('.btn-collapse-expand-b');
var $panelB = $('.panel-b');

$btnCollapseB.on('click', function () {
    $panelB.toggleClass('js-panel-collapse-b');
});

$eyeBalls.on('click', function () {
    $eyeBalls.toggleClass('js-active');
});

$('.d-b').localScroll();

$('.u-b').localScroll();

$('.habitat').localScroll();