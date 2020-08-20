import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import { Link,Route,BrowserRouter,Switch} from 'react-router-dom';
import ProductList from './ProductList';
import Item from './Item';
class Example extends Component{
    render() {
    return (
    <div> 
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ProductList}>
                </Route>
                <Route path='/detail/:id' component={Item}>
                </Route>
            </Switch>
        </BrowserRouter>
    </div>
    );
}
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

