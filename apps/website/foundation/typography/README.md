# Typography

![HTML5](assets/images/bugs/badge_html5.svg 'HTML5')![CSS3](assets/images/bugs/badge_css3.svg 'CSS3')

- [Examples & Code](/documentation/typography#top)
- [Design Guidelines](/documentation/typography#guidelines)

##### Clarity uses the geometric sans-serif font, Metropolis.

### Text Styles

Style Name

Attributes

Selectors

Used For

Body text

- Metropolis Regular
- color: #565656
- font-size: 14px
- letter-spacing: normal

`p, .p1`

- Default text styling _(page_bodyText)_
- Sidenav text _(sidenav_text)_
- Body text in cards _(card_text)_
- Text and dropdowns _(dropdown_text)_
- Tab navigation links _(tab_text)_
- Wizard steps and table of contents
- General paragraphs, sentences, lists

Section header

- Metropolis Medium
- color: #565656
- font-size: 13px
- letter-spacing: normal

`.p2`

- Stack view header _(stackview_header)_
- Form headers
- Tree view headers

Table, grid, and form text

- Metropolis Regular
- color: #565656
- font-size: 13px
- letter-spacing: normal

`.p3`

- Text in alerts _(alert_text)_
- Stack view text _(stackview_text)_
- Datagrid text _(table_text)_
- Text in HTML tables _(table_text)_
- Text in tooltips and validations _(tooltip_text)_
- Form text
- Treeview text

Form labels and column headers

- Metropolis Semibold
- color: #565656
- font-size: 12px
- letter-spacing: normal

`.p4`

- Button text (Normal)
- Table and datagrid headers _(table_header)_
- Dropdown headers _(dropdown_header)_

Table footers and chart data

- Metropolis Regular
- color: #565656
- font-size: 12px
- letter-spacing: normal

`.p5`

- Table and datagrid footers
- Chart and data visualization info

Small headers

- Metropolis Semibold
- color: #565656
- font-size: 11px
- letter-spacing: 0.03em

`.p6`

- Button text (Small)
- Usually used in all caps

Tags and labels

- Metropolis Regular
- color: #565656
- font-size: 11px
- letter-spacing: 0.03em

`.p7`

- Text inside tags and labels _(label_text)_

Badges

- Metropolis Regular
- color: #565656
- font-size: 10px
- letter-spacing: 0.03em

`.p8`

- Text inside badges

`Monospaced`

- Consolas Regular
- font-size: 14px
- letter-spacing: normal

`pre. language-* or code. language-*`

- Code or system-type messages like in a terminal or console

```html
<p class="p1">Body text</p>
<p class="p2">Section header</p>
<p class="p3">Table, grid, and form text</p>
<p class="p4">Form labels and column headers</p>
<p class="p5">Table footers and chart data</p>
<p class="p6">Mostly buttons</p>
<p class="p7">Tags and labels</p>
<p class="p8">Badges</p>
<pre class="language-html">Monospaced</pre>
or <code class="language-html">Monospaced</code>
```

### Header Styles

Style Name

Attributes

Selectors

Used For

# Heading 1

- Metropolis Light
- color: #000000
- font-size: 32px
- letter-spacing: normal

`h1`

- Login screen product name _(login_productName)_
- Large display numbers (charts/data visualization)

## Heading 2

- Metropolis Light
- color: #000000
- font-size: 28px
- letter-spacing: normal

`h2`

- Main content header _(page_mainHeading)_

### Heading 3

- Metropolis Light
- color: #000000
- font-size: 22px
- letter-spacing: normal

`h3`

- Secondary content header _(page_secondaryHeading)_
- Modal/Wizard/Dialog header _(modal_header)_

#### Heading 4

- Metropolis Light
- color: #000000
- font-size: 18px
- letter-spacing: normal

`h4`

- Tertiary content header _(page_tertiaryHeading)_
- Card header/title _(card_title)_

##### Heading 5

- Metropolis Regular
- color: #565656
- font-size: 16px
- letter-spacing: 0.01em

`h5`

- Section header 1 _(page_sectionHeader)_
- Introductory paragraph _(page_introParagraph)_

###### Heading 6

- Metropolis Medium
- color: #313131
- font-size: 14px
- letter-spacing: normal

`h6`

- Section header 2
- Sidenav section header _(sidenav_sectionHeader)_
- TOC header _(toc_header)_

```html
<h1>Header 1 (Display)</h1>
<h2>Header 2 (Headline)</h2>
<h3>Header 3 (Sub Heading)</h3>
<h4>Header 4 (Section Heading Level 1)</h4>
<h5>Header 5 (Category / group label, TOC)</h5>
<h6>Header 6 (Section Heading Level 2 group label)</h6>
```

### Using Typography

Clarity includes several SASS variables, collections, mixing, and functions for working with typography. These are described below:

###### \$clr-font

This SASS variable points to our default text font, Metropolis.

###### \$clr-altFont

This SASS variable is only used for our headers (H1..H6). Currently, it also points to Metropolis.

###### \$clr-font-size

This SASS variable sets our default font size to 14px.

###### \$clr-font-weight-light

This SASS variable defaults to 200. It is used in very large display text (p0) and headers 1 through 4.

###### \$clr-font-weight-regular

This SASS is the default font weight for Clarity. It defaults to 400.

###### \$clr-font-weight-semibold

This SASS variable is the default bold font-weight of Clarity. It is Metropolis semi-bold (500).

###### \$clr-font-weight-bold

This SASS variable defaults to 600. It is used in very small text (p4 and p6).

### The Metropolis Font

Metropolis has clear, simple letters with rounded forms.  
This gives the font a friendly and modern appearance.

![Metropolis light, regular, medium, and semibold](assets/images/documentation/typography/Typography-A-Z.png?1481774870417534000)

### Font Weights in Clarity

To maintain a light, clean look, Clarity does not use a weight stronger than semibold.

![Metropolis light, regular, medium, and semibold](assets/images/documentation/typography/Typography-Metropolis.png?1481774870417534000)

### Use the Built-in Styles

The Clarity team determined the optimal height and weight of the text for each component. Some components also have line wrapping built-in. If not, text should be kept to a single line.

### Use Text Links for Navigation

#### Text Links

[Normal](<javascript:void(0)>)

[Hovered](<javascript:void(0)>)

[Clicked](<javascript:void(0)>)

[Visited](<javascript:void(0)>)

Don’t use text links for a call to action. [Buttons](/documentation/buttons) are better.
