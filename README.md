# ICBT HUB v0.8 — Bio Experimental / Bold Edition

Demo local acumulativa de Ingeniería Civil en Biotecnología UFRO. Implementación HTML/CSS/JS de la última propuesta oscura aprobada, con BIMO original y elementos gráficos independientes.

## Ejecutar
Desde esta carpeta: `python -m http.server 8000`. Abrir http://localhost:8000. No abrir index.html directamente con file://, ya que la malla se carga mediante fetch y módulos ES.

## Novedades v0.8
- Inicio Bold Edition con tipografía expresiva, BIMO original, microtexturas de marca, progreso real y accesos directos.
- Tema oscuro por defecto; tema claro y automático disponibles en Perfil. Las preferencias previas se conservan.
- Navegación inferior móvil y lateral en escritorio; adaptación desde 320 px.
- Accesos a calculadora, planificador y horario llevan a la sección correspondiente. El estado vacío de agenda abre el formulario para registrar una actividad.
- Se conservan los módulos y datos de v0.7: malla, agenda, comunidad, mentorías, plantillas, BioVault, trámites, oportunidades, favoritos, buscador, herramientas académicas y acceso de demostración.
- Recursos gráficos WebP optimizados. Microtexturas y Bio Gel son recortes del catálogo de marca para uso decorativo; no son originales de alta resolución. Las tipografías declaradas usan alternativas de sistema si no están instaladas.

## Archivos para editar
- `index.html`: estructura del inicio.
- `css/pages/bold-home.css`: composición y diseño responsive del inicio.
- `css/components/bold-shell.css`: tema y navegación compartidos.
- `js/modules/inicio.js`: saludo, progreso y agenda local.
- `assets/bold/`: recursos gráficos separados y optimizados.
- `docs/auditoria-v08.md`: comprobaciones y limitaciones.

## Límites
No hay backend, autenticación real, correos, permisos ni sincronización. Recordatorios son marcas locales, no notificaciones programadas. El horario requiere introducir bloques manualmente; no hay oferta oficial. La estimación de egreso no considera oferta ni dependencias. BioVault conserva su lógica. Malla de borrador no validado institucionalmente. No se han realizado pruebas con estudiantes reales ni auditoría completa WCAG.

## Pruebas
`node --experimental-default-type=module --test tests/*.mjs`
