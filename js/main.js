'use strict';

   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
   return new bootstrap.Tooltip(tooltipTriggerEl)
   })

  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  // console.log(open);

  open.addEventListener('click', () => {
     overlay.classList.add('show');
     open.classList.add('hide');
  })

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
 })

