const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

tabs.forEach(function(tab, index) {
  tab.addEventListener('click', function() {
    tabs.forEach(function(tab) {
      tab.classList.remove('tab_active');
    });

    tab.classList.add('tab_active');

    tabContents.forEach(function(tabContent) {
      tabContent.classList.remove('tab__content_active');
    });

    tabContents[index].classList.add('tab__content_active');
  });
});