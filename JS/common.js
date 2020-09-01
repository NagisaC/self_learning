$(function () {
  /*   $('[data-url$=".html"]').click(function () {
      location.href = $(this).attr('data-url');
    });
   */
  $('[data-url$=".html"]').click(function () {
    /*               alert($(this).attr('data-url'));
    */

    if ($(this).attr('data-url') == 'BR02.html') {

      alert('開発中です。');
      return false;

    } else if ($(this).attr('data-url') == 'index.html') {

      location.href = '../' + $(this).attr('data-url');

    } else {

      location.href = 'system/' + $(this).attr('data-url');

    }

  });


});
