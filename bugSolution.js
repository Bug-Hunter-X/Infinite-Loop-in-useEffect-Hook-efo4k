```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct Logic: This runs only once when the component mounts.
    console.log('Component Mounted');
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```