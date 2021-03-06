import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { AppRoutes } from './routes/AppRoutes';

function App() {
  return (
    <Provider store={store}>
      <div className="App font-sans">
        <AppRoutes />
      </div>
    </Provider>
  );
}

export default App;
