// Personalization via URL ?name=Garima
(function(){
  const params = new URLSearchParams(window.location.search);
  const name = params.get('name') || 'Garima Sharma';
  document.getElementById('name').innerText = name;

  // Share URL display (URL with name param)
  const share = document.getElementById('shareUrl');
  const base = location.origin + location.pathname;
  share.textContent = base + '?name=' + encodeURIComponent(name);

  // Surprise button
  document.getElementById('surpriseBtn').addEventListener('click', function(){
    const original = document.querySelector('.message').innerText;
    document.querySelector('.message').innerText = '🎊 Wishing you lots of smiles and sweet moments!';
    setTimeout(()=>{ document.querySelector('.message').innerText = original; }, 3500);
    // small confetti effect
    launchConfetti();
  });

  // Auto-play music on user gesture; attempt to play once.
  const bg = document.getElementById('bgMusic');
  function tryPlay(){
    if(bg.paused){
      bg.play().catch(()=>{/* autoplay blocked; will play on first click */});
    }
    window.removeEventListener('click', tryPlay);
  }
  window.addEventListener('click', tryPlay);

  // Simple confetti using DOM
  function launchConfetti(){
    for(let i=0;i<22;i++){
      const el = document.createElement('div');
      el.className = 'confetti';
      el.style.left = Math.random()*90 + '%';
      el.style.background = ['#ff6fa3','#ffd6f0','#fff2a6','#ffb3d9'][Math.floor(Math.random()*4)];
      el.style.top = '-10px';
      document.body.appendChild(el);
      animateConfetti(el);
    }
  }
  function animateConfetti(el){
    const duration = 2200 + Math.random()*800;
    el.animate([
      {transform:'translateY(0) rotate(0deg)', opacity:1},
      {transform:'translateY(300px) rotate(320deg)', opacity:0}
    ], {duration:duration, easing:'cubic-bezier(.2,.7,.3,1)'});
    setTimeout(()=>el.remove(), duration+50);
  }

})();
