$(document).ready(function () {

    let points = 0;

    $('.rating__a').each(function (index,element) {     
         $(element).click(function (){
            $(element).addClass('rating__a--active')
            console.log(index);
            points += index + 1;
         })
    });
    
    $('.rating__button').click(function () { 
        $('.rating__end').addClass('rating__end--active');
        $('.rating__start').addClass('rating__start--hide');
        $('.rating__select').html(points);
    });
});