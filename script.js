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

document.addEventListener("DOMContentLoaded", function () {
  const tipoCliente = document.getElementById("tipoCliente");
  const empresaFields = document.getElementById("empresa-fields");

  // Mostrar u ocultar los campos de empresa según la selección
  tipoCliente.addEventListener("change", function () {
    if (tipoCliente.value === "empresa") {
      empresaFields.classList.remove("hidden");
    } else {
      empresaFields.classList.add("hidden");
    }
  });

  // Manejar el envío del formulario
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Verifica que no haya un doble envío
    const submitButton = event.target.querySelector("button[type='submit']");
    submitButton.disabled = true;

    const tipo = tipoCliente.value.trim().toUpperCase();

    // Construimos los datos a enviar
    const data = {
      nombre: document.querySelector("[name='nombre']").value,
      tipoCliente: tipo || "NO ESPECIFICADO",
      telefono: document.querySelector("[name='telefono']").value,
      correo: document.querySelector("[name='correo']").value,
      comentario: document.querySelector("[name='comentario']").value
    };

    // Si el usuario seleccionó "Empresa", añadimos los datos extra
    if (tipo === "EMPRESA") {
      data.empresa = document.querySelector("[name='empresa']").value.trim() || "No especificado";
      data.facturacion = document.querySelector("[name='facturacion']").value || "No especificado";
    } else {
      data.empresa = "No aplica";
      data.facturacion = "No aplica";
    }

    // Enviar datos a EmailJS
    emailjs.send("service_wr180xa", "template_g4giydr", data).then(function (response) {
      alert("Mensaje enviado correctamente.");
      document.getElementById("contact-form").reset();
      empresaFields.classList.add("hidden"); // Ocultar los campos si se resetea
      submitButton.disabled = false; // Reactivar el botón de envío
    }, function (error) {
      alert("Error al enviar el mensaje. Inténtalo de nuevo.");
      console.error("Error:", error);
      submitButton.disabled = false; // Reactivar el botón de envío en caso de error
    });
  });
});
