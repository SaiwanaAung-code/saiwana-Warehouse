import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { NgClass } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';
import { MenuModule } from 'primeng/menu';
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    RouterModule,
    RippleModule,
    NgClass,
    DrawerModule,
    MenuModule
  ],
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.scss']
})
export class Navigation {
  sidebarVisible = false;
  drawerHeader = '';
  drawerItems: MenuItem[] = [];

  
  items: MenuItem[] = [
    { label: 'Inventory', icon: 'pi pi-inbox', routerLink: '/inventory' },
    { label: 'Sales', icon: 'pi pi-shopping-cart', routerLink: '/sales' },
    { label: 'Purchase', icon: 'pi pi-credit-card', routerLink: '/purchase' }
  ];

 
  inventoryItems: MenuItem[] = [
    { label: 'Warehouse', routerLink: '/inventory/warehouse', icon: 'pi pi-fw pi-warehouse', routerLinkActiveOptions: { exact: true } },
    { label: 'Transactions', routerLink: '/inventory/transactions', icon: 'pi pi-fw pi-list', routerLinkActiveOptions: { exact: true } },
    { label: 'AddItem', routerLink: '/inventory/transactions', icon: 'pi pi-fw pi-plus', routerLinkActiveOptions: { exact: true } },
  
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
        this.drawerHeader = 'Inventory';
        this.drawerItems = this.inventoryItems;
        break;
      
      case 'Sales':
        this.drawerHeader = 'Sales';
        this.drawerItems = this.salesItems;
        break;
        
      case 'Purchase':
        this.drawerHeader = 'Purchase';
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