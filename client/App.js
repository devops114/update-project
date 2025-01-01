
import React from 'react';
import TypeModelForm from './components/TypeModelForm';
import TypeModelList from './components/TypeModelList';

const App = () => {
    return (
        <div>
            <h1>Type Model Management</h1>
            <TypeModelForm />
            <TypeModelList />
        </div>
    );
};

export default App;

