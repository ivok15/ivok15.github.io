# FCP Technologies

Sitio React + Vite listo para publicar en GitHub Pages.

## Desarrollo local

Instalar dependencias:

```bash
pnpm install
```

Levantar el servidor local:

```bash
pnpm run dev
```

Compilar la version final:

```bash
pnpm run build
```

Previsualizar la version compilada:

```bash
pnpm run preview
```

## Publicacion en GitHub Pages

Este repo apunta a `ivok15.github.io`, asi que se publica en:

```text
https://ivok15.github.io/
```

El workflow `.github/workflows/deploy.yml` compila el sitio y lo publica automaticamente cada vez que subis cambios a la rama `main`.

En GitHub, verificar una sola vez:

1. Entrar al repo.
2. Ir a `Settings` > `Pages`.
3. En `Build and deployment`, elegir `GitHub Actions`.
4. Subir los cambios a `main`.
