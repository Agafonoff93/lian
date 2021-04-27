//меню бургер
// const iconMenu = document.querySelector('.menu__icon');
// if (iconMenu) {
//     const menuBody = document.querySelector('.menu__body')
//     iconMenu.addEventListener("click", function (e){
// document.body.classList.toggle('_lock');
// iconMenu.classList.toggle('_active');
// menuBody.classList.toggle('_active');
//     });
// };

$(document).ready(function () {
  $(".tabs__item").click(function (e) {
    e.preventDefault();

    $(".tabs__item").removeClass("tabs__item_active");
    $(".tabs__block").removeClass("tabs__block_active");

    $(this).addClass("tabs__item_active");
    $($(this).attr("href")).addClass("tabs__block_active");
  });



  $('.tabs__item:first').click();
});


// $(document).ready(function () {
//     $('.tabs-triggers__item').click(function (e) {
//       e.preventDefault();
  
//       $('.tabs-triggers__item').removeClass('tabs-triggers__item--active');
//       $('.tabs-content__item').removeClass('tabs-content__item--active');
  
//       $(this).addClass('tabs-triggers__item--active');
//       $($(this).attr('href')).addClass("tabs-content__item--active");
//     });
  
  
  
//     $('.tabs__item:first').click();
//   });