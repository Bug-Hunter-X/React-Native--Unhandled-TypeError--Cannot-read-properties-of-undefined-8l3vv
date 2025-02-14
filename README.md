# React Native Unhandled TypeError: Cannot read properties of undefined

This repository demonstrates a common React Native bug: attempting to access a property of an undefined state variable before the asynchronous data fetch completes.  The `bug.js` file showcases the problematic code, leading to a `TypeError`. The `bugSolution.js` file presents the corrected code, addressing the issue using optional chaining and nullish coalescing.

## Problem

The `bug.js` file demonstrates an `useEffect` hook fetching data asynchronously. The component tries to render data.someProperty before the `setData` function updates the state with fetched data, resulting in the error.

## Solution

The `bugSolution.js` file demonstrates how to resolve the issue using optional chaining (`?.`) and the nullish coalescing operator (`??`). This ensures that if `data` or `data.someProperty` is undefined or null, the application doesn't crash but renders a default value.