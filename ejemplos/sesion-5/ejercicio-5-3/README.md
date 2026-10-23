# Ejercicio 5.3 — Depurar un error: calculadora de totales

Material de apoyo para el Ejercicio 5.3 de la Sesión 5 (sección 5.3, «Debugging: herramientas de inspección»). El script `calculadora-totales.js` calcula el total de un carrito de compras, pero tiene un error. El objetivo es encontrarlo con el depurador, no con `console.log`.

## 1. Ejecuta el script y observa el síntoma

Desde la raíz del repositorio:

```bash
node ejemplos/sesion-5/ejercicio-5-3/calculadora-totales.js
```

Salida:

```text
Subtotal: $07001802500
IVA (16%): $1120288400
Total: $070018025001120288400
```

El subtotal esperado es 350 × 2 + 180 × 1 + 2500 × 1 = **3380**. Algo falla dentro de `calcularTotal`.

## 2. Depura con VS Code

1. Abre la carpeta del repositorio en VS Code y abre `calculadora-totales.js`.
2. Coloca un breakpoint en la línea 11 (`total = total + item.precio * item.cantidad;`): haz clic en el margen izquierdo, junto al número de línea. Aparece un punto rojo.
3. Inicia la depuración con **F5** (menú *Ejecutar → Iniciar depuración*). Si VS Code pregunta qué depurador usar, elige **Node.js**.
   - Si prefieres una configuración fija, crea `.vscode/launch.json` como en la sección 5.3 del manual, pero con `"program": "${file}"` para que depure el archivo abierto:

     ```jsonc
     {
       "version": "0.2.0",
       "configurations": [
         {
           "type": "node",
           "request": "launch",
           "name": "Depurar archivo actual",
           "program": "${file}",
           "console": "integratedTerminal"
         }
       ]
     }
     ```

4. Cuando la ejecución se detenga en la línea 11, revisa el panel **Variables** (sección *Local*): busca `total` e `item`.
5. En el panel **Inspección** (*Watch*), agrega dos expresiones: `total` y `typeof total`.
6. Pulsa **F5** (*Continuar*) para avanzar a la siguiente vuelta del ciclo. Repite y anota los valores.
   - En la tercera pausa no uses F5: el programa terminaría sin volver a detenerse. Usa **F10** (*Step Over*, paso a paso sin entrar en funciones) hasta llegar a la línea 13 (`return total;`) y revisa ahí el valor final de `total`.
7. En la **Consola de depuración** puedes evaluar expresiones mientras está en pausa, por ejemplo `typeof total` o `item.precio * item.cantidad`.

## 3. Alternativa: depurador de línea de comandos

Si no usas VS Code, Node.js incluye un depurador en la terminal:

```bash
node inspect ejemplos/sesion-5/ejercicio-5-3/calculadora-totales.js
```

La ejecución se pausa en la primera línea. Escribe estos comandos en el prompt `debug>`:

| Comando | Qué hace |
| --- | --- |
| `sb(11)` | Coloca un breakpoint en la línea 11. |
| `watch('total')` | Muestra el valor de `total` cada vez que se pausa. |
| `c` | Continúa hasta el siguiente breakpoint. |
| `n` | Avanza a la siguiente línea. |
| `exec typeof total` | Evalúa una expresión en el punto actual. |
| `.exit` | Sale del depurador. |

Después de la tercera pausa en la línea 11, usa `n` dos veces para llegar a la línea 13 (`return total;`) y ver el valor final de `total`.

También puedes usar `node --inspect-brk` y conectarte desde Chrome en `chrome://inspect`, como se explica en la sección 5.3.

## 4. Qué deberías observar

En cada pausa en la línea 11 (antes de ejecutarla) y en la línea 13, después del ciclo:

| Momento | `typeof total` | `total` |
| --- | --- | --- |
| Antes de la 1.ª vuelta | `'string'` | `'0'` |
| Antes de la 2.ª vuelta | `'string'` | `'0700'` |
| Antes de la 3.ª vuelta | `'string'` | `'0700180'` |
| Línea 13 (`return total;`) | `'string'` | `'07001802500'` |

Preguntas para guiar el análisis:

- ¿De qué tipo debería ser `total`? ¿De qué tipo es?
- ¿Qué hace el operador `+` cuando uno de los operandos es un string?
- ¿Por qué `iva` sí es un número, pero `totalConIva` vuelve a salir mal? (Pista: compara cómo se comportan `*` y `+` con un string).

## 5. Corrige y documenta

1. Corrige el error en `calculadora-totales.js`.
2. Agrega un comentario que explique la **causa raíz** (no solo qué cambiaste, sino por qué fallaba).
3. Vuelve a ejecutar el script. La salida correcta es:

   ```text
   Subtotal: $3380
   IVA (16%): $540.8
   Total: $3920.8
   ```

Reto opcional: el IVA aparece como `540.8`. Investiga `Number.prototype.toFixed()` para mostrar siempre dos decimales.
