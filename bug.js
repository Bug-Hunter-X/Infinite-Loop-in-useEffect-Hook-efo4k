```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic: this will cause an infinite loop
    setCount(count + 1);
  }, [count]); // The dependency array includes 'count', causing re-render

  return <div>Count: {count}</div>;
}
```