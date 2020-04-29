---
title: Usage
---

##### A card presents high-level information and can guide the user toward related actions and details.

### Usage

Example use cases for cards include:

* Presenting objects, services, or content summaries while providing entry points to more detail
* Representing applications and initiating actions, such as download
* Displaying metrics

### Content – keep it simple

Cards can contain text, images, data visualizations, or multimedia. Ensure that the content serves your use case. Keep it simple and legible. Avoid using too much content, overloading the card with too many actions, and placing links within the content.

### Calls to action

Place the primary action and a single additional action, if required, in the card footer, left-aligned. This placement supports the F-pattern layout.

For more than two actions, use a [dropdown](/components/dropdowns). Do not place more than eight items in the dropdown menu.

![Buttons align left in cards](assets/images/documentation/buttons/buttons_in_cards_2.png?1481751307980894000)

**Do.**This card correctly aligns actions on the left.

![Buttons do not align right in cards](assets/images/documentation/buttons/buttons_in_cards_1.png?1481751307980894000)

**Don't.** Users might not scan to the bottom right of wide cards.

### Clickable cards – be predictable

When the entire card is clickable, the resulting action must be an expected outcome. A common action is to navigate to more details. Not every card need be clickable.

### Progress bars – be consistent

Progress bars belong at the card top or above the footer, closest to the triggering action. Be consistent with progress bar placement within a card group.

![](assets/images/documentation/cards/card_progress.png?1481751307980894000)

### Group cards by theme or element

* Homogeneous content facilitates scanning – users quickly find and compare information of interest.
* Content of varying type often shows “the bigger picture.”

### Use a grid for card layout

A grid places cards in fixed rows and columns: more content in less vertical space means less scrolling. It’s easy for users to scan content in this layout. If in doubt, use the grid.

### Switching views: cards and datagrids

In homogeneous card groups, consider enabling users to switch between card view and datagrid view. While cards show richer content than a datagrid, a datagrid lists more items at once.

Toggles for switching between views go in the upper right of the card group. The card group should be the default view.
