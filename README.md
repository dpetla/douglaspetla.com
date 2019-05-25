# [douglaspetla.com](https://douglaspetla.com/)

My personal blog. Project started with the [Angular Universal](https://github.com/angular/universal) using the [Angular CLI](https://github.com/angular/angular-cli). Theme based on [clean Bootstrap blog theme](https://github.com/BlackrockDigital/startbootstrap-clean-blog) with small tweaks.

---

### Installation

- `npm install` or `yarn`

### Development (Client-side only rendering)

- run `npm run start` which will start `ng serve`

### Production (also for testing SSR/Pre-rendering locally)

**`npm run build:ssr && npm run serve:ssr`** - Compiles your application and spins up a Node Express to serve your Universal application on `http://localhost:4000`.

**`npm run build:prerender && npm run serve:prerender`** - Compiles your application and prerenders your applications files, spinning up a demo http-server so you can view it on `http://localhost:8080`
**Note**: To deploy your static site to a static hosting platform you will have to deploy the `dist/browser` folder, rather than the usual `dist`
