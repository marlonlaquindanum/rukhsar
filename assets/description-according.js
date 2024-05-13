document.querySelectorAll('.accordion-item h2').forEach((accordionToggle) => { 
  accordionToggle.addEventListener('click', () => { 
  const accordionItem = accordionToggle.parentNode; 
  const accordionContent = accordionToggle.nextElementSibling; 

        // If this accordion item is already open, close it.
   if (accordionContent.style.maxHeight) { 
       accordionContent.style.maxHeight = null; 
       accordionItem.classList.remove('active'); 
      } else {
        accordionContent.style.maxHeight = 100%; 
            accordionItem.classList.add('active'); 
        }
    });
});