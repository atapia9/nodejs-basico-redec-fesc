# 1. Presentación del curso

Este manual acompaña el curso presencial “Node.js Básico”, impartido dentro del programa de Educación Continua de la Facultad de Estudios Superiores Cuautitlán (FESC-UNAM) a través de la Red de Educación Continua (REDEC). El curso está dirigido a personal del área de informática que ya domina JavaScript en un nivel intermedio y desea extender ese conocimiento al desarrollo del lado del servidor.

A lo largo de cinco sesiones de cuatro horas cada una, el curso recorre el camino natural de aprendizaje de Node.js: primero se instala y comprende el entorno de ejecución, después se domina el ecosistema de paquetes (NPM) y los módulos nativos, se profundiza en el modelo de concurrencia basado en el Event Loop, se construyen servidores web y APIs con Express, y finalmente se conecta la aplicación a una base de datos y se prepara para su despliegue en un servicio en la nube.

El manual está pensado como material de referencia durante y después del curso: cada sesión incluye el marco teórico necesario, ejemplos de código comentados, y ejercicios prácticos graduados en dificultad para reforzar lo aprendido.

# 2. Objetivo general y objetivos por sesión

## Objetivo general

Desarrollar en los participantes las habilidades fundamentales para utilizar Node.js en el desarrollo de aplicaciones del lado del servidor, comprendiendo su arquitectura basada en eventos, el manejo de asincronía, el uso de módulos y paquetes del ecosistema NPM, así como la creación de servidores web y APIs básicas mediante Express, integrando persistencia de datos y buenas prácticas para el despliegue de aplicaciones.

## Objetivos específicos por sesión

- Sesión 1: Instalar y configurar el entorno de Node.js, y comprender su arquitectura asíncrona orientada a eventos.
- Sesión 2: Gestionar dependencias con NPM y utilizar los módulos core del sistema (Path, FS, OS).
- Sesión 3: Comprender el Event Loop y dominar los patrones asíncronos (callbacks, promesas, async/await, EventEmitter, streams).
- Sesión 4: Construir servidores web y APIs REST utilizando el módulo HTTP y el framework Express.
- Sesión 5: Conectar una aplicación Node.js a una base de datos, proteger credenciales con variables de entorno, depurar el código y desplegar la aplicación en un servicio en la nube.

# 3. Metodología y evaluación

En cada tema se propone la revisión de diferentes materiales visuales, lecturas teóricas y la realización de actividades prácticas para reforzar el aprendizaje. Cada sesión combina exposición teórica, demostraciones en vivo (live coding) y ejercicios individuales o por parejas, siguiendo un esquema aproximado de 40% teoría y 60% práctica.

## Rubros de evaluación

| **Evaluación diagnóstica** | Aplicada al inicio del curso, no pondera para la calificación final. |
| --- | --- |
| **Asistencia** | 40 puntos |
| **Actividades de aprendizaje** | 40 puntos |
| **Evaluación final** | 20 puntos |
| **Total** | 100 puntos |

**Para acreditar la capacitación, la calificación mínima aprobatoria es 8.00 en una escala de 0 a 10, con dos decimales.**

# 4. Requisitos previos

Para aprovechar al máximo el curso, se espera que los participantes cuenten con:

- Dominio de JavaScript en nivel intermedio: funciones flecha, destructuring, promesas y conceptos básicos de asincronía.
- Uso básico de la terminal de comandos (navegación de directorios, ejecución de comandos).
- Fundamentos de redes, en particular el protocolo HTTP (métodos, cabeceras, códigos de estado).
- Un editor de código instalado, preferentemente Visual Studio Code.
- Cuenta de GitHub (recomendable, para el proyecto integrador y control de versiones).
