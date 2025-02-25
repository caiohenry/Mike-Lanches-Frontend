import { Routes } from '@angular/router';
import { NavigationPageComponent } from './modules/login/pages/navigation-page/navigation-page.component';
import { HomePageComponent } from './modules/login/pages/home-page/home-page.component';
import { ContactPageComponent } from './modules/login/pages/contact-page/contact-page.component';
import { MenuPageComponent } from './modules/login/pages/menu-page/menu-page.component';
import { LoginPageComponent } from './modules/login/pages/login-page/login-page.component';
import { AccessPageComponent } from './modules/access/pages/access-page/access-page.component';
import { authGuard } from './core/guards/auth.guard';
import { DashboardPageComponent } from './modules/dashboard/pages/dashboard-page/dashboard-page.component';
import { ClientPageComponent } from './modules/client/pages/client-page/client-page.component';
import { ItemMenuComponent } from './components/item-menu/item-menu.component';
import { ItemMenuPageComponent } from './modules/item-menu/pages/item-menu-page/item-menu-page.component';
import { DeliveryDriverPageComponent } from './modules/delivery-driver/pages/delivery-driver-page/delivery-driver-page.component';

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
    {
        path: '',
        title: 'Início',
        canActivate: [authGuard],
        component: AccessPageComponent,
        canActivateChild: [authGuard], 
        children: [
            {
                path: 'dashboard',
                title: 'Dashboard',
                component: DashboardPageComponent
            },
            {
                path: 'client',
                title: 'Cliente',
                component: ClientPageComponent
            },
            {
                path: 'item-menu',
                title: 'Cardápio',
                component: ItemMenuPageComponent
            },
            {
                path: 'delivery-driver',
                title: 'Entregadores',
                loadComponent: () =>
                    import(
                      './modules/delivery-driver/pages/delivery-driver-page/delivery-driver-page.component'
                    ).then((m) => m.DeliveryDriverPageComponent),
            },
            {
                path: 'delivery-driver-form',
                title: 'Cadastrar Entregador',
                loadComponent: () =>
                    import(
                      './modules/delivery-driver/pages/delivery-driver-form/delivery-driver-form.component'
                    ).then((m) => m.DeliveryDriverFormComponent),
            }
        ]
        
    },
    {path: '**', redirectTo: '', pathMatch: 'full' }
    
];
