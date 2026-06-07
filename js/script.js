document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('menuToggle');
  var nav = document.getElementById('mainNav');
  toggle && toggle.addEventListener('click', function () {
    if (nav.classList.contains('open')) nav.classList.remove('open');
    else nav.classList.add('open');
  });

  // close nav when clicking a link (mobile)
  nav && nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') nav.classList.remove('open');
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var hash = anchor.getAttribute('href');
      if (hash.length > 1) {
        e.preventDefault();
        var target = document.querySelector(hash);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Contact form handling with basic validation
  var form = document.getElementById('contactForm');
  form && form.addEventListener('submit', function (e) {
    e.preventDefault();
    var fd = new FormData(form);
    var name = (fd.get('name') || '').trim();
    var email = (fd.get('email') || '').trim();
    var phone = (fd.get('phone') || '').trim();
    if (!name || !email) {
      alert('Please provide your name and email.');
      return;
    }
    // simple email check
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      alert('Please provide a valid email address.');
      return;
    }
    // pretend to send
    alert('Thanks, ' + name + '! We will contact you at ' + email + (phone ? ' or ' + phone : '') + '.');
    form.reset();
  });
});

