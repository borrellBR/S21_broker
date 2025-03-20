const phrases = [
  'Solo empresas que invierten <b>a partir de 50 mil euros</b> anuales en seguros.',
  'Pólizas <b> a medida</b>, precios <b>ajustados</b> y asesoramiento <b>diario</b>.',
  'Servicio altamente <b>personalizado</b>.',
  'Somos asociados de <b>SPASEI</b>, consultora con 40 años de experiencia en <b>riesgos empresariales</b>.',
  'El <b>100%</b> de nuestros clientes siguen con nosotros desde el primer día.',
  'Nos ubicamos en <b>C/Can Pi 15, Barcelona</b>.',
  'Formulario de contacto'
];

let currentIndex = 0;
const phraseContainer = document.getElementById('phrase-container');
const phraseText = document.getElementById('phrase');
const formContainer = document.getElementById('form-container');

function updateContent() {
  if (currentIndex < phrases.length - 1) {
    phraseText.innerHTML = phrases[currentIndex];
    phraseContainer.style.display = 'block';
    formContainer.style.display = 'none';
  } else {
    phraseContainer.style.display = 'none';
    formContainer.style.display = 'block';
  }
}

document.getElementById('next-btn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % phrases.length;
  updateContent();
});

document.getElementById('prev-btn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + phrases.length) % phrases.length;
  updateContent();
});

// setInterval(() => {
//   currentIndex = (currentIndex + 1) % phrases.length;
//   updateContent();
// }, 150000);

updateContent();


document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();

  emailjs.send("service_wr180xa", "template_g4giydr", {
    nombre: document.querySelector("[name='nombre']").value,
    apellidos: document.querySelector("[name='apellidos']").value,
    empresa: document.querySelector("[name='empresa']").value,
    facturacion: document.querySelector("[name='facturacion']").value,
    telefono: document.querySelector("[name='telefono']").value,
    correo: document.querySelector("[name='correo']").value,
    comentario: document.querySelector("[name='comentario']").value
  }).then(function (response) {
    alert("Mensaje enviado correctamente.");
    document.getElementById("contact-form").reset();
  }, function (error) {
    alert("Error al enviar el mensaje. Inténtalo de nuevo.");
    console.error("Error:", error);
  });
});
