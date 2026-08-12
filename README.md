# HogarPro - Landing Page & Lead Generator

Una landing page moderna y de alto rendimiento diseñada para empresas de servicios para el hogar. Construida con Next.js y Tailwind CSS, esta interfaz captura clientes potenciales y se comunica con una API REST personalizada para enviar notificaciones en tiempo reala al equipo de ventas.

🔗 *[Ver Demo en Vivo (Vercel)](https://frontend-lead-two.vercel.app/)

# Características Principales

- Diseño Moderno (SaaS Look): Interfaz limpia, profesional y orientada a la conversión.
- Componentización React: Arquitectura modular (`SiteHeader`, `Hero`, `WhyUs`, `ContactForm`, `SiteFooter`).
- Formulario Integrado: Captura de datos (Nombre, Teléfono, Email, Servicio) con validación de UX.
- Responsive Design: 100% adaptable a dispositivos móviles, tablets y escritorio.
- Notificaciones en Tiempo Real: Conectado a un backend externo que dispara alertas instantáneas a Telegram.

# Stack Tecnológico

*Frontend:
- [Next.js](https://nextjs.org/) (App Router)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- Despliegue: [Vercel](https://vercel.com/)

* Backend (Ecosistema Integrado):
- La página consume una API construida en Python (FastAPI) alojada en Render.
- Manejo de notificaciones vía *Telegram Bot API*.

# Arquitectura del Sistema

El flujo de captura de leads funciona de la siguiente manera:
1. El usuario completa el formulario en la landing page (Vercel).
2. El frontend realiza una petición HTTP POST asíncrona enviando un JSON al backend.
3. El backend en Render procesa la solicitud, estructura el mensaje y se comunica con la API de Telegram.
4. El especialista recibe el lead instantáneamente en su celular para coordinar la visita.
5. El usuario es redirigido a una página de agradecimiento.

Autor
Desarrollado por Thomas Jerez.

GitHub: @ThomyJerez

LinkedIn: https://www.linkedin.com/in/thomas-jerez/



