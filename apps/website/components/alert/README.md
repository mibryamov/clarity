# Alerts

* [Design Guidelines](/documentation/alerts#top)
* [Code & Examples](/documentation/alerts#examples)

##### Alerts are banners that communicate a message with a severity attached to it. They grab the user’s attention to provide critical information needed in context.

### Two Main Types

Success

Your container has been created.

Info

You can customize your VM in the Settings Panel.

Warning

This feature is still under development.

Error

Your license is about to expire.

###### Standard Alerts

Standard alerts are used in the context of an application **either in the content area itself or within components**.

There are **four different sub-types of standard alerts** success, info, warning, and error.

Info

You can customize your VM in the Settings Panel.

Warning

This feature is still under development.

Error

Your license is about to expire.

Success

Your container has been created.

###### App-Level Alerts

App-level alerts are used in the **global context of an application**. They are placed at the very top of all content and navigation.

There are **three different sub-types of app-level alerts** info, warning, and error.

### Standard Alerts

##### Four different sub-types

There are four different sub-types of standard alerts: error, warning, info, and success.

Error

Error

[Acknowledge](javascript://)

###### Error

Reserved for errors, malfunctions, as well as critical issues like license expiration.

Warning

Warning

[Acknowledge](javascript://)

###### Warning

Reserved for warnings: a message that needs the user attention and acknowledgment but might not cause errors.

Info

Info

[Acknowledge](javascript://)

###### Info

Provides info to users in context. Shouldn’t be overused to replace regular content.

Success

Success

[Acknowledge](javascript://)

###### Success

Reserved to provide to a static persistent success message.

#### Order in context

Standard alerts convey different levels of severity and urgency. They’re ordered by the urgency in which the user needs to pay attention to: error, warning, info, then success.

In the case there are multiple of each sub-type, all of them are shown before another sub-type is reached. For example, multiple errors are shown before the first warning is.

#### Style

The consistency in the style of the standard alerts allows users to quickly identify them, pay attention to them, and acknowledge them.

###### Typography

Depending on the sub-type of a standard alert, make sure to communicate a clear, concise, and actionable message.

###### Size

There are two sizes of standard alerts: default and compact. Use the compact alert only in places where vertical space is scarce and information density is needed. Cards provide a good example here.

Info

Info

[Acknowledge](javascript://)

Info

Compact Info

#### Placement

Standard alerts could be placed in multiple different contexts including inside of components.

###### Modals

Beginning of Modal Content

### Deleting File

Error

The file “mockups.sketch” is currently open and cannot be deleted.

Are you sure you want to delete the file **“mockups.sketch”**?

Keep FileDelete

End of Modal Content

Alerts could appear within modals. It is recommended that no more than one alert appear within a modal. Their function should not be to validate, validation should be done inline and closer to the error itself.

###### Cards

It is recommended to use concise language as you share an alert within a card. It is also recommended to use a compact-size alert. The focus of the alert should be on its content not on the alert appearing in it.

It is also recommended to have an alert at the very top of a card, on top of its title. An alert is meant to attract the attention of the user.

Using more than one alert within a card distracts the user and dilutes the importance of the alerts displayed.

Warning

Data might be outdated. Last update: 16 hours ago.

Memory

10.05 GB free

1.94 GB used | 11.99 GB total

See All Statistics

### App-Level Alerts

#### Three different subtypes

There are three sub-types of app-level alerts: error, warning, and info.

**Why no success app-level alert?**

App-level alerts are global in nature. Reporting a success of an operation should either be communicated within context or as a notification message.

#### Order in context

App-level alerts follow the **same urgency order** as standard alerts: error, warning, and info.

#### Placement

App-level alerts are placed at the very top of the global context. They should not be placed in any other configuration. Their purpose is to provide global alerts available and relating to the full context of the overall application.

![App-level alerts appear at the very top of your application](assets/images/documentation/alerts/app_level_placement.png)

## Accessibility

Warning

Actionable controls inside dynamically genrated alerts are not accessible to screen reader users! For this reason Clarity does not recommend using dropdowns, buttons, links inside alerts that appear as dynamic notifications.

Accessibility problems related to using actionable controls inside dynamically generated alerts:

* They are announced as part of the alert message, which is out of context and may be confusing. For example, the following alert will be announced as "success acknowledge":

  Success

  Success

  [Acknowledge](javascript://)

* There is no way for the user to directly interact with the announced action controls.

It is acceptable to use actions in static alerts. The following guidlines are recommended:

* Controls can be `dropdown`, `button` or `link` elements.
* Buttons should be used for actions, links for navigation.
* The text for these controls should be as descriptive as possible.

### Code & Examples

Several classes and elements are required to implement the Clarity alert layout. A table of these classes and elements with a brief description of each follows:

.alert

This class is a wrapper around `.alert-items` and the `.close` button. Place the `.close` button before the alert items.

.alert-items

This class is a wrapper around one or more `.alert-item` elements.

.alert-item

This class is a wrapper around `.alert-text`, `.alert-icon-wrapper`, and `.alert-actions`.

.alert-icon-wrapper

`.alert-icon-wrapper` contains a `clr-icon` with the classname `.alert-icon` applied to it. The icons used for the different alert types of success, danger, warning, and info are, respectively: `check-circle`, `exclamation-circle`, `exclamation-triangle`, and `info-circle`.

.alert-actions

`.alert-actions` can consist of dropdowns or links. Each action should extend the `.alert-action` class.

### Types

Clarity has error, warning, information, and success alerts denoted by the following classes:

* .alert-danger
* .alert-warning
* .alert-info
* .alert-success

Header

Lorem ipsum dolor sit amet, consectetur adipisicing elit.

Actions

[Shutdown](javascript://)[Suspend](javascript://)[Reboot](javascript://)

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Actions

[Shutdown](javascript://)[Suspend](javascript://)[Reboot](javascript://)

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Actions

[Shutdown](javascript://)[Suspend](javascript://)[Reboot](javascript://)

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

[Acknowledge](javascript://)[Reset to green](javascript://)

Lorem ipsum dolor sit amet, consectetur adipisicing elit.

```html
<div class="alert alert-danger" role="alert">
    <div class="alert-items">
        <div class="alert-item static">
            <div class="alert-icon-wrapper">
                <clr-icon class="alert-icon" shape="exclamation-circle"></clr-icon>
            </div>
            <span class="alert-text">...</span>
            <div class="alert-actions">
                <div class="alert-action dropdown bottom-right">
                    <button class="dropdown-toggle">
                        Actions
                        <clr-icon shape="caret down"></clr-icon>
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="...">Shutdown</a>
                        <a class="dropdown-item" href="...">Suspend</a>
                        <a class="dropdown-item" href="...">Reboot</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="alert-item static">
            <div class="alert-icon-wrapper">
                <clr-icon class="alert-icon" shape="exclamation-circle"></clr-icon>
            </div>
            <span class="alert-text">...</span>
            <div class="alert-actions">
                <div class="alert-action dropdown bottom-right">
                    <button class="dropdown-toggle">
                        Actions
                        <clr-icon shape="caret down"></clr-icon>
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="...">Shutdown</a>
                        <a class="dropdown-item" href="...">Suspend</a>
                        <a class="dropdown-item" href="...">Reboot</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="alert alert-warning" role="alert">
    <div class="alert-items">
        <div class="alert-item static">
            <div class="alert-icon-wrapper">
                <clr-icon class="alert-icon" shape="exclamation-triangle"></clr-icon>
            </div>
            <span class="alert-text">...</span>
            <div class="alert-actions">
                <div class="alert-action dropdown bottom-right open">
                    <button class="dropdown-toggle">
                        Actions
                        <clr-icon shape="caret down"></clr-icon>
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="...">Shutdown</a>
                        <a class="dropdown-item" href="...">Suspend</a>
                        <a class="dropdown-item" href="...">Reboot</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button type="button" class="close" aria-label="Close">
        <clr-icon aria-hidden="true" shape="close"></clr-icon>
    </button>
</div>
<div class="alert alert-info" role="alert">
    <div class="alert-items">
        <div class="alert-item static">
            <div class="alert-icon-wrapper">
                <clr-icon class="alert-icon" shape="info-circle"></clr-icon>
            </div>
            <span class="alert-text">...</span>
            <div class="alert-actions">
                <a href="..." class="alert-action">Acknowledge</a>
                <a href="..." class="alert-action">Reset to green</a>
            </div>
        </div>
    </div>
    <button type="button" class="close" aria-label="Close">
        <clr-icon aria-hidden="true" shape="close"></clr-icon>
    </button>
</div>
<div class="alert alert-success" role="alert">
    <div class="alert-items">
        <div class="alert-item static">
            <div class="alert-icon-wrapper">
                <clr-icon class="alert-icon" shape="check-circle"></clr-icon>
            </div>
            <span class="alert-text">...</span>
        </div>
    </div>
</div>
```

### Placement

##### Alerts in the Content Area

Header

This alert is at the top of the page.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

This alert is in the middle of the page.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```html
<div class="content-area">
    <div class="alert alert-danger" role="alert">
        <div class="alert-items">
            <div class="alert-item static">
                <div class="alert-icon-wrapper">
                    <clr-icon class="alert-icon" shape="exclamation-circle"></clr-icon>
                </div>
                <span class="alert-text">
                    This alert is at the top of the page.
                </span>
            </div>
        </div>
    </div>
    <p>...</p>
    <div class="alert alert-success" role="alert">
        <div class="alert-items">
            <div class="alert-item static">
                <div class="alert-icon-wrapper">
                    <clr-icon class="alert-icon" shape="check-circle"></clr-icon>
                </div>
                <span class="alert-text">
                    This alert is in the middle of the page.
                </span>
            </div>
        </div>
    </div>
    <p>...</p>
</div>
```

##### Alerts in Cards

Use small alerts in a card.

![](//placehold.it/60x60)

Project BOwner: Jane Doe

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Button OneButton Two

```html
<div class="card">
    <div class="card-block">
        <div class="alert alert-warning alert-sm" role="alert">
            <div class="alert-items">
                <div class="alert-item static">
                    <div class="alert-icon-wrapper">
                        <clr-icon class="alert-icon" shape="exclamation-triangle"></clr-icon>
                    </div>
                    <div class="alert-text">
                        Use small alerts in a card.
                    </div>
                </div>
            </div>
            <button type="button" class="close" aria-label="Close">
                <clr-icon aria-hidden="true" shape="close"></clr-icon>
            </button>
        </div>
        <div class="card-media-block wrap">
            <img class="card-media-image" src="//placehold.it/60x60" />
            <div class="card-media-description">
                <span class="card-media-title">Project B</span>
                <span class="card-media-text">Owner: Jane Doe</span>
            </div>
        </div>
        <p class="card-text">...</p>
    </div>
    <div class="card-footer">
        <a class="card-link">Button One</a>
        <a class="card-link">Button Two</a>
    </div>
</div>
```

##### Alerts in Modals

### I have a nice title

Alert in a modal.

But not much to say...

CancelOk

```html
<div class="modal static bump-down">
    <div class="modal-dialog" role="dialog" aria-hidden="true">
        <div class="modal-content">
            <div class="alert alert-danger" role="alert">
                <div class="alert-items">
                    <div class="alert-item static">
                        <div class="alert-icon-wrapper">
                            <clr-icon class="alert-icon" shape="exclamation-circle"></clr-icon>
                        </div>
                        <span class="alert-text">
                            Alert in a modal.
                        </span>
                    </div>
                </div>
            </div>
            <div class="modal-header">
                <button aria-label="Close" class="close" type="button">
                    <clr-icon aria-hidden="true" shape="close"></clr-icon>
                </button>
                <h3 class="modal-title">I have a nice title</h3>
            </div>
            <div class="modal-body">
                <p>But not much to say...</p>
            </div>
            <div class="modal-footer">
                <button class="btn btn-outline" type="button">Cancel</button>
                <button class="btn btn-primary" type="button">Ok</button>
            </div>
        </div>
    </div>
</div>
```

### Size

Use the `.alert-sm` class with `.alert` for an alert 24 pixels in height. The default is 36 pixels.

Header

This is an alert with 36px height.

This is an alert with 24px height.

```html
<div class="alert alert-danger">
    <div class="alert-items">
        <div class="alert-item static" role="alert">
            <div class="alert-icon-wrapper">
                <clr-icon class="alert-icon" shape="exclamation-circle"></clr-icon>
            </div>
            <span class="alert-text">
                This is an alert with 36px height.
            </span>
        </div>
    </div>
    <button type="button" class="close" aria-label="Close">
        <clr-icon aria-hidden="true" shape="close"></clr-icon>
    </button>
</div>
<div class="alert alert-success alert-sm" role="alert">
    <div class="alert-items">
        <div class="alert-item static">
            <div class="alert-icon-wrapper">
                <clr-icon class="alert-icon" shape="check-circle"></clr-icon>
            </div>
            <span class="alert-text">
                This is an alert with 24px height.
            </span>
        </div>
    </div>
    <button type="button" class="close" aria-label="Close">
        <clr-icon aria-hidden="true" shape="close"></clr-icon>
    </button>
</div>
```

### App-Level Alerts

###### .alert-app-level

This class must be applied with `.alert` to render an app-level alert.

Alert Type: Danger

Action

Alert Type: Warning

Action

Alert Type: Info

Action

```html
<div class="alert alert-app-level alert-danger" style="margin-bottom:24px" role="alert">
    <div class="alert-items">
        <div class="alert-item static">
            <div class="alert-icon-wrapper">
                <clr-icon class="alert-icon" shape="exclamation-circle"></clr-icon>
            </div>
            <div class="alert-text">
                Alert Type: Danger
            </div>
            <div class="alert-actions">
                <button class="btn alert-action">Action</button>
            </div>
        </div>
    </div>
    <button type="button" class="close" aria-label="Close">
        <clr-icon aria-hidden="true" shape="close"></clr-icon>
    </button>
</div>
<div class="alert alert-app-level alert-warning" style="margin-bottom:24px" role="alert">
    <div class="alert-items">
        <div class="alert-item static">
            <div class="alert-icon-wrapper">
                <clr-icon class="alert-icon" shape="exclamation-triangle"></clr-icon>
            </div>
            <div class="alert-text">
                Alert Type: Warning
            </div>
            <div class="alert-actions">
                <button class="btn alert-action">Action</button>
            </div>
        </div>
    </div>
    <button type="button" class="close" aria-label="Close">
        <clr-icon aria-hidden="true" shape="close"></clr-icon>
    </button>
</div>
<div class="alert alert-app-level alert-info" role="alert">
    <div class="alert-items">
        <div class="alert-item static">
            <div class="alert-icon-wrapper">
                <clr-icon class="alert-icon" shape="info-circle"></clr-icon>
            </div>
            <div class="alert-text">
                Alert Type: Info
            </div>
            <div class="alert-actions">
                <button class="btn alert-action">Action</button>
            </div>
        </div>
    </div>
    <button type="button" class="close" aria-label="Close">
        <clr-icon aria-hidden="true" shape="close"></clr-icon>
    </button>
</div>
```

### Examples

###### 1\. App-Level Alert in the main-container

A new update is now available. Upgrade to v.1234.

Install Update

Header

Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.

```html
<div class="main-container">
    <div class="alert alert-app-level alert-info" role="alert">
        <div class="alert-items">
            <div class="alert-item static">
                <div class="alert-icon-wrapper">
                    <clr-icon class="alert-icon" shape="info-circle"></clr-icon>
                </div>
                <div class="alert-text">
                    A new update is now available. Upgrade to v.1234.
                </div>
                <div class="alert-actions">
                    <button class="btn alert-action">Install Update</button>
                </div>
            </div>
        </div>
        <button type="button" class="close" aria-label="Close">
            <clr-icon aria-hidden="true" shape="close"></clr-icon>
        </button>
    </div>
    <header class="header header-6">
        <div class="branding">
            <span class="title">Header</span>
        </div>
    </header>
    <div class="content-container">
        <div class="content-area">
            <p>...</p>
        </div>
    </div>
</div>
```

###### 2\. Custom Icon in an App-Level Alert

A new update is now available. Upgrade to v.1234.

Install Update

Header

Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.

```html
<div class="main-container">
    <div class="alert alert-app-level alert-warning" role="alert">
        <div class="alert-items">
            <div class="alert-item static">
                <div class="alert-icon-wrapper">
                    <clr-icon class="alert-icon" shape="download"></clr-icon>
                </div>
                <div class="alert-text">
                    A new update is now available. Upgrade to v.1234.
                </div>
                <div class="alert-actions">
                    <button class="btn alert-action">Install Update</button>
                </div>
            </div>
        </div>
        <button type="button" class="close" aria-label="Close">
            <clr-icon aria-hidden="true" shape="close"></clr-icon>
        </button>
    </div>
    <header class="header header-6">
        <div class="branding">
            <span class="title">Header</span>
        </div>
    </header>
    <div class="content-container">
        <div class="content-area">
            <p>...</p>
        </div>
    </div>
</div>
```

## Angular Component

### Summary of Options

Input

Values

Default

Effect

**\[clrAlertClosable\]**

Type: Boolean

Default: true

true, false

true

If false, the alert will not be closable by clicking on the top-right "x".

**\[(clrAlertClosed)\]**

Type: Boolean

Default: false

true, false

false

Two-way binding on the state of the alert: opened or closed.

**\[clrAlertType\]**

Type: String

Default:  
"info"

"info", "warning", "success" and "danger"

"info"

Sets the type of the alert.

**\[clrAlertSizeSmall\]**

Type: Boolean

Default: false

true, false

false

If true, renders a small alert.

**\[clrAlertIcon\]**

Type: String

Default: varies

icon name as string

varies

View [supported icons](/icons).

**\[clrAlertAppLevel\]**

Type: Boolean

Default: false

true, false

false

If true, renders an app-level alert.

**\[clrPolite\]**

Type: Boolean

Default: true

true, false

true

aria-live will be set to "polite"

**\[clrAssertive\]**

Type: Boolean

Default: false

true, false

false

aria-live will be set to "assertive"

**\[clrOff\]**

Type: Boolean

Default: false

true, false

false

aria-live will be set to "off"

**\[clrCloseButtonAriaLabel\]**

Type: String

Default: Close alert

Close alert

Close alert

Overwrite default aria-label for close alert button

Deprecation: Since v4, we will no longer handle setting `aria-live` and announcing the message for you by default. Based on the application use case, you can use the new `ClrAriaLiveService` to make announcements when they make sense for a user to hear about updates or loading status changes. This will result in of removing few inputs provided by the component such as `clrPolite`, `clrAssertive`, `clrOff`

##### Examples

###### 1\. clrAlertClosable set to false. Default value is true.

Header

Info

This alert cannot be dismissed.

Actions [Shutdown](javascript://)[Delete](javascript://)[Reboot](javascript://)

Warning

Try closing this alert.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```html
<clr-alert [clrAlertClosable]="false">
    <clr-alert-item>
        <span class="alert-text">
            This alert cannot be dismissed.
        </span>
        <div class="alert-actions">
            <clr-dropdown>
                <button class="dropdown-toggle" clrDropdownTrigger>
                    Actions
                    <clr-icon shape="caret down"></clr-icon>
                </button>
                <clr-dropdown-menu clrPosition="bottom-right">
                    <a href="..." class="dropdown-item" clrDropdownItem>Shutdown</a>
                    <a href="..." class="dropdown-item" clrDropdownItem>Delete</a>
                    <a href="..." class="dropdown-item" clrDropdownItem>Reboot</a>
                </clr-dropdown-menu>
            </clr-dropdown>
        </div>
    </clr-alert-item>
</clr-alert>
<clr-alert [clrAlertType]="'warning'">
    <clr-alert-item>
        <span class="alert-text">
            Try closing this alert.
        </span>
    </clr-alert-item>
</clr-alert>
```

###### 2\. clrAlertType set to alert-success. Default value is alert-info. Accepts values same as the static alert type classes.

Header

Success

This alert indicates success.

Info

This is a default info alert.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```html
<clr-alert [clrAlertType]="'success'">
    <clr-alert-item>
        <span class="alert-text">
            This alert indicates success.
        </span>
    </clr-alert-item>
</clr-alert>
<clr-alert>
    <clr-alert-item>
        <span class="alert-text">
            This is a default info alert.
        </span>
    </clr-alert-item>
</clr-alert>
```

###### 3\. clrAlertSizeSmall set to true. Default value is false.

Header

Info

This is a small alert.

Info

This is a regular alert.

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

```html
<clr-alert [clrAlertSizeSmall]="true">
    <clr-alert-item>
        <span class="alert-text">
            This is a small alert.
        </span>
    </clr-alert-item>
</clr-alert>
<clr-alert>
    <clr-alert-item>
        <span class="alert-text">
            This is a regular alert.
        </span>
    </clr-alert-item>
</clr-alert>
```

###### 4\. Binding to the clrAlertClosedChange event.

Header

Success

This alert indicates a success!

```html
<clr-alert [clrAlertType]="'success'" (clrAlertClosedChange)="onClose()">
    <clr-alert-item>
        <span class="alert-text">
            This alert indicates a success!
        </span>
    </clr-alert-item>
</clr-alert>
<div>{{closeMessage}}</div>
```

```typescript
export class AlertAngularDemo {
  closeMessage: string = '';

  onClose() {
    this.closeMessage = 'The alert has been closed';
  }
}
```

###### 5\. clrAlertAppLevel set to true. Default is false.

Error

This is an app level alert.

Fix

Header

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus non beatae omnis esse quibusdam dolorum voluptatem reiciendis quaerat assumenda optio, porro expedita similique dolore quidem aliquam. Ullam, eaque enim nobis.

```html
<clr-alert [clrAlertType]="'danger'" [clrAlertAppLevel]="true">
    <clr-alert-item>
        <span class="alert-text">
            This is an app level alert.
        </span>
        <div class="alert-actions">
            <button class="btn alert-action">Fix</button>
        </div>
    </clr-alert-item>
</clr-alert>
```

###### 6\. Multiple app level alerts can be displayed with previous and next buttons.

Previous

1 / 3

Next

Info

View additional alerts using the pager

Fix

Warning

Application level alerts should only be used for important messages.

Fix

Don't add too many of these alerts!

Fix

Header

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus non beatae omnis esse quibusdam dolorum voluptatem reiciendis quaerat assumenda optio, porro expedita similique dolore quidem aliquam. Ullam, eaque enim nobis.

```html
    <clr-alerts>
        <clr-alert [clrAlertType]="'info'" [clrAlertAppLevel]="true">
            <clr-alert-item>
            <span class="alert-text">
                This is the first app level alert.
            </span>
            <div class="alert-actions">
                <button class="btn alert-action">Fix</button>
            </div>
        </clr-alert-item>
        </clr-alert>
        <clr-alert [clrAlertType]="'danger'" [clrAlertAppLevel]="true">
            <clr-alert-item>
            <span class="alert-text">
                This is a second app level alert.
            </span>
            <div class="alert-actions">
                <button class="btn alert-action">Fix</button>
            </div>
        </clr-alert-item>
    </clr-alert>
</clr-alerts>
```
