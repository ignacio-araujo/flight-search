var waySelected = 1;
    
$(document).ready ( function(){
    var wid = $(this);
    if (wid.width() > 600) {
    $('#inputCitiesContainer').addClass('input-group');
    $('#inputDatesContainer').addClass('input-group');  
    }
    else {
    $('#inputCitiesContainer').removeClass('input-group');
    $('#inputDatesContainer').removeClass('input-group');  
    }
});
$(window).on('resize', function() {
    var wid = $(this);
    if (wid.width() > 600) {
    $('#inputCitiesContainer').addClass('input-group');
    $('#inputDatesContainer').addClass('input-group');  
    }
    else {
    $('#inputCitiesContainer').removeClass('input-group');
    $('#inputDatesContainer').removeClass('input-group');  
    }
});
$('#invertCities').on('click', function(event) {
    var input1 = $('#inputOrigin').val();
    var input2 = $('#inputDestination').val();
    $('#inputOrigin').val(input2);
    $('#inputDestination').val(input1);
});
$('#invertDates').on('click', function(event) {
    var input1 = $('#inputDepartureDate').val();
    var input2 = $('#inputArrivalDate').val();
    $('#inputDepartureDate').val(input2);
    $('#inputArrivalDate').val(input1);
});
function changeRadio(button){
    if(button == 1){
        $('#inputDestination').css("display","block");
        $('#invertCities').css("display","block");
        $('#invertDates').css("display","block");
        $('#inputArrivalDate').css("display","block");
        waySelected = 1;
    }
    if(button == 2){
        $('#inputDestination').css("display","none");
        $('#invertCities').css("display","none");
        $('#invertDates').css("display","none");
        $('#inputArrivalDate').css("display","none");
        waySelected = 2;
    }
}
var todayDate = new Date();
$('[data-toggle="popover-date1"]').popover();
$('[data-toggle="popover-date2"]').popover();    
$('[data-toggle="popover-date1"]').popover().on('shown.bs.popover', function () {
    $('[data-toggle="popover-date2"]').popover('hide');
    $('#calendar1').datepicker({
        todayHighlight: false,
        startDate: todayDate,
        endDate: "+12m",
        format: "yyyy-mm-dd"
    }).on('changeDate', function (event) {
        $('#inputDepartureDate').val(event.format());
    });
}); 
$('[data-toggle="popover-date2"]').popover().on('shown.bs.popover', function () {
    $('[data-toggle="popover-date1"]').popover('hide');
    $('#calendar2').datepicker({
        todayHighlight: false,
        startDate: todayDate,
        endDate: "+12m",
        format: "yyyy-mm-dd"
    }).on('changeDate', function (event) {
        $('#inputArrivalDate').val(event.format());
    });
}); 
$('html').on('click', function(e) {
    if (typeof $(e.target).data('original-title') == 'undefined') {
    $('[data-original-title]').popover('hide');
    }
});
$('[data-toggle="tooltip"]').tooltip();