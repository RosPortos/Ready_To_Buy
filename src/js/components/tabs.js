function initTabs() {
    $(".my-orders__tab").click(function() {
        $(this).addClass("active");
        $($(this).data('id')).addClass("active");

        $($(this).siblings()).removeClass("active");
        $($(this).data('id')).siblings().removeClass("active");
    });
}

initTabs();