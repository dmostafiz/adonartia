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

Route.post('/upload', async ({ request, inertia } : HttpContextContract) => {

  const avatar = request.file('avatar');

  console.log('Avatar ref from controller: ', avatar)

  // const body = {};

  // request.multipart.field((name, value) => {
  //   body[name] = value;
  // });

  // console.log('Body: ', body)


  // request.multipart.onFile('avatar', {}, async (file) => {
  //   // skipping the stream for demo
  //   // await request.multipart.process()

  //   // console.log(request.all())

  //   console.log('Uoloadable file: ', file)
  //   // part.resume()
  // })


  // await request.multipart.process()


  // request.multipart.onFile('file', {}, async (part) => {
  //   // skipping the stream for demo
  //   await request.multipart.process()

  //   const file = part

  //   console.log('Uoloadable file: ', file)
  //   // part.resume()
  // })

  // return file

  // if (file) {
  //   await cloudinary.upload(file, file.clientName)
  // }

  // request.multipart.onFile('avatar', {}, (part) => {
  //   cloudinary.uploadStream(part)
  // })

  // await request.multipart.process()
})