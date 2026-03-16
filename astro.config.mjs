// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
// https://astro.build/config
export default defineConfig({
    integrations: [icon()],
    site: 'https://tu-usuario.github.io',
    base: '/nombre-de-tu-repo',
});
