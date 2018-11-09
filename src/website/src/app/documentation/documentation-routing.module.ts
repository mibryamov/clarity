import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../../environments/environment';

import { DocumentationComponent } from './documentation.component';
import { ComponentStatusComponent } from './component-status/component-status.component';

const documentationRoutes: Routes = [
  {
    path: '',
    component: DocumentationComponent,
    data: {
      bodyClass: 'layout-documentation',
      browserTitle: 'Documentation',
    },
    children: [
      {
        path: 'get-started',
        loadChildren: './get-started/get-started.module#GetStartedModule',
      },
      {
        path: '',
        component: ComponentStatusComponent,
        data: {
          bodyClass: 'page-documentation',
          browserTitle: 'Documentation',
        },
      },
      {
        path: 'alerts',
        loadChildren: './demos/alert/alerts.demo.module#AlertsDemoModule',
        data: {
          bodyClass: 'page-alerts',
          browserTitle: 'Alerts',
        },
      },
      {
        path: 'app-layout',
        loadChildren: './demos/app-layout/app-layout.demo.module#AppLayoutDemoModule',
        data: {
          bodyClass: 'page-app-layout',
          browserTitle: 'Application Layout',
        },
      },
      {
        path: 'badges',
        loadChildren: './demos/badges/badges.demo.module#BadgesDemoModule',
        data: {
          bodyClass: 'page-badges',
          browserTitle: 'Badges',
        },
      },
      {
        path: 'buttons',
        loadChildren: './demos/buttons/buttons.demo.module#ButtonsDemoModule',
        data: {
          bodyClass: 'page-buttons',
          browserTitle: 'Buttons',
        },
      },
      {
        path: 'button-group',
        loadChildren: './demos/button-group/button-group.demo.module#ButtonGroupDemoModule',
        data: {
          bodyClass: 'page-button-group',
          browserTitle: 'Button Group',
        },
      },
      {
        path: 'cards',
        loadChildren: './demos/card/cards.demo.module#CardsDemoModule',
        data: {
          bodyClass: 'page-cards',
          browserTitle: 'Cards',
        },
      },
      {
        path: 'checkboxes',
        loadChildren: './demos/checkboxes/checkboxes.demo.module#CheckboxesDemoModule',
        data: {
          bodyClass: 'page-checkboxes',
          browserTitle: 'Checkboxes',
        },
      },
      {
        path: 'color',
        loadChildren: './demos/color/color.demo.module#ColorDemoModule',
        data: {
          bodyClass: 'page-color',
          browserTitle: 'Color Palette',
        },
      },
      {
        path: 'datagrid',
        loadChildren: './demos/datagrid/datagrid.demo.module#DatagridDemoModule',
        data: {
          bodyClass: 'page-datagrid',
          browserTitle: 'Datagrid',
        },
      },
      {
        path: 'datepicker',
        loadChildren: './demos/datepicker/datepicker.demo.module#DatepickerDemoModule',
        data: {
          bodyClass: 'page-datepicker',
          browserTitle: 'Datepicker',
        },
      },
      {
        path: 'dropdowns',
        loadChildren: './demos/dropdown/dropdown.demo.module#DropdownDemoModule',
        data: {
          bodyClass: 'page-dropdowns',
          browserTitle: 'Dropdowns',
        },
      },
      {
        path: 'forms',
        loadChildren: './demos/forms/forms.demo.module#FormsDemoModule',
        data: {
          bodyClass: 'page-forms',
          browserTitle: 'Forms',
        },
      },
      {
        path: 'grid',
        loadChildren: './demos/grid/grid.demo.module#GridDemoModule',
        data: {
          bodyClass: 'page-grid',
          browserTitle: 'Grid',
        },
      },
      {
        path: 'header',
        loadChildren: './demos/header/header.demo.module#HeaderDemoModule',
        data: {
          bodyClass: 'page-header',
          browserTitle: 'Header',
        },
      },
      {
        path: 'input',
        loadChildren: './demos/input/input.demo.module#InputDemoModule',
        data: {
          bodyClass: 'input',
          browserTitle: 'Inputs',
        },
      },
      {
        path: 'labels',
        loadChildren: './demos/labels/labels.demo.module#LabelsDemoModule',
        data: {
          bodyClass: 'page-labels',
          browserTitle: 'Labels',
        },
      },
      {
        path: 'lists',
        loadChildren: './demos/lists/lists.demo.module#ListsDemoModule',
        data: {
          bodyClass: 'page-lists',
          browserTitle: 'Lists',
        },
      },
      {
        path: 'login',
        loadChildren: './demos/login/login.demo.module#LoginDemoModule',
        data: {
          bodyClass: 'page-login',
          browserTitle: 'Login Page',
        },
      },
      {
        path: 'modals',
        loadChildren: './demos/modal/modal.demo.module#ModalDemoModule',
        data: {
          bodyClass: 'page-modals',
          browserTitle: 'Modals',
        },
      },
      {
        path: 'navigation',
        loadChildren: './demos/nav/nav.demo.module#NavDemoModule',
        data: {
          bodyClass: 'page-navigation',
          browserTitle: 'Navigation',
        },
      },
      {
        path: 'password',
        loadChildren: './demos/password/password.demo.module#PasswordDemoModule',
        data: {
          bodyClass: 'page-password',
          browserTitle: 'Password',
        },
      },
      {
        path: 'progress',
        loadChildren: './demos/progress-bars/progress-bars.demo.module#ProgressBarsDemoModule',
        data: {
          bodyClass: 'page-progress',
          browserTitle: 'Progress Bars',
        },
      },
      {
        path: 'radio',
        loadChildren: './demos/radio/radio.demo.module#RadioDemoModule',
        data: {
          bodyClass: 'page-radio',
          browserTitle: 'Radio Buttons',
        },
      },
      {
        path: 'select',
        loadChildren: './demos/select/select.demo.module#SelectDemoModule',
        data: {
          bodyClass: 'page-select-boxes',
          browserTitle: 'Select',
        },
      },
      {
        path: 'sidenav',
        loadChildren: './demos/sidenav/sidenav.demo.module#SidenavDemoModule',
        data: {
          bodyClass: 'page-sidenav',
          browserTitle: 'Sidenav',
        },
      },
      {
        path: 'signposts',
        loadChildren: './demos/signposts/signpost.demo.module#SignpostDemoModule',
        data: {
          bodyClass: 'page-signposts',
          browserTitle: 'Signposts',
        },
      },
      {
        path: 'spinners',
        loadChildren: './demos/spinners/spinners.demo.module#SpinnersDemoModule',
        data: {
          bodyClass: 'page-spinners',
          browserTitle: 'Spinners',
        },
      },
      {
        path: 'stack-view',
        loadChildren: './demos/stack-view/stack-view.demo.module#StackViewDemoModule',
        data: {
          bodyClass: 'page-stack-view',
          browserTitle: 'Stack View',
        },
      },
      {
        path: 'tables',
        loadChildren: './demos/tables/tables.demo.module#TablesDemoModule',
        data: {
          bodyClass: 'page-tables',
          browserTitle: 'Tables',
        },
      },
      {
        path: 'tabs',
        loadChildren: './demos/tabs/tabs.demo.module#TabsDemoModule',
        data: {
          bodyClass: 'page-tables',
          browserTitle: 'Tabs',
        },
      },
      {
        path: 'textarea',
        loadChildren: './demos/textarea/textarea.demo.module#TextareaDemoModule',
        data: {
          bodyClass: 'page-textarea',
          browserTitle: 'Textarea',
        },
      },
      {
        path: 'themes',
        loadChildren: './demos/themes/themes.demo.module#ThemesDemoModule',
        data: {
          bodyClass: 'page-tables',
          browserTitle: 'Clarity Themes',
        },
      },
      {
        path: 'toggle-switches',
        loadChildren: './demos/toggles/toggles.demo.module#TogglesDemoModule',
        data: {
          bodyClass: 'page-toggle-switches',
          browserTitle: 'Toggle Switches',
        },
      },
      {
        path: 'tooltips',
        loadChildren: './demos/tooltips/tooltips.demo.module#TooltipsDemoModule',
        data: {
          bodyClass: 'page-tooltips',
          browserTitle: 'Tooltips',
        },
      },
      {
        path: 'tree-view',
        loadChildren: './demos/tree-view/tree-view.demo.module#TreeDemoModule',
        data: {
          bodyClass: 'page-tree-view',
          browserTitle: 'Tree View',
        },
      },
      {
        path: 'typography',
        loadChildren: './demos/typography/typography.demo.module#TypographyDemoModule',
        data: {
          bodyClass: 'page-typography',
          browserTitle: 'Typography',
        },
      },
      {
        path: 'vertical-nav',
        loadChildren: './demos/vertical-nav/vertical-nav.demo.module#VerticalNavDemoModule',
        data: {
          bodyClass: 'page-vertical-nav',
          browserTitle: 'Vertical Nav',
        },
      },
      {
        path: 'wizards',
        loadChildren: './demos/wizard/wizard.demo.module#WizardDemoModule',
        data: {
          bodyClass: 'page-wizards',
          browserTitle: 'Wizards',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(documentationRoutes)],
  exports: [RouterModule],
})
export class DocumentationRoutingModule {}
