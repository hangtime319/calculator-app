import React from 'react';
import './App.css';
import CalculatorApp from './components/CalculatorApp';

const App = () => {
	return <main className="flex flex-col items-center justify-center min-h-screen">
        <CalculatorApp />
    </main>;
};

export default App;