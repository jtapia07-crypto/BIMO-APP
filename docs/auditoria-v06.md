# Auditoría UX v0.6
Base: v0.5. Revisión estática de 12 páginas y módulos; intento de ejecución Chromium/Playwright bloqueado por ERR_BLOCKED_BY_ADMINISTRATOR tanto en localhost como en origen de prueba. No se realizaron pruebas humanas ni se certifica WCAG.

| Hallazgo | Prioridad | Corrección |
|---|---|---|
| Portada extensa y accesos enterrados | Alta | Inicio editorial con CTA directo a malla y listas por tarea |
| Carrera ambiguo y navegación dependiente de JS | Alta | Malla y enlaces HTML nativos |
| Detalle curricular fuera del área visible | Alta | Enfoque y desplazamiento al detalle seleccionado |
| Búsqueda curricular vacía sin explicación | Media | Mensaje sin resultados |
| Cambio a relaciones con búsqueda activa | Media | Limpieza de búsqueda y enfoque del árbol |
| Progreso demo 42% inconsistente con malla | Alta | Mostrar progreso real local |
| Guardado fallido anunciado como éxito | Alta | Mensaje explícito de fallo |
| Formularios sociales dominan la pantalla | Media | Compositor integrado expandible y acciones específicas |
| Edición sin cancelar | Media | Acción cancelar |
| Administración visible como destino estudiantil | Media | Trasladada a perfil, etiquetada local |
| Tarjetas y radios repetitivos | Media | Superficies editoriales y radios contenidos |

Validado: sintaxis JS, 12 HTML sin rutas locales faltantes ni IDs duplicados, pruebas de modelo curricular (67 elementos, 330 SCT, dependencias y almacenamiento). Pendiente: interacción real, capturas, contraste integral, responsive, PWA y autenticación. No se modifica la lógica de BioVault ni el JSON curricular.
