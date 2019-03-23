import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Context = React.createContext()

const reducer = (state,action) => {
    switch(action.type){
        case "DELETE_STUDENT":        
        return{
            ...state,            
            students : state.students.filter(student => student.id !== action.payload )
          
        }
        case "ADD_STUDENT":
        return{
            ...state,
            students : [action.payload, ...state.students]
        }        
        case "UPDATE_STUDENT":{
            const oldData = [...state.students];
            const newData = [];

            oldData.map((data) => {
                let newD = data;
                if (data.id === Number(action.payload.id)) {
                    newD = action.payload;
                }    
                newData.push(newD);
            });

            return {
                ...state,
                students: newData
            }
        }        
       
        default:
        return state
    }
}

export class Provider extends Component{
    state = {
        students:[
            {
                id: 1,
                name : "Anoplay",
                email : "anoplay@gmail.com",
                phone : 877777777
            },
            {
                id: 2,
                name : "Yada",
                email : "Yada@gmail.com",
                phone : 877132213
            },
            {
                id: 3,
                name : "Sqwillerz",
                email : "Sqwillerz@gmail.com",
                phone : 877777777
            }
        ],
        student:[

        ],
        categorydatas: [
            {
                id: "ad18abec-fb24-4296-83ee-14a99756dea8",
                name: "Fashion Pria",
                categorySub: [
                    {
                        id: "eba6beee-6706-49c2-95a5-b4f72be6ba0e",
                        name: "Sepatu",
                        categorySubChild: [
                            {
                                id: "3155f392-46b8-4bce-8ad2-ead52dca3953",
                                name: "Sneakers"
                            }
                        ]
                    }
                ]
            },
            {
                id: "dda444c2-c739-4759-a8d3-71ba36013f35",
                name: "Fashion Wanita",
                categorySub: [
                    {
                        id: "130dc526-37ce-4ab9-92f5-2a7ebdf36477",
                        name: "Sepatu",
                        categorySubChild: [
                            {
                                id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                name: "Sneakers"
                            }
                        ]
                    },
                    {
                        id: "130dc526-37ce-4ab9-92f5-2a7ebdf36477",
                        name: "Atasan",
                        categorySubChild: [
                            {
                                id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                name: "Blouse"
                            }
                        ]
                    }
                ]
            },
            {
                id: "dda444c2-c739-4759-a8d3-71ba36013f36",
                name: "Fashion Anak",
                categorySub: [
                    {
                        id: "130dc526-37ce-4ab9-92f5-2a7ebdf36477",
                        name: "Tas Anak",
                        categorySubChild: [
                            {
                                id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                name: "Tas Selempang Anak"
                            }
                        ]
                    },
                    {
                        id: "130dc526-37ce-4ab9-92f5-2a7ebdf36477",
                        name: "Aksesoris Anak",
                        categorySubChild: [
                            {
                                id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                name: "Topi Anak"
                            }
                        ]
                    }
                ]
            },
            {
                id: "dda444c2-c739-4759-a8d3-71ba36013f37",
                name: "Komputer & Aksesoris",
                categorySub: [
                    {
                        id: "130dc526-37ce-4ab9-92f5-2a7ebdf36477",
                        name: "Peripheral & Aksesoris",
                        categorySubChild: [
                            {
                                id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                name: "Keyboard"
                            }
                        ]
                    }
                ]
            },
            {
                id: "dda444c2-c739-4759-a8d3-71ba36013f38",
                name: "Mainan & Hobi",
                categorySub: [
                    {
                        id: "130dc526-37ce-4ab9-92f5-2a7ebdf36477",
                        name: "Diecast",
                        categorySubChild: [
                            {
                                id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                name: "Diecast Truk & Konstruksi"
                            },
                            {
                                id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                name: "Diecast Mobil"
                            },
                            {
                                id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                name: "Diecast Truk & Konstruksi"
                            },
                            {
                                id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                name: "Diecast Kendaraan Publik"
                            },
                            {
                                id: "681ad4db-2049-40fe-9752-a7f8dfadc854",
                                name: "Diecast Milter"
                            }
                        ]
                    }
                ]
            }
        ],
        dispatch: action => {
           this.setState(state => reducer(state, action))
        }
    }
   async componentDidMount() {
        const res = await axios
            .get('https://jsonplaceholder.typicode.com/users')
        this.setState({
            students: res.data
        })
    }    
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer