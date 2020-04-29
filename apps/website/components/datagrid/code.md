---
title: Code
toc: true
---

The ClrDatagrid component leverages a pure declarative API. Write the HTML like any other component and declare the
features needed for the implementation. For large amounts of data or heavy processing, use the `*ngFor` iterator and
request only the parts of the data from the server.
`*ngFor` iterator if it is a server driven
datagrid or

## Examples

### Basic w/ Smart iterator

A basic datagrid will have columns, rows, cells and a footer with a description.
For the smart iterator, when the app will receive all data during page initialization, make sure it includes the
`*clrDgItems` iterator.

```
<<< ../angular/src/stories/datagrid/basic.html
```

### TODO: Determine and create all examples
