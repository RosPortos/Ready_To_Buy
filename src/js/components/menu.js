function toggleMenu() {
    $(".show-menu").click(function() {
        $(".menu").addClass("active");
    });

    $(".menu__close").click(function() {
        $(".menu").removeClass("active");
    });
}

toggleMenu();