import { Component } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'base/menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent {
  items: MenuItem[] = [
    {
      label: 'File',
      icon: 'fa fa-file-o',
      items: [
        {
          label: 'New',
          icon: 'pi pi-plus',
          items: [
            {label: 'Project'},
            {label: 'Other'},
          ]
        },
        {label: 'Open'},
        {separator: true},
        {label: 'Quit'}
      ]
    },
    {
      label: 'Edit',
      icon: 'fa fa-edit',
      items: [
        {label: 'Undo', icon: 'fa fa-mail-forward'},
        {label: 'Redo', icon: 'fa fa-mail-reply'}
      ]
    },
    {
      label: 'Help',
      icon: 'fa fa-question',
      items: [
        {
            label: 'Contents'
        },
        {
          label: 'Search',
          icon: 'fa fa-search',
          items: [
            {
              label: 'Text',
              items: [
                {
                  label: 'Workspace'
                }
              ]
            },
            {
              label: 'File'
            }
        ]}
      ]
    },
    {
      label: 'Actions',
      icon: 'fa fa-gear',
      items: [
        {
          label: 'Edit',
          icon: 'fa fa-refresh',
          items: [
            {label: 'Save', icon: 'fa fa-save'},
            {label: 'Update', icon: 'fa fa-save'},
          ]
        },
        {
          label: 'Other',
          icon: 'fa fa-phone',
          items: [
            {label: 'Delete', icon: 'fa fa-minus'}
          ]
        }
      ]
    },
    {
        label: 'Quit', icon: 'fa fa-minus'
    }
];
}