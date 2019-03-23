import React, { Component } from 'react';

const Context = React.createContext()

export class Provider extends Component {
    state = {
        students: [
            {
              id: 1,
              name: 'Budi',
              email: 'budi@gmail.com',
              phone: 111111
            },
            {
              id: 2,
              name: 'Rahmat',
              email: 'rahmat@gmail.com',
              phone: 222222
            },
            {
              id: 3,
              name: 'Gibran',
              email: 'gibran@gmail.com',
              phone: 333333
            },
          ]
    }
    render() {
        return(
            <Context.Provider value = {this.state}>
                { this.props.children }
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer