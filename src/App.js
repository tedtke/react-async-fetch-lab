// create your App component here
// Deliverables
// This lab is missing the App component that index.js is looking for. To pass the tests in this lab:

// Create an App class component from scratch
// Write a componentDidMount method. Inside the method, send a fetch request to http://api.open-notify.org/astros.json (Links to an external site.), a free API that returns a list of people currently in space.
// Note: This lab uses some packages that need a relatively new version of node. If you've got [nvm][https://github.com/creationix/nvm (Links to an external site.)], run nvm install node to update.

import React, { Component } from 'react';

class App extends React.Component {
    state = {
        data: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(data => {
            this.setState({data: data.data})
        })
    }
    
    render() {
        return(
            <div>
                <h1>My React App</h1>
                < Component />

            </div>
        );
    }
}

export default App;