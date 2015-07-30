/**
 * Created by xchou on 7/27/15.
 */
$(document).ready(function() {
    $("td").mouseover(function () {
        $(this).css(
            "background-color", "grey"
        );
    });
    $("td").mousemove(function () {
        $(this).css(
            "background-color", ""
        );
    });
});