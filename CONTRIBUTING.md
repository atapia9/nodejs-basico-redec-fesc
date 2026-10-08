# Cómo contribuir

Gracias por ayudar a mejorar este material. Antes de proponer cambios, ten en cuenta el principio que rige el repositorio.

## Principio: fidelidad al manual

El Markdown de `docs/` es una conversión fiel de la versión 3 del manual en Word. La fuente de verdad es ese manual: aquí se convierte, no se edita.

- No reescribas, resumas ni «mejores» el texto de `docs/`.
- Si encuentras un error técnico, una inconsistencia o algo desactualizado, regístralo en [docs/NOTAS_DE_REVISION.md](docs/NOTAS_DE_REVISION.md) con la ubicación exacta y una propuesta, o abre un *issue*. El texto original se conserva hasta que se actualice el manual en Word.
- No inventes enlaces, versiones, comandos ni videos. Los enlaces del Anexo 12 se extraen del manual tal cual.

## Flujo de trabajo

1. Crea una rama a partir de `main`.
2. Haz commits pequeños y descriptivos con [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/): `docs:`, `feat:`, `fix:`, `chore:` o `ci:`.
3. Abre un *pull request* describiendo qué cambia y por qué.

## Antes de enviar

```bash
nvm use                      # versión de Node.js indicada en .nvmrc
npm run check:ejemplos       # node --check sobre ejemplos/
npx markdownlint-cli2 "**/*.md"
python3 scripts/verificar_fidelidad.py   # requiere los .docx fuente en fuentes/
```

El último comando solo se puede ejecutar si cuentas con los `.docx` originales (la carpeta `fuentes/` no se publica).

## Qué no se debe subir

- Los `.docx` fuente (carpeta `fuentes/`).
- La clave de respuestas de la evaluación (`evaluacion/_clave-instructor.md`).
- Credenciales, tokens, archivos `.env`, correos o teléfonos personales, y rutas locales.

## Estilo

- Español claro y neutro.
- Nombres de archivo en minúsculas y con guiones.
- Sin emojis en los documentos.
- El manual mezcla CommonJS y ES Modules a propósito: no unifiques los ejemplos.
