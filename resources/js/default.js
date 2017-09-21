$(".modal_ajax").click(function() {
    $.ajax({
        url: $(this).attr("href"),
        dataType: "html"
    }).done(function(response) {
        var data = $(response).find("#main_container");
        $("#modal_ajax").remove();
        $("body").append('<div class="modal hide fade" id="modal_ajax"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h3></h3></div><div class="modal-body"></div><div class="modal-footer"><a href="#" class="btn" data-dismiss="modal">Close</a></div></div>');
        $("#modal_ajax").modal();
        $("#modal_ajax").on("shown", function () {
            //Heading
            if(data.find("h1").length > 0) {
                $("#modal_ajax .modal-header h3").html(data.find("h1").html());
            }
            //Body
            data.find("h1").remove();
            $("#modal_ajax .modal-body").html(data.html());
        });
    });
    return false;
});