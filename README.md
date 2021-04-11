# React Datepicker

A simple datepicker demo made by React.

[![Netlify Status](https://api.netlify.com/api/v1/badges/692a4cb5-b311-4b88-bb9a-396e9603b30c/deploy-status)](https://app.netlify.com/sites/simple-datepicker/deploys)

## Project Setup

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

After running it, runs `serve -s build` to serve it with a static server.

The working app is running under [https://simple-datepicker.netlify.app](https://simple-datepicker.netlify.app)

## Features

There's a `ReactDatePicker` component which contains both tasks below.

**task #1 Calendar Component (DatePicker.js)**

- Render the calendar with 6 rows regardless of the number of days in the month.
- The days outside the current month is shown in gray.
- Click `<` to move to the previous days, months, or years.
- Click `>` to move to the next days, months, or years.
- Click current month to switch to the month view. Go back to the previous view when a month is selected.
- Click current year to switch to the year view. Go back to the previous view when a year is selected.
- A selected date, month, or year is marked with a red circle (#db3d44), and today's date is shown in red (#db3d44).

**task #2 DatePicker Component (DateInput.js)**

- Use the ISO format (YYYY-MM-DD) to display selected date in the input field.
- Click the input field to open the calendar dropdown.
- As soon as a date is selected, the calendar closes itself and the selected date is displayed in the input field.

## Tech Stack

- React
- Styled Component
- date-fns (JavaScript date utility library)

## Folder Structure

```
src/
├── ReactDatePicker/
│   ├── components/
│   │   ├── styles/
│   │   ├── DateInput.js
│   │   └── DatePicker.js
│   │── utils/
│   └── index.js
├── app.js
└── index.js
```
