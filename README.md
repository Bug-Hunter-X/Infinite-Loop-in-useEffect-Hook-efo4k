# React useEffect Infinite Loop Bug
This repository demonstrates a common error in React's `useEffect` hook: creating an infinite loop by incorrectly managing dependencies.

## Problem Description
The `MyComponent` function uses `useEffect` to update the `count` state.  However, the `count` variable is included in the dependency array which means that every time the count changes, `useEffect` runs again which, in turn, changes `count` again resulting in an infinite loop.

## Solution
The solution involves correctly managing the dependencies in the useEffect hook. By removing the `count` state from the dependency array, the useEffect hook only runs once on mount (or when other dependencies change). In this case, an empty array [] means it only runs once after the component mounts.