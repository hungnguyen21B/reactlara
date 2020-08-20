import React, {Component}from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { Link} from 'react-router-dom';

class ProductList extends Component{
    constructor(props){
        super(props);
        this.state = {
            products: []
        }
    }
    componentDidMount(){
        this.getAll();
    }
    getAll(){
        Axios.get('http://127.0.0.1:8000/api')
        .then((res)=>{
            // console.log(JSON.stringify(res.data));
            this.setState({
                products:res.data
            })
        });
    }
    // getOne(product){
    //     this.setState({
    //         id:product.id,
    //         name:product.name, 
    //         image:product.image,
    //         description:product.description,
    //         price:product.price,
    //         color:product.color,
    //         type:product.type
    //     })
    // }
    delete(id){ 
        axios({
            method: 'DELETE',
            url :`http://127.0.0.1:8000/api/delete/${id}`,
            data : null
          }).then(res =>{
            this.getAll();
          });
    }
    // submit(event,id){
    //     event.preventDefault();
    //     if(this.state.id==0){
    //         Axios.post('http://127.0.0.1:8000/api',
    //         {name:this.state.name,
    //          image:this.state.image,
    //          description:this.state.description,
    //          price:this.state.price,
    //          color:this.state.color,
    //          type:this.state.type})
    //         .then((res)=>{
    //             this.getAll(); 
    //         }); 
    //     }
    //     else{
    //         Axios.put('http://127.0.0.1:8000/api/${id}',
    //         {name:this.state.name,
    //          image:this.state.image,
    //          description:this.state.description,
    //          price:this.state.price,
    //          color:this.state.color,
    //          type:this.state.type})
    //         .then((res)=>{
    //             this.getAll(); 
    //         });  
    //     }
    // }
    render() {
    return (
<div>       <h1>Product Management</h1>
                <table className="table">
                    <thead>
                        <tr>
                          <th>Product name</th>
                          <th>Image</th>
                          <th>Description</th>
                          <th>Price</th>
                          <th>Color</th>
                          <th>Type</th>
                          <th>Detail</th>
                          <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map(product =>
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td><img src={'Image/product/'+product.image} alt="" style={{width: '100px'}}/></td>
                        <td>{product.description}</td>
                        <td>{product.unit_price}</td>
                        <td>{product.id_color}</td>
                        <td>{product.id_type}</td>
                        <td><Link to={`/detail/${product.id}`}><i className='fas'>&#xf044;</i></Link></td>
                        <td> <button onClick={()=>this.delete(product.id)}><i className='fas'>&#xf2ed;</i></button></td>
                    </tr>
                    )}
                    </tbody>
                </table>
</div>
    );
}
}

export default ProductList;


