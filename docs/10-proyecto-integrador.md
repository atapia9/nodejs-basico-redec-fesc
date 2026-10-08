# 10. Proyecto integrador final

Como cierre del curso, cada participante (o equipo de hasta 3 personas) desarrollará una API REST completa que integre los temas de las cinco sesiones. Este proyecto constituye la base de la evaluación final (20 puntos).

## Especificación mínima

- Elegir un dominio propio: por ejemplo, gestión de una biblioteca, control de gastos personales, catálogo de recetas, seguimiento de hábitos, etc.
- Definir al menos un recurso principal con operaciones CRUD completas (GET, GET por id, POST, PUT, DELETE).
- Persistir los datos en MongoDB o SQLite (no se acepta almacenamiento únicamente en memoria).
- Usar variables de entorno (dotenv) para toda configuración sensible.
- Incluir al menos un middleware personalizado (logging, validación o autenticación simple).
- Manejar errores de forma centralizada y devolver códigos de estado HTTP apropiados.
- Documentar en un archivo README.md cómo instalar dependencias, configurar variables de entorno y ejecutar el proyecto, junto con la lista de endpoints disponibles.

## Puntos extra (opcionales)

- Desplegar la API en Render, Railway o Vercel y compartir la URL pública.
- Agregar una vista renderizada con EJS para al menos una de las rutas.
- Incluir paginación o filtros mediante query params en el endpoint de listado.

## Criterios de evaluación del proyecto

| **Funcionalidad CRUD completa** | 40% |
| --- | --- |
| **Persistencia y configuración (BD + variables de entorno)** | 25% |
| **Calidad del código (organización, manejo de errores, middleware)** | 20% |
| **Documentación (README y claridad de instrucciones)** | 15% |
