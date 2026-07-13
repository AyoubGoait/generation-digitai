document.querySelector('#course-menu').addEventListener('click',()=>document.querySelector('#course-nav').classList.toggle('open'));
document.querySelector('.workflow-form').addEventListener('submit',event=>{
  event.preventDefault();
  const form=event.currentTarget;
  const name=form.querySelector('.student-name').value.trim();
  const phone=form.querySelector('.student-phone').value.trim();
  const format=form.querySelector('.student-format').value;
  const level=form.querySelector('.student-level').value;
  const message=`Bonjour Génération digitAi, je souhaite m'inscrire à la formation « Créer des workflows et automatisations avec l'IA ».

Nom : ${name}
WhatsApp : ${phone}
Format souhaité : ${format}
Niveau actuel : ${level}`;
  window.open(`https://wa.me/2290164620061?text=${encodeURIComponent(message)}`,'_blank','noopener');
});
