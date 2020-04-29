# Internationalization

* [Design Guidelines](/documentation/internationalization#top)
* [Code & Examples](/documentation/internationalization#examples)

##### Easily translate internal Clarity text into multiple languages.

Warning

There is a breaking change required to fix the language support starting in version 2.1.1 and 1.2.1. The original implementation was broken in a way that could not be fixed with the original API, and due to the importance of this service for localization we opted to introduce a different API. If you have an implementation of a custom language strings before this release, [follow the instructions](/documentation/internationalization#updating-to-latest) on how to update your code.

### Internal language strings

Clarity has a list of text strings that it uses internally for things such as icon alt text or button text. When possible, Clarity avoids using text strings that have to be translated, and rarely changes this list. Any Angular application that needs to support multiple languages can create a different translation and use it for each language.

In order to improve accessibility of its components, Clarity added a default English title to all icons or non-text interactive elements internal to its components. In order to internationalize them we rely on a `ClrCommonStringsService` service that allows you to provide localized strings for your entire app, which will override our default titles.

### How to Localize

First, you need to make a new object that has a key value pair for each string you want to localize. You only need to define the strings that you need for your application.

```ts
export const klingonLocale: ClrCommonStrings = {
  open: 'ghIt',
  close: 'SoQmoH',
};
```

Then you'll need to inject the

```ts
import { ClrCommonStringsService } from '@clr/angular';
import { klingonLocale } from './translations/klingon';

@Component({...})
export class AppComponent {
  constructor(commonStrings: ClrCommonStringsService) {
    // Call this method to set the new locale values into the service, defaults for English
    // will be used for in any missing strings
    commonStrings.localize(klingonLocale);
  }
}
```

It is possible to call the `ClrCommonStringsService.localize()` method at anytime and change the translation. You could call a backend service to load these translation strings as well and then update them on the fly when a user changes translations in your app.

```ts
@Injectable()
export class MyCommonStringsService implements ClrCommonStrings {
  constructor(@Inject(LOCALE_ID) locale: string, server: MyServer, commonStrings: ClrCommonStringsService) {
    // Imagine this service loads a JSON object of strings for a locale
    server.fetchTexts(locale).subscribe(texts => {
      // Pass the new localization strings to the service
      commonStrings.localize(texts);
      ...
    });
  }
}
```

### Localization Strings

The list of strings available to configure can be found by simply looking at the declaration of the `ClrCommonStrings` interface, which is found below.

Property name

Purpose

open

Open button text

close

Close button text

show

Show button text

hide

Hide button text

expand

Expandable components: expand caret

collapse

Expandable components: collapse caret

more

Overflow menus: ellipsis button

select

Selectable components: checkbox or radio

selectAll

Selectable components: checkbox to select all

previous

Pagination: previous button

next

Pagination: next button

current

Pagination: go to current

info

Alert levels: info

success

Alert levels: success

warning

Alert levels: warning

danger

Alert levels: danger

rowActions

Datagrid: row actions icon alt text

pickColumns

Datagrid: show and hide columns icon alt text

showColumns

Datagrid: show columns title

sortColumn

Datagrid: sort columns title

firstPage

Datagrid: pagination first page button text

lastPage

Datagrid: pagination last page button text

nextPage

Datagrid: pagination next page button text

previousPage

Datagrid: pagination previous page button text

currentPage

Datagrid: pagination current page button text

totalPages

Datagrid: pagination total pages button text

minValue

Datagrid: minimum value (numeric filters)

maxValue

Datagrid: maximum value (numeric filters)

showColumnsMenuDescription

Datagrid: screen reader only description of the Show/Hide columns menu

allColumnsSelected

Datagrid: screen reader only confirmation that all columns were selected

loading

Display loading text (Default: Loading)

datepickerToggle

The open/close button for a datepicker

datepickerPreviousMonth

The button that navigates daypicker to a monthpicker

datepickerCurrentMonth

The button that navigates a daypicker to current month

allColumnsSelected

Datagrid: screen reader only confirmation that all columns were selected

loading

Display loading text (Default: Loading)

singleSelectionAriaLabel

Datagrid: aria label for header single selection header column

singleActionableAriaLabel

Datagrid: aria label for row action header column

detailExpandableAriaLabel

Datagrid: aria label for expandable row toggle button

alertCloseButtonAriaLabel

Alert: aria label for closing alert

datepickerOpen

The open/close button for a datepicker

datepickerPreviousMonth

The button that navigates daypicker to a monthpicker

datepickerCurrentMonth

The button that navigates a daypicker to current month

datepickerNextMonth

The button that navigates a daypicker to the next month

datepickerPreviousDecade

The button that navigates a yearpicker to previous decade

datepickerNextDecade

The button that navigates a yearpicker to next decade

datepickerCurrentDecade

The button that navigates the yearpicker to current decade

datepickerSelectMonthText

Populates aria-label and title for monthpicker button. Is concatenated with the (localized) value for calendarMonth as well as this value

datepickerSelectYearText

Populates aria-label and title for yearpicker button. Is concatenated with the (localized) value for calendarYear as well as this value

daypickerSRCurrentMonthPhrase

Used in an aria-live region. Makes up one part of a phrase that is read to screen reader users when the month changes.

daypickerSRCurrentYearPhrase

Used in an aria-live region. Makes up one part of a phrase that is read to screen reader users when the year changes.

daypickerSRCurrentDecadePhrase

Used in an aria-live region. Makes up one part of a phrase that is read to screen reader users when the decade changes.

stackViewChanged

Stack View: describes a particular stack block has changed

verticalNavToggle

Applies expanded/collapsed state to an aria-expanded attribute for screen readers when vertical nav button expands/collapses the entire menu

verticalNavGroupToggle

Applies the expanded/collapsed state to an aria-expanded attribute for screen readers whenever vertical nav group buttons are expanded/collapsed

signpostToggle

Applies the aria-label value to the signpost trigger.

### Updating to v1.2.1 or 2.1.1

If you used the original implementation of `ClrCommonStrings` found in versions prior to v1.2.1 and v2.1.1, you need to follow these steps to update to the new API.

1\. Remove the provider from your `AppModule`. It should have looked something like the following.

```ts
@NgModule({
  imports: [...],
  declarations: [...],
  providers: [{ provide: ClrCommonStrings, useClass: MyCommonStringsService }]
})
export class AppModule {}
```

2\. Convert your string service class to an object. This is optional but makes for easier formatting. If you skip this step, you'll have to create a new instance of your class to convert it to an object.

```ts
// Old class format
export class MyCommonStringsService implements ClrCommonStrings {
  open = 'ghIt';
  close = 'SoQmoH';
}

// New object format
export const klingonLocale: ClrCommonStrings = {
  open: 'ghIt',
  close: 'SoQmoH',
};
```

3\. You can now inject the `ClrCommonStringsService` into your `AppComponent` and pass in the localized strings, as shown above.

The previous implementation was broken because unless each application declared the provider themselves, none of the localization strings would remain after a production build and tree shaking. The refactoring that was done keeps the defaults inside of Clarity so they do not get removed, and allows applications the ability to still provide custom language strings for localization.
