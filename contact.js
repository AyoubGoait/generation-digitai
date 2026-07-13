document.querySelector('.contact-form').addEventListener('submit',event=>{event.preventDefault();const form=event.currentTarget;const name=form.querySelector('[name="name"]').value.trim();const phone=form.querySelector('[name="phone"]').value.trim();const subject=form.querySelector('[name="subject"]').value;const message=form.querySelector('[name="message"]').value.trim();const text=`Bonjour Génération digitAi,

Nom : ${name}
WhatsApp : ${phone}
Sujet : ${subject}

Message : ${message}`;window.open(`https://wa.me/2290164620061?text=${encodeURIComponent(text)}`,'_blank','noopener')});
