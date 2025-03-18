1. Crear cuenta en EmailJS https://www.emailjs.com
2. Dashboard → Email Services → Add New Service

3. Ve a https://myaccount.google.com/apppasswords
Selecciona "Correo" y "Otro dispositivo"
Copia la contraseña generada y úsala en EmailJS.


4. Usa SMTP en lugar de la API de Gmail
Configura EmailJS para usar SMTP:

En EmailJS, ve a Email Services → Add New Service → SMTP.
Introduce los datos de SMTP de Gmail:
SMTP Server: smtp.gmail.com
Port: 587
Username: Tu dirección de correo Gmail
Password: Usa la "Contraseña de aplicación" de Google
Use Secure Connection (TLS): Sí
Guarda los cambios y prueba de nuevo.
