const tooltipElements = document.querySelectorAll('[title]');

const tooltip = document.createElement('div');
tooltip.classList.add('tooltip');
document.body.appendChild(tooltip);

tooltipElements.forEach(element => {
  element.addEventListener('click', e => {
    e.preventDefault();
    tooltip.textContent = element.getAttribute('title');
    const elementRect = element.getBoundingClientRect();
    tooltip.style.left = `${elementRect.left}px`;
    tooltip.style.top = `${elementRect.bottom}px`;
    tooltip.classList.add('tooltip_active');
  });

  element.addEventListener('blur', e => {
    tooltip.classList.remove('tooltip_active');
  });
});