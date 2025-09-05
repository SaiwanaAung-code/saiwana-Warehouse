import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { NgClass } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';
import { MenuModule } from 'primeng/menu'; // <-- Import MenuModule

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterModule,
    RippleModule,
    NgClass,
    DrawerModule,
    MenuModule // <-- Add MenuModule here
  ],
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.scss']
})
export class Navigation {
  sidebarVisible = false;
  drawerHeader = '';
  drawerItems: MenuItem[] = [];

  // Main navigation items with routerLink for active state tracking
  items: MenuItem[] = [
    { label: 'Inventory', icon: 'pi pi-inbox', routerLink: '/inventory' },
    { label: 'Sales', icon: 'pi pi-shopping-cart', routerLink: '/sales' },
    { label: 'Purchase', icon: 'pi pi-credit-card', routerLink: '/purchase' }
  ];

  // Sub-menu items for the drawer, using 'routerLink' property
  inventoryItems: MenuItem[] = [
    { label: 'Warehouse', routerLink: '/inventory/warehouse', icon: 'pi pi-fw pi-building', routerLinkActiveOptions: { exact: true } },
    { label: 'Transactions', routerLink: '/inventory/transactions', icon: 'pi pi-fw pi-list', routerLinkActiveOptions: { exact: true } },
  ];

  salesItems: MenuItem[] = [
    { label: 'New Sales Order', routerLink: '/sales/new-order', icon: 'pi pi-fw pi-plus', routerLinkActiveOptions: { exact: true } },
    { label: 'Customers', routerLink: '/sales/customers', icon: 'pi pi-fw pi-users', routerLinkActiveOptions: { exact: true } },
  ];

  purchaseItems: MenuItem[] = [
    { label: 'New Purchase Order', routerLink: '/purchase/new-order', icon: 'pi pi-fw pi-shopping-bag', routerLinkActiveOptions: { exact: true } },
    { label: 'Suppliers', routerLink: '/purchase/suppliers', icon: 'pi pi-fw pi-truck', routerLinkActiveOptions: { exact: true } },
  ];

  itemClick(item: MenuItem) {
    switch (item.label) {
      case 'Inventory':
        this.drawerHeader = 'Inventory Functions';
        this.drawerItems = this.inventoryItems;
        break;
      
      case 'Sales':
        this.drawerHeader = 'Sales Functions';
        this.drawerItems = this.salesItems;
        break;
        
      case 'Purchase':
        this.drawerHeader = 'Purchase Functions';
        this.drawerItems = this.purchaseItems;
        break;

      default:
        this.drawerItems = []; 
        this.drawerHeader = '';
        return;
    }
    
    this.sidebarVisible = true;
  }
}