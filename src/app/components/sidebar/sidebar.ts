import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {SidebarItem, SidebarItemType} from './sidebar-item/sidebar-item';

const sidebarItems: SidebarItemType[] = [
  { routerLink: "mcQuestions", text: "Multiple Choice"},
  { routerLink: "openQuestions", text: "Open Questions"},
  { routerLink: "codingQuestions", text: "Coding Exercises"}
]

@Component({
  selector: 'app-sidebar',
  imports: [
    RouterLink,
    SidebarItem
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {
  items: SidebarItemType[] = sidebarItems
  activeItem: SidebarItemType = sidebarItems[0]

  setActiveItem(item: SidebarItemType): void {
    this.activeItem = item;
  }
}
