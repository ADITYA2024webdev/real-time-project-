// JS interactivity scripts
// Mobile menu toggle
const mobileBtn = document.getElementById('mobileBtn');
const mobileMenu = document.getElementById('mobileMenu');
if(mobileBtn){
mobileBtn.addEventListener('click',()=>{
mobileMenu.classList.toggle('hidden');
});
}

// Simple contact form handler (static — replace with backend integration)
const contactForm = document.getElementById('contactForm');
if(contactForm){
contactForm.addEventListener('submit', (e)=>{
e.preventDefault();
// gather values (in production send to backend)
const msg = document.getElementById('formMsg');
msg.classList.remove('hidden');
contactForm.reset();
setTimeout(()=> msg.classList.add('hidden'), 4000);
});
}

// Small intersection observer for reveal animations
const io = new IntersectionObserver((entries)=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.classList.add('translate-y-0','opacity-100');
io.unobserve(e.target);
}
});
},{threshold:0.12});

document.querySelectorAll('.reveal').forEach(el=>{
el.classList.add('opacity-0','translate-y-6','transition','duration-700');
io.observe(el);
});