$(document).ready(() => {

    let margin = 0;
    setInterval(() => {

        margin += 100;
        if (margin > 600) {
            margin = 0;
        }

        $('#qf-first').css(
            {
                "margin-left": `-${margin}%`,
            }
        );
    }, 5 * 1000);

})