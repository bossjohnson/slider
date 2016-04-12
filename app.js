var setUpImage = function() {
    var $conH = $('#container').height();
    var $conW = $('#container').width();
    $('#d2').css('background-position', $conW * -0.33333 + 'px 0');
    $('#d3').css('background-position', $conW * -0.66666 + 'px 0');
    $('#d4').css('background-position', '0 ' + $conH * -0.33333 + 'px');
    $('#d5').css('background-position', $conW * -0.33333 + 'px ' + $conH * -0.33333 + 'px');
    $('#d6').css('background-position', $conW * -0.66666 + 'px ' + $conH * -0.33333 + 'px');
    $('#d7').css('background-position', '0 ' + $conH * -0.66666 + 'px');
    $('#d8').css('background-position', $conW * -0.33333 + 'px ' + $conH * -0.66666 + 'px');
};

$(document).ready(function() {
  setUpImage();
    // TODO: Add image to cells
    // TODO: Randomize starting positions
    // TODO: Add functionality to check puzzle completion


    $(window).on('resize', setUpImage);

    $('div.cell').on('click', function() {
        var $row = $(this).attr('class').match(/row\d/)[0][3];
        var $col = $(this).attr('class').match(/col\d/)[0][3];
        var $emptyRow = $('div.empty').attr('class').match(/row\d/)[0][3];
        var $emptyCol = $('div.empty').attr('class').match(/col\d/)[0][3];

        if ($row !== $emptyRow && $col !== $emptyCol) return;

        switch ($row - $emptyRow) {
            case -1:
                $(this).animate({
                    'top': '+=33.333%'
                }, 'fast');
                $(this).removeClass('row' + $row);
                $(this).addClass('row' + (Number($row) + 1));
                $('div.empty').removeClass('row' + $emptyRow);
                $('div.empty').addClass('row' + (Number($emptyRow) - 1));
                break;
            case 1:
                $(this).animate({
                    'top': '-=33.333%'
                }, 'fast');
                $(this).removeClass('row' + $row);
                $(this).addClass('row' + (Number($row) - 1));
                $('div.empty').removeClass('row' + $emptyRow);
                $('div.empty').addClass('row' + (Number($emptyRow) + 1));
                break;
        }

        switch ($col - $emptyCol) {
            case -1:
                $(this).animate({
                    'left': '+=33.333%'
                }, 'fast');
                $(this).removeClass('col' + $col);
                $(this).addClass('col' + (Number($col) + 1));
                $('div.empty').removeClass('col' + $emptyCol);
                $('div.empty').addClass('col' + (Number($emptyCol) - 1));
                break;
            case 1:
                $(this).animate({
                    'left': '-=33.333%'
                }, 'fast');
                $(this).removeClass('col' + $col);
                $(this).addClass('col' + (Number($col) - 1));
                $('div.empty').removeClass('col' + $emptyCol);
                $('div.empty').addClass('col' + (Number($emptyCol) + 1));
                break;
        }
    });
});
