# Hooks repository 🤓⚛️

This is a Custom Hooks repository for common usage hooks. It includes:

1. **useCounter**: increments, decrements and reset the state of the counter.

```javascript
const { counter, increment, decrement, reset } = useCounter(10);
```

useCounter() // has a default value

2. **useFetch**: to perform API calls. I also included a clean up process once the component has been unmounted. It returns an array of objects with the data, a loading property (false by default) and an error property (set to false in case the data is successfully retrieved from the API).📈

Example:

```javascript
const url = "API endpoint";
const { data: null, loading: true, error: null } = useFetch(ulr);
```

3. **useForm**: it updates the value of an input and also resets the current state to the initial state, so the input is back to being empty.📝

Example:

```javascript
const initialForm = {
  name: "",
  age: "",
  email: "",
};

const [values, handleInputChange, reset] = useForm(initialForm);
```
