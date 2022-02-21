let star = `<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 0.5L8.58746 7.415L0.959961 8.5175L6.47996 13.9025L5.17496 21.5L12 17.915L18.825 21.5L17.52 13.9025L23.04 8.525L15.4125 7.415L12 0.5Z"/>
</svg>`;

let rating = document.querySelectorAll(".rate-yo");

if (rating.length != 0) {
    $(".rate-yo").rateYo({
        starWidth: "24px",
        normalFill: "#D6D6D6",
        ratedFill: "#EFDD05",
        spacing   : "5px",
        "starSvg": star
    });
}