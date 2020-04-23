$(document).ready(function () {
    var buttonWrapper = $('.button-wrapper'),
        wrapper = $('wrapper');

    buttonWrapper.on('click', () => {
        wrapper.toggleClass('wrapper--active');
    });

    
})