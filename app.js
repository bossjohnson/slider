$(document).ready(function() {
    // TODO: Add image to cells
    // TODO: Randomize starting positions
    // TODO: Add functionality to check puzzle completion
    var grid = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
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
