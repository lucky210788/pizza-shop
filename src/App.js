import React from 'react';
import axios from "axios";

import {Header} from './components';
import {Home, Cart} from './pages';
import {Route, Routes} from 'react-router-dom';
import {setPizzas} from './redux/actions/pizzas';
import {useDispatch} from "react-redux";

function App(){
    const dispatch = useDispatch();

    React.useEffect(()=> {
        axios.get('http://localhost:3004/pizzas')
            .then(({data}) => {
                dispatch((setPizzas(data)));
            })
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<Home/>} exact/>
                    <Route path="/cart" element={<Cart/>} exact/>
                </Routes>
            </div>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         items: state.pizzas.items
//     }
// }
//
// const mapDispatchToProps = dispatch => {
//   return {
//       setPizzas: (items) => dispatch(setPizzasAction(items))
//   }
// }

export default App;
