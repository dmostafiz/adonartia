/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/
import { Inertia } from '@inertiajs/inertia'
import cloudinary from '@ioc:Adonis/Addons/Cloudinary'
import Route from '@ioc:Adonis/Core/Route'


Route.get('/', async ({ inertia }) => {
  return inertia.render('Home')
})

Route.get('/about', async ({ inertia }) => {
  return inertia.render('About')
})


Route.get('/upload', async ({ inertia }) => {
  return inertia.render('Upload')
})

Route.post('/upload', async ({ request, response, inertia } : HttpContextContract) => {


    try {
      
      // const upload = await cloudinary.upload(file, file.clientName)
      const file = request.file('avatar')
      if (file) {
        const upload = await cloudinary.upload(file, file.clientName)
          console.log('Uoloadable file: ', upload)
          console.log('Inertia Response: ', inertia)
          response.redirect()
          .withQs({ sort: 'id' }) // 👈 custom
          .back()
      }
  
  
    } catch (error) {
        console.log('Upload Error: ', error)
    }


})