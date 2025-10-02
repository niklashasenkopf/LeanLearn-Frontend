import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";

export type SidebarItemType = {
  routerLink: string,
  text: string
}

@Component({
  selector: 'app-sidebar-item',
   imports: [
      RouterLink
   ],
  templateUrl: './sidebar-item.html',
  styleUrl: './sidebar-item.css'
})
export class SidebarItem {
   @Input() routerLink: string = ""
   @Input() text: string = ""
   @Input() isActive: boolean = false;
}
