---
title: API
toc: true
---

An accordion allows generic content to be collapsed and allows users to expand to show more detail.

## Classes {.section-header}

### ClrAccordion

#### Selector & Basic Usage

```html
<clr-accordion></clr-accordion>
```

#### Properties

| Name                   | Type                           | Description                                                                                                                                                                     |
| ---------------------- | ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| clrAccordionMultiPanel | @Input\<boolean\>              | An input that takes a boolean. Default is false and this only allows one panel open at a time.                                                                                  |
| panels                 | QueryList\<ClrAccordionPanel\> | A QueryList collection that reflects all ClrAccordionPane's in the DOM. This includes all nested ClrAccordion's as the @ContentChildren decorator uses `{ descendants: true }`. |

{.table .left-cell}

### ClrAccordionContent

#### Selector & Basic Usage

```html
<clr-accordion-content></clr-accordion-content>
```

### ClrAccordionDescription

#### Selector & Basic Usage

```html
<clr-accordion-description></clr-accordion-description>
```

### ClrAccordionPanel

Use content projection and give the panel a title and content that can be hidden or shown.

#### Selector & Basic Usage

```html
<clr-accordion-panel></clr-accordion-panel>
```

#### Properties

| Name                        | Type                                 | Description                                                                                                                       |
| --------------------------- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| clrAccordionPanelDisabled   | @Input\<boolean\>                    | When true this disables click events from opening / closing the panel.                                                            |
| clrAccordionPanelOpen       | @Input\<boolean\>                    | Use this to set the open or closed state of the panel. It can be combined with `clrAccordionPanelOpenChange` for two way binding. |
| clrAccordionPanelOpenChange | @Output\<boolean\>                   | Emits the true (open) / false (closed) state of the panel. It can be combined with `clrAccordionPanelOpen` for two way binding.   |
| accordionDescription        | QueryList\<ClrAccordionDescription\> | Doesn't seem to be used at first glance.                                                                                          |

{.table .left-cell}

#### Methods

| Method Name                  | Arguments: Type            | Return Type | Description                                       |
| ---------------------------- | -------------------------- | ----------- | ------------------------------------------------- |
| togglePanel                  | n/a                        | void        | Opens and closes the panel.                       |
| collapsePanelOnAnimationDone | panel: AccordionPanelModel | void        | Called from the template when the animation ends. |
| getPanelStateClasses         | panel: AccordionPanelModel | string      | Used in the template.                             |
| getAccordionContentId        | id: string                 | string      | Used in the template.                             |
| getAccordionHeaderId         | id: string                 | string      | Used in the template.                             |

{.table .left-cell}

### ClrAccordionTitle

#### Selector & Basic Usage

```html
<clr-accordion-title>Panel Title</clr-accordion-title>
```

## Directives {.section-header}

### \*clrIfExpanded

A structural directive that optimizes the accordion by only creating the panel content node when its in the open
state. The panel content node is removed from the DOM when closed. The default is false.

#### Selector & Basic Usage

```html
<clr-accordion-content *clrIfExpanded>Panel content</clr-accordion-content>
<clr-accordion-content [(clrIfExpanded)]="panelExpandedProperty">Panel content</clr-accordion-content>
```
