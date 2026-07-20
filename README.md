# NOC App - Notification and Monitoring Center

Sistema de monitoreo y control de notificaciones con arquitectura limpia en Node.js + TypeScript.

## Descripción

NOC (Notification and Monitoring Center) es una aplicación que realiza verificaciones de URL, registra eventos y envía notificaciones por correo electrónico basadas en logs del sistema.

## Características

- 🔍 **Verificación de URLs** - Monitoreo de disponibilidad de servicios
- 📝 **Sistema de Logs** - Registro persistente de eventos en el sistema de archivos
- 📧 **Notificaciones por Email** - Envío automático de logs por correo
- ⏱️ **Tareas Programadas** - Ejecución de jobs con cron
- 🏛️ **Arquitectura Limpia** - Separación clara de capas (Domain, Application, Infrastructure)

## Requisitos

- Node.js 18+
- npm o yarn

## Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd 05-noc

# Instalar dependencias
npm install
```

## Configuración

1. Copiar el archivo `.env.example` a `.env`:
```bash
cp .env.example .env
```

2. Configurar las variables de entorno:
```env
PORT=3000
MAILER_SERVICE=gmail          # Servicio de correo (gmail, outlook, etc)
MAILEAR_EMAIL=tu@email.com    # Tu email
MAILER_SECRET_KEY=tuPassword  # Contraseña/token de aplicación
```

## Scripts Disponibles

```bash
# Desarrollo con recarga automática
npm run dev

# Compilar TypeScript
npm run build

# Compilar e iniciar la aplicación
npm start
```

## Estructura del Proyecto

```
src/
├── domain/              # Lógica de negocio
│   ├── entities/        # Entidades
│   ├── use-cases/       # Casos de uso
│   └── repository/      # Interfaces de repositorio
├── infrastructure/      # Implementaciones técnicas
│   ├── datasources/     # Fuentes de datos
│   └── repositories/    # Implementaciones de repositorios
└── presentation/        # Capa de presentación
    ├── server.ts        # Configuración del servidor
    ├── cron/            # Servicios de tareas programadas
    └── email/           # Servicios de email
```

## Uso

### Verificar URL

```typescript
const checkService = new CheckService(
    logRepository,
    () => console.log("✅ URL is ok"),
    (error) => console.error(`❌ ${error}`)
);

await checkService.execute("https://www.example.com");
```

### Enviar Logs por Email

```typescript
const sendEmailLogs = new SendEmailLogs(
    emailService,
    logRepository
);

await sendEmailLogs.execute(['recipient@example.com']);
```

## Tecnologías

- **TypeScript** - Lenguaje tipado
- **Node.js** - Runtime
- **Nodemailer** - Envío de emails
- **Cron** - Programación de tareas
- **dotenv** - Gestión de variables de entorno
- **ts-node-dev** - Desarrollo con TypeScript

## Licencia

ISC
