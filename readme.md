# Teacher subject organizer

An example project to learn about dynamically populating drop downs on a JS SPA (Single Page App) using Handlebars.

The application allow a school to add which teacher is teaching which subject to which grade. A teacher can teach multiple grades and subjects.

## Initial state

The initial state of the application that is [available online](https://codex-academy.github.io/tso/) a teacher can be added, with a subject and a grade. Currently teacher names, subjects and grades will be duplicated in the dropdowns. This [screencast]() explains how to not add duplicates in the dropdowns.

## Creating a list of unique values

The key to creating dropdowns with no duplicates is to be able to create lists with unique values. In this exercise you will need to create a unique list of teachers, subjects and grades.

The basic algorithm for creating a unique list is:

* Create a new empty list that will be your unique list, lest call it `uList`.
* Loop through you list with duplicates
* Check if each entry in the list exist in `uList` if not add it in there.

There are various ways to check for entries in `uList`:

* Loop through `uList` and see if the entry is in there - **this is inefficient**
* Use a map to keep track of entries already added to `uList` - this is much more **efficient**

We will look into these two approaches.

## Filtering

The screencast series will also add filtering support using dynamically expanding dropdowns.
