# 🌍 Web App de Reservas de Hotel y Excursiones

Una aplicación completa para planificar viajes, reservar hoteles, seleccionar excursiones y realizar pagos en línea con Stripe, MercadoPago y PayPal.

## 🚀 Funcionalidades

- Formulario de reserva con:
  - Nombre, email
  - Cantidad de adultos y niños
  - Fechas de entrada y salida
  - Comentarios personalizados
- Selección de excursiones disponibles
- Métodos de pago en línea:
  - Stripe
  - MercadoPago
  - PayPal
- Panel de administración protegido con autenticación JWT
  - Agregar, editar o eliminar excursiones

---

## 🧱 Stack

- **Backend:** Node.js + Express
- **Base de datos:** PostgreSQL
- **Autenticación:** JWT
- **Pagos:** Stripe, MercadoPago, PayPal
- **Frontend:** Vanilla JS + HTML embebido

---

## ⚙️ Instalación local

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Crear archivo `.env`

Duplica el archivo `.env.example`:

```bash
cp .env.example .env
```

Completa las variables con tus credenciales reales.

### 4. Ejecutar en desarrollo

```bash
npm run dev
```

La app correrá en `http://localhost:3000`

---

## ☁️ Despliegue en Render

Render usa `render.yaml` y `Dockerfile` incluidos en este proyecto.

### Pasos:

1. Sube este repositorio a GitHub
2. Entra a [Render](https://render.com) y crea un nuevo Web Service
3. Selecciona este repo, Render detectará automáticamente la configuración
4. Render creará también una base de datos PostgreSQL

---

## 📂 Estructura del proyecto

```
├── index.js            # Punto de entrada del backend
├── routes/             # Rutas API (reservas, excursiones, login, pagos)
├── db.js               # Conexión a PostgreSQL
├── auth.js             # Middleware JWT
├── Dockerfile          # Para despliegue Docker en Render
├── render.yaml         # Infraestructura como código para Render
├── package.json
└── .env.example
```

---

## 🧑‍💻 Autor

Desarrollado por [Tu Nombre] ✨

---

## 🛡️ Licencia

MIT
