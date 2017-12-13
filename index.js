const addProjectOnHoverHandlers = () => {
  const addOnHoverListener = (elem) => {
    const child = elem.lastElementChild;

    elem.addEventListener('mouseenter', () => {
      elem.classList.add('project__caption_visible');
      child.classList.add('project__description_visible');
    });

    elem.addEventListener('mouseleave', () => {
      elem.classList.remove('project__caption_visible');
      child.classList.remove('project__description_visible');
    });
  }
  
  const captions = document.querySelectorAll('.project__caption')
  captions.forEach(addOnHoverListener)
}

addProjectOnHoverHandlers();