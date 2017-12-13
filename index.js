const addProjectOnHoverHandlers = () => {
  const addOnHoverListener = (elem) => {
    const child = elem.lastElementChild;
    const link = elem.previousElementSibling;

    elem.addEventListener('mouseenter', () => {
      link.classList.add('project__link_hidden');
      elem.classList.add('project__caption_visible');
      child.classList.add('project__description_visible');
    });

    elem.addEventListener('mouseleave', () => {
      link.classList.remove('project__link_hidden');
      elem.classList.remove('project__caption_visible');
      child.classList.remove('project__description_visible');
    });
  }
  
  const captions = document.querySelectorAll('.project__caption')
  captions.forEach(addOnHoverListener)
}

addProjectOnHoverHandlers();