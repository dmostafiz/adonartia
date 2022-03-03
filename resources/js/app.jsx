import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import '../css/app.css'

import { InertiaProgress } from '@inertiajs/progress'
import { Inertia } from '@inertiajs/inertia'
import nProgress from 'nprogress'
import { ChakraProvider } from '@chakra-ui/react'

InertiaProgress.init({
  // The delay after which the progress bar will
  // appear during navigation, in milliseconds.
  // delay: 1000,

  // The color of the progress bar.
  color: '#F54135',

  // Whether to include the default NProgress styles.
  includeCSS: true,

  // Whether the NProgress spinner will be shown.
  // showSpinner: true,
  height: '5px'
})


Inertia.on('start', () => nProgress.start())

Inertia.on('finish', () => nProgress.done())

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    render(
      <ChakraProvider>
        <App {...props} />
      </ChakraProvider>

      , el)
  },
})