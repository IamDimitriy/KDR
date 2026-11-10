(() => {
  const eyes = document.querySelector('.eyes');
  const pupils = [...document.querySelectorAll('.pupil')];
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let frame = 0, reset;
  function neutral() { pupils.forEach(p => p.style.transform = ''); }
  document.addEventListener('pointermove', event => {
    if (motion.matches || event.pointerType === 'touch') return;
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const rect = eyes.getBoundingClientRect();
      const dx = event.clientX - rect.left - rect.width / 2;
      const dy = event.clientY - rect.top - rect.height / 2;
      const a = Math.atan2(dy, dx), distance = Math.min(Math.hypot(dx, dy) / 70, 1);
      pupils.forEach(p => p.style.transform = `translate(${Math.cos(a)*7*distance}px,${Math.sin(a)*8*distance}px)`);
    });
  }, {passive:true});
  document.addEventListener('pointerleave', neutral);
  motion.addEventListener('change', neutral);
  eyes.addEventListener('click', () => {
    clearTimeout(reset);
    eyes.classList.add('wink');
    reset = setTimeout(() => eyes.classList.remove('wink'), 450);
  });
})();
