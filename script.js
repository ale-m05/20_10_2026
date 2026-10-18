/* Corazones cayendo (CSS animation: más suave y ligero que setInterval) */
const contenedor = document.getElementById("hearts");
const emojis = ["❤️","💖","💗","💕"];
 
function crearCorazon(){
  if(!contenedor) return;
  const h = document.createElement("span");
  h.className = "heart";
  h.textContent = emojis[Math.floor(Math.random()*emojis.length)];
  h.style.left = Math.random()*100 + "vw";
  h.style.fontSize = Math.random()*20 + 14 + "px";
  const dur = Math.random()*6 + 8;
  h.style.animationDuration = dur + "s";
  contenedor.appendChild(h);
  setTimeout(() => h.remove(), dur*1000);
}
if(!matchMedia("(prefers-reduced-motion: reduce)").matches){
  const ritmo = document.body.dataset.ritmo || 900;
  setInterval(crearCorazon, ritmo);
}
 
/* Botón "No" que se escapa */
const no = document.getElementById("no");
if(no){
  const huir = () => {
    const zona = no.parentElement.getBoundingClientRect();
    const x = (Math.random() - .5) * Math.min(zona.width, 300);
    const y = (Math.random() - .5) * 140;
    no.style.transform = `translate(${x}px, ${y}px)`;
  };
  no.addEventListener("mouseenter", huir);
  no.addEventListener("touchstart", e => { e.preventDefault(); huir(); }, {passive:false});
  no.addEventListener("click", huir);
}
 
/* Visor de fotos */
const visor = document.getElementById("visor");
if(visor){
  const grande = visor.querySelector("img");
  document.querySelectorAll(".galeria img").forEach(img => {
    img.addEventListener("error", () => img.closest("figure").style.display = "none");
    img.addEventListener("click", () => { grande.src = img.src; visor.classList.add("abierto"); });
  });
  visor.addEventListener("click", () => visor.classList.remove("abierto"));
  document.addEventListener("keydown", e => { if(e.key === "Escape") visor.classList.remove("abierto"); });
}