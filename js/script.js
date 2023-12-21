$(function () {
  // fullpage
  $('#fullpage').fullpage({
    // 1. 앵커 설정
    anchors: ['sec1', 'sec2', 'sec3', 'sec4'],
    // navigation: true,

    // 2. menu적용(인디케이터 커스텀)
    menu: '#myMenu',

    // 3.필요 옵션 적용
    // 스크롤 속도 : 기본값 700
    scrollingSpeed: 1400,

    // 고정 시킬 요소
    fixedElements: '#header',

    // 영역 콘텐츠의 세로 정렬
    verticalCentered: false,
  });

  // btn-top버튼을 클릭했을 때
  $('.btn-top').on('click', function (e) {
    e.preventDefault();

    // fullpage mathod : 원하는 영역 이동
    $.fn.fullpage.moveTo(1);
  });

  // btn-up버튼을 클릭했을 때 한 영역 위로
  $('.btn-up').on('click', function () {
    $.fn.fullpage.moveSectionUp();
  });
  // btn-down버튼을 클릭했을 때 한 영역 아래로
  $('.btn-down').on('click', function () {
    $.fn.fullpage.moveSectionDown();
  });

  $('.btn-silent').on('click', function () {
    $.fn.fullpage.silentMoveTo(1);
  });
});
