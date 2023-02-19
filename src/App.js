
import React from 'react';
import { Provider } from 'react-redux'
import Counter from './Counter'
import counterReducer from './Reducer/CounterReducer'
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer:{
        counter:counterReducer
    }
})
function App() {
return (
<Provider store={store}>
<Counter />
</Provider>
);
}
export default App;
