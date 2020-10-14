// 1. Importar los módulos del router de angular
import { ModuleWithProviders } from '@angular/core';
// 2. Importar las clases para generar objetos de rutas y generar el módulo para establecer la configuración
import { Routes, RouterModule } from '@angular/router';

// 3. Importar los componentes que tendrán una página propia. Se toma el nombre de la clase del componente en [nombreDelComponente].component.ts
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { ErrorComponent } from './components/error/error.component';
import { ArticleComponent } from './components/article/article.component';
import { SearchComponent } from './components/search/search.component';
import { ArticleNewComponent } from './components/article-new/article-new.component';
import { ArticleEditComponent } from './components/article-edit/article-edit.component';

// 4. Se cargan los Arrays de rutas
const appRoutes: Routes = [
	{path: '', component: HomeComponent},
	{path: 'home', component: HomeComponent},
	{path: 'blog', component: BlogComponent},
	{path: 'blog/articulo/:id', component: ArticleComponent},
	{path: 'blog/crear', component: ArticleNewComponent},
	{path: 'blog/editar/:id', component: ArticleEditComponent},
	{path: 'buscar/:search', component: SearchComponent},
	{path: 'formulario', component: FormularioComponent},
	{path: 'peliculas', component: PeliculasComponent},
	// Prueba para pasar parámetros por la URL
	// Parámetro opcional:
	{path: 'pagina-de-pruebas', component: PaginaComponent},
	// Parámetro obligatorio:
	{path: 'pagina-de-pruebas/:nombre', component: PaginaComponent},
	{path: 'pagina-de-pruebas/:nombre/:apellido', component: PaginaComponent},
	// RUTA DE ERROR, debe ser siempre la última
	{path: '**', component: ErrorComponent}
];

// 5. Exportar el módulo
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

// 6. Se carga dentro del APP MODULE