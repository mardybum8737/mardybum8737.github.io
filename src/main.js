// window.alert('안녕!');
// window.document.querySelector();
//window는 브라우저에서 제공하는 객체, 즉 글로벌 객체

// document는 문서 전체에 대한 정보를 갖고 있는 객체
// quearySelector를 이용해 css와 같은 방식으로 클래스를 선택

// const headerRect = header.getBoundingClientRect();
// console.log(headerRect);
// const headerHeight = headerRect.height;

// Header에 페이지 아래로 스크롤시 다크 스타일링 적용
const header = document.querySelector('.header');
const headerHeight = header.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > headerHeight) {
    header.classList.add('header--dark');
  } else {
    header.classList.remove('header--dark');
  }
});
