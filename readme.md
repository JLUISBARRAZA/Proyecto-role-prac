Email Manager 📧
Un sistema simple y eficiente para guardar y registrar direcciones de correo electrónico utilizando JSON como base de datos local.
📋 Descripción
Email Manager es una aplicación que permite gestionar una base de datos de correos electrónicos de forma sencilla. Los datos se almacenan en formato JSON, proporcionando una solución ligera y portable para el manejo de contactos por email.
✨ Características

✅ Guardar emails: Almacena direcciones de correo electrónico
✅ Registrar información: Asocia datos adicionales a cada email
✅ Almacenamiento JSON: Base de datos local en formato JSON
✅ Validación de emails: Verifica formato válido de direcciones
✅ Búsqueda rápida: Encuentra emails registrados
✅ Exportación/Importación: Respaldo y restauración de datos

🚀 Instalación
Prerrequisitos

Node.js (versión 14 o superior)
npm o yarn

Pasos de instalación
bash# Clona el repositorio
git clone https://github.com/tu-usuario/email-manager.git

# Navega al directorio del proyecto
cd email-manager

# Instala las dependencias
npm install

# o si usas yarn
yarn install
💻 Uso
Configuración inicial
bash# Ejecuta el proyecto
npm start

# o para desarrollo
npm run dev
Ejemplos de uso
Guardar un email
javascript// Ejemplo básico
const emailManager = require('./email-manager');

// Registrar nuevo email
emailManager.saveEmail({
  email: "usuario@ejemplo.com",
  nombre: "Juan Pérez",
  fecha_registro: new Date().toISOString()
});
Buscar emails
javascript// Buscar por email específico
const usuario = emailManager.findEmail("usuario@ejemplo.com");

// Listar todos los emails
const todosLosEmails = emailManager.getAllEmails();
📁 Estructura del proyecto
email-manager/
├── src/
│   ├── email-manager.js      # Lógica principal
│   ├── validators.js         # Validaciones de email
│   └── utils.js             # Funciones auxiliares
├── data/
│   └── emails.json          # Base de datos JSON
├── tests/
│   └── email-manager.test.js # Pruebas unitarias
├── package.json
├── README.md
└── .gitignore
🗃️ Formato de datos
Los emails se almacenan en el siguiente formato JSON:
json{
  "emails": [
    {
      "id": "1",
      "email": "usuario@ejemplo.com",
      "nombre": "Juan Pérez",
      "fecha_registro": "2024-01-15T10:30:00.000Z",
      "activo": true,
      "tags": ["cliente", "newsletter"]
    }
  ],
  "metadata": {
    "total_emails": 1,
    "ultima_actualizacion": "2024-01-15T10:30:00.000Z"
  }
}
🔧 API/Funciones disponibles
FunciónDescripciónParámetrossaveEmail(data)Guarda un nuevo email{email, nombre, tags}findEmail(email)Busca un email específicostring: emailgetAllEmails()Obtiene todos los emails-updateEmail(email, data)Actualiza información de un emailemail, {datos}deleteEmail(email)Elimina un email del registrostring: emailexportData()Exporta todos los datos-importData(jsonData)Importa datos desde JSONobject: jsonData
🧪 Pruebas
bash# Ejecutar todas las pruebas
npm test

# Ejecutar pruebas con cobertura
npm run test:coverage

# Ejecutar pruebas en modo watch
npm run test:watch
📝 Ejemplo completo
javascriptconst EmailManager = require('./src/email-manager');

// Inicializar el gestor
const manager = new EmailManager('./data/emails.json');

// Registrar emails
manager.saveEmail({
  email: "maria@empresa.com",
  nombre: "María González",
  tags: ["cliente", "premium"]
});

manager.saveEmail({
  email: "carlos@startup.com", 
  nombre: "Carlos Rodríguez",
  tags: ["desarrollador", "freelance"]
});

// Buscar y mostrar
console.log(manager.findEmail("maria@empresa.com"));
console.log(`Total de emails: ${manager.getAllEmails().length}`);
🤝 Contribución

Fork el proyecto
Crea una rama para tu feature (git checkout -b feature/nueva-funcionalidad)
Commit tus cambios (git commit -am 'Añade nueva funcionalidad')
Push a la rama (git push origin feature/nueva-funcionalidad)
Abre un Pull Request

📄 Licencia
Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.
👨‍💻 Autor
Tu Nombre

GitHub: @tu-usuario
Email: tu-email@ejemplo.com

🐛 Reporte de Bugs
Si encuentras algún bug o tienes sugerencias, por favor:

Revisa si ya existe un issue similar
Crea un nuevo issue con:

Descripción clara del problema
Pasos para reproducirlo
Comportamiento esperado vs actual
Capturas de pantalla (si aplica)



📚 Recursos adicionales

Documentación de JSON
Validación de emails con regex
Node.js File System