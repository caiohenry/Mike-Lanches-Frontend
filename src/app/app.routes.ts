import { Routes } from '@angular/router';
import { NavigationPageComponent } from './modules/login/pages/navigation-page/navigation-page.component';
import { HomePageComponent } from './modules/login/pages/home-page/home-page.component';
import { ContactPageComponent } from './modules/login/pages/contact-page/contact-page.component';
import { MenuPageComponent } from './modules/login/pages/menu-page/menu-page.component';
import { LoginPageComponent } from './modules/login/pages/login-page/login-page.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Início',
        component: NavigationPageComponent,
        children: [
            {
                path: 'home',
                title: 'Home',
                component: HomePageComponent,
            },
            {
                path: 'menu',
                title: 'Cardápio',
                component: MenuPageComponent,
            },
            {
                path: 'contact',
                title: 'Contato',
                component: ContactPageComponent
            },
            {
                path: 'login',
                title: 'Login',
                component: LoginPageComponent
            }
        ]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
