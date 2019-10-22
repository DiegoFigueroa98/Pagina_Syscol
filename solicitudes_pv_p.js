$(document).ready(function(){
    $('button').click(function(){
        var activeTab = $(this).attr('href');
        $('.secciones article:first').show();
        $(activeTab).modal('show');
		return false;
    });
});