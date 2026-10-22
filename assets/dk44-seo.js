/* DoKitly B44: progressive enhancements only; content remains visible without JS. */
(()=>{const sections=[...document.querySelectorAll('.dk44-seo')];if(!sections.length)return;
for(const section of sections){const targets=[...section.querySelectorAll('.reveal,.chart')];targets.forEach(el=>el.classList.add('dk44-reveal'));
if(!('IntersectionObserver' in window)||matchMedia('(prefers-reduced-motion: reduce)').matches){targets.forEach(el=>el.classList.add('dk44-visible'));continue;}
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.remove('dk44-await');e.target.classList.add('dk44-visible');io.unobserve(e.target)}}),{rootMargin:'0px 0px 50px 0px',threshold:.03});
targets.forEach(el=>{if(el.getBoundingClientRect().top>innerHeight+40)el.classList.add('dk44-await');io.observe(el)});
}})();