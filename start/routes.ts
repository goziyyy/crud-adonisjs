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

import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async ({ view }) => {
  return view.render("welcome");
});

Route.get("/login", async ({ view }) => {
  return view.render("login");
});

Route.post("/login", "UsersController.login").as("login");

Route.get("/kelas", "KelasController.index");
Route.get("/kelas/:id", "KelasController.show").as("kelas.detail");

Route.post("/kelas/create", "KelasController.store").as("kelas.store");
Route.post("/kelas/update/:id", "KelasController.update").as("kelas.update");
Route.get("/kelas/delete/:id", "KelasController.delete").as("kelas.delete");

Route.post("/siswa/create", "KelasController.store").as("siswa.store");
Route.post("/siswa/update/:id", "KelasController.update").as("siswa.update");
Route.get("/siswa/delete/:id", "KelasController.delete").as("siswa.delete");



Route.get("/maya","MayasController.index");
Route.get("/mayas/:id", "MayasController.show").as("mayas.detail");
Route.post("/mayas/update/:id", "MayasController.update").as("mayas.update");
Route.post("/nayas/create", "MayasController.store").as("mayas.store");
Route.get("/mayas/delete/:id", "MayasController.delete").as("mayas.delete");


Route.post("/pengguna/create", "MayasController.store").as("pengguna.store");
Route.post("/pengguna/update/:id", "MayasController.update").as("pengguna.update");
Route.get("/pengguna/delete/:id", "MayasController.delete").as("pengguna.delete");
