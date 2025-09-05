import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { NgClass } from '@angular/common';
import { DrawerModule } from 'primeng/drawer'

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, RippleModule, NgClass, DrawerModule],
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.scss']
})
export class Navigation {
  drawerVisible = false;
  items: MenuItem[] = [
    { label: 'Inventory', icon: 'pi pi-inbox', routerLink: '/inventory' },
    { label: 'Sales', icon: 'pi pi-shopping-cart', routerLink: '/sales' },
    { label: 'Purchase', icon: 'pi pi-credit-card', routerLink: '/purchase' }
  ];

  drawerPages = [
    { label: 'Page 1', link: '/page1' },
    { label: 'Page 2', link: '/page2' },
    { label: 'Page 3', link: '/page3' }
  ];
  itemClick(event: Event) {
    console.log('Menu item clicked:', event);
  }
}
