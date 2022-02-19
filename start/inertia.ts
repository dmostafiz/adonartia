/*
|--------------------------------------------------------------------------
| Inertia Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/

import Inertia from '@ioc:EidelLev/Inertia';


Inertia.share({
  errors: (ctx) => {
    return ctx.session.flashMessages.get('errors');
  },
}).version(() => Inertia.manifestFile('public/assets/manifest.json'));




// View.global('ssr', (page) => {

//     return createInertiaApp({
//       resolve: (name: string) => require(`../resources/js/Pages/${name}.jsx`).default,
//       page,
//       render: ReactDOMServer.renderToString,
//       setup: ({ App, props }) => React.createElement(App,props),
      
//     })

// })