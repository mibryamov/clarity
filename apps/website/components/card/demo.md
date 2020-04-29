---
title: Demo
---

```
!!!include(../angular/projects/clr-angular/src/lib/layout/card/examples/basic.html)!!!

<<< ../angular/projects/clr-angular/src/lib/layout/card/examples/basic.html
```

#### Basic Card

A `.card` can contain a `.card-header`, `.card-footer`, and one or more `.card-block`s.

Header

Block

Card content can contain text, links, images, data visualizations, lists and more.

Footer Action 1Footer Action 2

```html
<div class="clr-row">
    <div class="clr-col-lg-5 clr-col-md-8 clr-col-12">
        <div class="card">
            <div class="card-header">
                Header
            </div>
            <div class="card-block">
                <div class="card-title">
                    Block
                </div>
                <div class="card-text">
                    ...
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-sm btn-link">Footer Action 1</button>
                <button class="btn btn-sm btn-link">Footer Action 2</button>
            </div>
        </div>
    </div>
</div>
```

#### Clickable Cards

Adding the `.clickable` class makes the entire card clickable, initiating a single action.

[

![](assets/images/documentation/cards/placeholder_350x150.png)

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur magnam eos amet sit rem. Ipsam maiores incidunt eum quasi enim! Corporis sunt nisi totam molestias quam commodi maxime mollitia.

](javascript://)

```html
<div class="clr-row">
    <div class="clr-col-lg-6 clr-col-12">
        <a href="..." class="card clickable">
            <div class="card-img">
                <img src="...">
            </div>
            <div class="card-block">
                <p class="card-text">
                    ...
                </p>
            </div>
        </a>
    </div>
</div>
```

#### Images in Cards

A `.card-img` can be placed anywhere in the card, or it can occupy the entire card.

[

![Example of Image in a Card](assets/images/documentation/cards/placeholder_350x150.png)

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur magnam eos amet sit rem. Ipsam maiores incidunt eum quasi enim! Corporis sunt nisi totam molestias quam commodi maxime mollitia.

](javascript://)

[

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur magnam eos amet sit rem. Ipsam maiores incidunt eum quasi enim! Corporis sunt nisi totam molestias quam commodi maxime mollitia.

![Example of Image in a Card](assets/images/documentation/cards/placeholder_350x150.png)

](javascript://)

[

Lorem ipsum dolor sit amet, consectetur adipisicing elit.

![Example of Image in a Card](assets/images/documentation/cards/placeholder_350x150.png)

Ipsam maiores incidunt eum quasi enim!

](javascript://)

[![Example of Image in a Card](assets/images/documentation/cards/placeholder_350x150.png)](javascript://)

[

![Example of Image in a Card](assets/images/documentation/cards/placeholder_350x150.png)

](javascript://)

```html
<div class="clr-row">
    <div class="clr-col-lg-4 clr-col-12">
        <a href="..." class="card clickable">
            <div class="card-img">
                <img src="..." alt="..." />
            </div>
            <div class="card-block">
                <p class="card-text">
                    ...
                </p>
            </div>
        </a>
    </div>
    <div class="clr-col-lg-4 clr-col-12">
        <a href="..." class="card clickable">
            <div class="card-block">
                <p class="card-text">
                    ...
                </p>
            </div>
            <div class="card-img">
                <img src="..." alt="..." />
            </div>
        </a>
    </div>
    <div class="clr-col-lg-4 clr-col-12">
        <a href="..." class="card clickable">
            <div class="card-block">
                <p class="card-text">
                    ...
                </p>
            </div>
            <div class="card-img">
                <img src="..." alt="..." />
            </div>
            <div class="card-block">
                <p class="card-text">
                    ...
                </p>
            </div>
        </a>
    </div>
</div>
<div class="clr-row">
    <div class="clr-col-lg-6 clr-col-12">
        <a href="..." class="card clickable card-img">
            <img src="..." alt="..." />
        </a>
    </div>
    <div class="clr-col-lg-6 clr-col-12">
        <a href="..." class="card clickable">
            <div class="card-img">
                <img src="..." alt="..." />
            </div>
        </a>
    </div>
</div>
```

#### Dropdowns in Cards

The footer can contain two actions. For more actions, use a [dropdown](/documentation/dropdowns).

Header

Block

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officiis temporibus quod inventore, minus commodi similique corrupti repellat saepe facere aliquam minima deserunt esse nemo, vel illum optio necessitatibus deleniti.

Action 1 Action 2

Dropdown 1

[Item 1](javascript://)[Item 2](javascript://)[Item 3](javascript://)[Item 4](javascript://)

```html
<div class="clr-row">
    <div class="clr-col-lg-6 clr-col-12">
        <div class="card">
            <div class="card-header">
                Header
            </div>
            <div class="card-block">
                <div class="card-title">
                    Block
                </div>
                <div class="card-text">
                    ...
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-sm btn-link">
                    Action 1
                </button>
                <button class="btn btn-sm btn-link">
                    Action 2
                </button>
                <div class="dropdown top-left open">
                    <button class="dropdown-toggle btn btn-sm btn-link">
                        Dropdown 1
                        <clr-icon shape="caret down"></clr-icon>
                    </button>
                    <div class="dropdown-menu">
                        <a href="..." class="dropdown-item">Item 1</a>
                        <a href="..." class="dropdown-item">Item 2</a>
                        <a href="..." class="dropdown-item">Item 3</a>
                        <a href="..." class="dropdown-item">Item 4</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
```

#### Card Media Block

A `.card-media-block` combines a `.card-media-image` and `.card-media-description`. The description can contain a `.card-media-title` and a `.card-media-text`.

Header

![](assets/images/documentation/cards/placeholder_60x60.png)

Project A Owner: John Doe

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt excepturi labore explicabo temporibus, enim voluptate saepe corrupti illum earum eveniet ab veniam vel nisi fugit accusantium perferendis quas facilis quod.

Action

Header

![](assets/images/documentation/cards/placeholder_60x60.png)

Project B Owner: Jane Doe

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, ipsum?

Action

```html
<div class="clr-row">
    <div class="clr-col-lg-6 clr-col-12">
        <div class="card">
            <div class="card-header">
                Header
            </div>
            <div class="card-block">
                <div class="card-media-block">
                    <img src="..." class="card-media-image">
                    <div class="card-media-description">
                        <span class="card-media-title">
                            Project A
                        </span>
                        <span class="card-media-text">
                            Owner: John Doe
                        </span>
                    </div>
                </div>
                <div class="card-text">
                    ...
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-sm btn-link">Action</button>
            </div>
        </div>
    </div>
    <div class="clr-col-lg-6 clr-col-12">
        <div class="card">
            <div class="card-header">
                Header
            </div>
            <div class="card-block">
                <div class="card-media-block wrap">
                    <img src="..." class="card-media-image">
                    <div class="card-media-description">
                        <span class="card-media-title">
                            Project B
                        </span>
                        <span class="card-media-text">
                            Owner: Jane Doe
                        </span>
                    </div>
                </div>
                <div class="card-text">
                    ...
                </div>
            </div>
            <div class="card-footer">
                <button class="btn btn-sm btn-link">Action</button>
            </div>
        </div>
    </div>
</div>
```

#### Alerts in Cards

Cards can contain [alerts](/documentation/alerts).

Use small alerts in a card.

![](//placehold.it/60x60)

Project BOwner: Jane Doe

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Button OneButton Two

```html
<div class="card">
    <div class="card-block">
        <div class="alert alert-warning alert-sm">
            <button type="button" class="close" aria-label="Close">
                <clr-icon aria-hidden="true" shape="close"></clr-icon>
            </button>
            <div class="alert-item static">
                <span class="alert-text">
                    Use small alerts in a card.
                </span>
            </div>
        </div>
        <div class="card-media-block wrap">
            <img class="card-media-image" src="//placehold.it/60x60" />
            <div class="card-media-description">
                <span class="card-media-title">Project B</span>
                <span class="card-media-text">Owner: Jane Doe</span>
            </div>
        </div>
        <p class="card-text">
            ...
        </p>
    </div>
    <div class="card-footer">
        <a class="card-link">Button One</a>
        <a class="card-link">Button Two</a>
    </div>
</div>
```

#### Lists in Cards

Cards can contain [lists](/documentation/lists).

Unordered Lists

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

* Ullamco Laboris
* Nisi Ut Aliquip
  * Exercitation
  * Laboris
  * Commodo
* Consequat
* Excepteur sint occaecat cupidatat non proident
* Enim ad Minim
* Occeaecat
  * Exercitation
  * Laboris
  * Commodo

Action

Ordered Lists

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

1.  Ullamco Laboris
2.  Nisi Ut Aliquip
    1.  Exercitation
    2.  Laboris
    3.  Commodo
3.  Consequat
4.  Excepteur sint occaecat cupidatat non proident
5.  Enim ad Minim
6.  Occeaecat
    1.  Exercitation
    2.  Laboris
    3.  Commodo

Action

Unstyled Lists

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

* Ullamco Laboris
* Nisi Ut Aliquip
  * Exercitation
  * Laboris
  * Commodo
* Consequat
* Excepteur sint occaecat cupidatat non proident
* Enim ad Minim
* Occeaecat
  * Exercitation
  * Laboris
  * Commodo

Action

```html
<div class="clr-row">
    <div class="clr-col-lg-4 clr-col-sm-6 clr-col-12">
        <div class="card">
            <div class="card-header">
                Unordered Lists
            </div>
            <div class="card-block">
                ...
            </div>
            <div class="card-block">
                <ul class="list">
                    <li>Ullamco Laboris</li>
                    <li>
                        Nisi Ut Aliquip
                        <ul class="list">
                            <li>Exercitation</li>
                            <li>Laboris</li>
                            <li>Commodo</li>
                        </ul>
                    </li>
                    <li>Consequat</li>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>Enim ad Minim</li>
                    <li>
                        Occeaecat
                        <ul class="list-unstyled">
                            <li>Exercitation</li>
                            <li>Laboris</li>
                            <li>Commodo</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="card-footer">
                <a class="btn btn-primary">Action</a>
            </div>
        </div>
    </div>
    <div class="clr-col-lg-4 clr-col-sm-6 clr-col-12">
        <div class="card">
            <div class="card-header">
                Ordered Lists
            </div>
            <div class="card-block">
                ...
            </div>
            <div class="card-block">
                <ol class="list">
                    <li>Ullamco Laboris</li>
                    <li>
                        Nisi Ut Aliquip
                        <ol class="list">
                            <li>Exercitation</li>
                            <li>Laboris</li>
                            <li>Commodo</li>
                        </ol>
                    </li>
                    <li>Consequat</li>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>Enim ad Minim</li>
                    <li>
                        Occeaecat
                        <ol class="list-unstyled">
                            <li>Exercitation</li>
                            <li>Laboris</li>
                            <li>Commodo</li>
                        </ol>
                    </li>
                </ol>
            </div>
            <div class="card-footer">
                <a class="btn btn-primary">Action</a>
            </div>
        </div>
    </div>
    <div class="clr-col-lg-4 clr-col-sm-6 clr-col-12">
        <div class="card">
            <div class="card-header">
                Unstyled Lists
            </div>
            <div class="card-block">
                <p class="card-text">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div class="card-block">
                <ul class="list-unstyled">
                    <li>Ullamco Laboris</li>
                    <li>
                        Nisi Ut Aliquip
                        <ul class="list">
                            <li>Exercitation</li>
                            <li>Laboris</li>
                            <li>Commodo</li>
                        </ul>
                    </li>
                    <li>Consequat</li>
                    <li>Excepteur sint occaecat cupidatat non proident</li>
                    <li>Enim ad Minim</li>
                    <li>
                        Occeaecat
                        <ul class="list-unstyled">
                            <li>Exercitation</li>
                            <li>Laboris</li>
                            <li>Commodo</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="card-footer">
                <a class="btn btn-primary">Action</a>
            </div>
        </div>
    </div>
</div>
```

#### List Groups in Cards

Cards can contain list groups.

![](assets/images/documentation/cards/placeholder_350x150.png)

#### Title

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, aut. Nihil nemo, necessitatibus earum.

* Lorem ipsum dolor.
* Lorem ipsum dolor sit.
* Lorem ipsum.

[Action 1](javascript://)[Action 2](javascript://)

```html
<div class="card">
    <div class="card-img">
        <img src="...">
    </div>
    <div class="card-block">
        <h4 class="card-title">Title</h4>
        <p class="card-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, aut.
        Nihil nemo, necessitatibus earum.
        </p>
    </div>
    <ul class="list-group">
        <li class="list-group-item">Lorem ipsum dolor.</li>
        <li class="list-group-item">Lorem ipsum dolor sit.</li>
        <li class="list-group-item">Lorem ipsum.</li>
    </ul>
    <div class="card-footer">
        <a href="..." class="btn btn-sm btn-link">Action 1</a>
        <a href="..." class="btn btn-sm btn-link">Action 2</a>
    </div>
</div>
```

#### Progress Bars in Cards

Cards can contain [progress bars](/documentation/progress).

#### Card title

Here is a progress bar at the very top of a card, above the header.

[Click](javascript://)

#### Card title

Here is a progress bar at the top of a card's footer, above the buttons.

[Click](javascript://)

```html
<div class="clr-row">
    <div class="clr-col-12 clr-col-sm-4">
        <div class="card">
            <div class="card-block">
                <div class="progress top">
                    <progress value="..." max="100"></progress>
                </div>
                <h4 class="card-title">Card title</h4>
                <p class="card-text">...</p>
            </div>
            <div class="card-footer">
                <a href="..." class="card-link">Click</a>
            </div>
        </div>
    </div>
    <div class="clr-col-12 clr-col-sm-4">
        <div class="card">
            <div class="card-block">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">...</p>
            </div>
            <div class="card-footer">
                <div class="progress">
                    <progress value="..." max="100"></progress>
                </div>
                <a href="..." class="card-link">Click</a>
            </div>
        </div>
    </div>
</div>
```

#### Card title

Here is a progress bar at the very top of a card.

Label

Longer Label

Really, Really, Really Long Label

[Click](javascript://)

```html
<div class="clr-row">
    <div class="clr-col-12 clr-col-sm-6">
        <div class="card">
            <div class="card-block">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">Here is a progress bar at the very top of a card.</p>
                <div class="progress-block">
                    <label>Label</label>
                    <div class="progress-static">
                        <div class="progress-meter" data-value="..."></div>
                    </div>
                </div>
                <div class="progress-block">
                    <label>Longer Label</label>
                    <div class="progress-static">
                        <div class="progress-meter" data-value="..."></div>
                    </div>
                </div>
                <div class="progress-block">
                    <label>Really, Really, Really Long Label</label>
                    <div class="progress success">
                        <progress value="..." max="100" data-displayval="...%"></progress>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <div class="progress-static top">
                    <div class="progress-meter" data-value="..."></div>
                </div>
                <a href="..." class="card-link">Click</a>
            </div>
        </div>
    </div>
</div>
```

#### Card Layout

Clarity recommends using cards in a [grid](/documentation/grid) or a CSS column layout.

##### Cards in a Grid

### Card 1

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

[Action 1](javascript://)

### Card 2

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

[Action 2](javascript://)

### Card 3

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

[Action 3](javascript://)

```html
<div class="clr-row">
    <div class="clr-col-lg-4 clr-col-12">
        <div class="card">
            <div class="card-block">
                <h3 class="card-title">Card 1</h3>
                <p class="card-text">
                    ...
                </p>
            </div>
            <div class="card-footer">
                <a href="..." class="btn btn-sm btn-link">Action 1</a>
            </div>
        </div>
    </div>
    <div class="clr-col-lg-4 clr-col-12">
        <div class="card">
            <div class="card-block">
                <h3 class="card-title">Card 2</h3>
                <p class="card-text">
                    ...
                </p>
            </div>
            <div class="card-footer">
                <a href="..." class="btn btn-sm btn-link">Action 2</a>
            </div>
        </div>
    </div>
    <div class="clr-col-lg-4 clr-col-12">
        <div class="card">
            <div class="card-block">
                <h3 class="card-title">Card 3</h3>
                <p class="card-text">
                    ...
                </p>
            </div>
            <div class="card-footer">
                <a href="..." class="btn btn-sm btn-link">Action 3</a>
            </div>
        </div>
    </div>
</div>
```

##### Cards in CSS Columns

Cards can be placed in `.card-columns`. The default number of columns is three, but can be changed to two or four by adding `.card-columns-2` or `.card-columns-4`.

![](assets/images/documentation/cards/placeholder_350x150.png)

Ipsam maiores incidunt eum quasi enim!

### Title

laboris nisi ut aliquip ex ea commodo consequat.

Lorem ipsum dolor sit amet, consectetur adipisicing elit.

![](assets/images/documentation/cards/placeholder_350x150.png)

Ipsam maiores incidunt eum quasi enim!

### Title

laboris nisi ut aliquip ex ea commodo consequat.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur magnam eos amet sit rem. Ipsam maiores incidunt eum quasi enim! Corporis sunt nisi totam molestias quam commodi maxime mollitia.

![](assets/images/documentation/cards/placeholder_350x150.png)

### Title

laboris nisi ut aliquip ex ea commodo consequat.

### Title

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

[Action](javascript://)

[

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci consectetur magnam eos amet sit rem. Ipsam maiores incidunt eum quasi enim! Corporis sunt nisi totam molestias quam commodi maxime mollitia.

![](assets/images/documentation/cards/placeholder_350x150.png)

](javascript://)

```html
<div class="card-columns">
    <div class="card">
        <div class="card-img">
            <img src="...">
        </div>
        <div class="card-block">
            <p class="card-text">
                ...
            </p>
        </div>
    </div>
    <div class="card card-block">
        <h3 class="card-title">Title</h3>
        <p class="card-text">
            ...
        </p>
    </div>
    <div class="card">
        <div class="card-block">
            <p class="card-text">
                ...
            </p>
        </div>
        <div class="card-img">
            <img src="...">
        </div>
        <div class="card-block">
            <p class="card-text">
                ...
            </p>
        </div>
    </div>
    <div class="card card-block">
        <h3 class="card-title">Title</h3>
        <p class="card-text">
            ...
        </p>
    </div>
    <div href="..." class="card">
        <div class="card-block">
            <p class="card-text">
                ...
            </p>
        </div>
        <div class="card-img">
            <img src="...">
        </div>
    </div>
    <div class="card card-block">
        <h3 class="card-title">Title</h3>
        <p class="card-text">
            ...
        </p>
    </div>
    <div class="card">
        <div class="card-block">
            <h3 class="card-title">Title</h3>
            <p class="card-text">
                ...
            </p>
        </div>
        <div class="card-footer">
            <a href="..." class="btn btn-primary">Action</a>
        </div>
    </div>
    <a href="..." class="card clickable">
        <div class="card-block">
            <p class="card-text">
                ...
            </p>
        </div>
        <div class="card-img">
            <img src="...">
        </div>
    </a>
</div>
```
