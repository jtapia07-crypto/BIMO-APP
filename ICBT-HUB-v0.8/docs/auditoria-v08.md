# Auditoría v0.8 — Bold Edition

## Cambios implementados
Inicio reconstruido como interfaz nativa, no imagen plana. Mascota del kit original (BIMO señalando a la izquierda), texturas extraídas del catálogo y composición responsiva. La cabecera, navegación y tokens del tema oscuro se aplican a las 16 páginas; la composición detallada de cada módulo se conserva. Se mantienen rutas y datos curriculares. Accesos a calculadora, planificador, horario y formulario de agenda apuntan a destinos internos específicos.

## Validación
- Pruebas Node del modelo curricular y herramientas académicas: superadas.
- Sintaxis JavaScript: correcta.
- Inspección estática de rutas locales HTML y CSS, IDs duplicados y 236 recursos de caché PWA: sin incidencias.
- Chromium: el acceso HTTP local fue bloqueado por la política del entorno (ERR_BLOCKED_BY_ADMINISTRATOR). No se completaron pruebas de navegación interactiva.
- Render visual estático aislado en Chromium con HTML/CSS y recursos embebidos, sin scripts: comprobado a 320, 390, 430, 768, 1024 y 1440 px; ancho de documento y cuerpo igual al viewport. Capturas de 390 y 1440 px inspeccionadas. Los datos 0% y estado vacío reproducen la vista inicial esperada, no una sesión ejecutada con almacenamiento real.
- Pendientes: recorridos funcionales en navegador, pruebas de tema claro, accesibilidad integral, rendimiento en móviles reales, PWA y validación con estudiantes.

## Decisiones de diseño
Se tomó la última referencia oscura como base y se preservó la opción clara. Se priorizó legibilidad frente a reproducir los efectos de la maqueta de manera literal. Los recursos decorativos del catálogo son pequeños y no se presentan como archivos maestros. Se conservan los colores del sistema Bio Experimental, aunque el verde puede verse menos neón que en el render conceptual. Las fuentes tienen alternativas locales; no se incorporaron archivos de fuentes. BioVault no se amplió.
