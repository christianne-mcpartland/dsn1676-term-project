var $tabs = $('.tabs');
var $panels = $('.panel');
var $nav = $('nav');
var $navBtn = $('.nav-button');

$navBtn.on ('click', 'a', function () {
    $nav.toggleClass ('nav-show');
});

$tabs.on('click', 'a', function (e) {
    e.preventDefault();
    var id = $(this).attr('href'); 
    
    $panels.filter(':not([hidden])').attr('hidden', true);
    $(id).removeAttr('hidden');
    
    $tabs.find('.js-current').removeClass('js-current');
    $(this).addClass('js-current');
    
});

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