import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { NgClass } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterModule, RippleModule, NgClass, DrawerModule],
  templateUrl: './navigation.html',
  styleUrls: ['./navigation.scss']
})
export class Navigation {
  sidebarVisible = false;
  drawerItems: { label: string; link: string; icon: string; }[] = [];
  drawerHeader = '';

  
    items: MenuItem[] = [
    { label: 'Inventory', icon: 'pi pi-box', routerLink: '/inventory' },
    { label: 'Sales', icon: 'pi pi-shopping-cart', routerLink: '/sales' },
    { label: 'Purchase', icon: 'pi pi-cart-arrow-down', routerLink: '/purchase' }
  ];

  inventoryItems = [
    { label: 'Warehouse', link: '/inventory/warehouse', icon: 'pi pi-fw pi-warehouse' },
    { label: 'Transactions', link: '/inventory/transactions', icon: 'pi pi-fw pi-list' },
    { label: 'Add Item', link: '/inventory/Add Item', icon: 'pi pi-fw pi-plus' },
  ];

  salesItems = [
    { label: 'New Sales Order', link: '/sales/new-order', icon: 'pi pi-fw pi-plus-circle' },
    { label: 'Customers', link: '/sales/customers', icon: 'pi pi-fw pi-users' },
  ];

  purchaseItems = [
    { label: 'New Purchase Order', link: '/purchase/new-order', icon: 'pi pi-fw pi-shopping-bag' },
    { label: 'Suppliers', link: '/purchase/suppliers', icon: 'pi pi-fw pi-truck' },
  ];

  itemClick(event: Event, item: MenuItem) {
    event.preventDefault();

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

  onDrawerItemClick() {
    this.sidebarVisible = false;

  }
}