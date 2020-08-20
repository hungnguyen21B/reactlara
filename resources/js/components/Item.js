import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Item extends Component {
  constructor(props) {
      super(props);
      this.state = {
          id:'',
          name:'',
          unit_price:'',
          description:'',
          id_type:'',
          id_color:'',
          image:'',
          promotion_price:'',
      }
  }

  componentDidMount(){
    var {match} = this.props;
    console.log(match);
    console.log("match");
    console.log(match.params);
    if (match) {
      var id = match.params.id;
      axios({
      method: 'GET',
      url :`http://127.0.0.1:8000/api/get-product/${id}`,
      data : null
     }).then(res =>{
      var data =res.data;
      console.log(JSON.stringify(data));
        this.setState({
          id: data.id,
          name : data.name,
          unit_price : data.unit_price,
          promotion_price : data.promotion_price,
          image : data.image,
          id_color : data.id_color,
          id_type : data.id_type,
          description : data.description,
        });
      }).catch( err =>{
    });
   }
  }
//   handleChange1(e){
//     this.setState({
//       name: e.target.value
//     })
//   }
//   handleChange2(e){
//     this.setState({
//       price: e.target.value
//     })
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     const products = {
//       name: this.state.name,
//       price: this.state.price
//     }
//     let uri = 'http://localhost:8000/items/'+this.props.params.id;
//     axios.patch(uri, products).then((response) => {
//           this.props.history.push('/display-item');
//     });
//   }
  render(){
    return (
      <div className="container">
        <h1>Detail Item</h1>
        
        <div className="row">
          <div className="col-md-10">
          </div>
          <div className="col-md-2">
            <Link to="/">Return to Items</Link>
          </div>
        </div>
        <form>
            <div className="form-group">
                <label>Item Name</label>
                <input type="text"
                  className="form-control"
                  value={this.state.name} />
            </div>

            <div className="form-group">
                <label name="product_price">Item Price</label>
                <input type="text" className="form-control"
                  value={this.state.unit_price} />
            </div>
            <div className="form-group">
                <label>Item Description</label>
                <input type="text"
                  className="form-control"
                  value={this.state.description} />
            </div>

            <div className="form-group">
                <label name="product_price">Item Type</label>
                <input type="text" className="form-control"
                  value={this.state.id_type} />
            </div>
          
            <div className="form-group">
                <label name="product_price">Item Color</label>
                <input type="text" className="form-control"
                  value={this.state.id_color} />
            </div>
            <div className="form-group">
                <label>Item image</label>
                <img src={'/Image/product/' +this.state.image} alt=""style={{height: '100px'}}/>
            </div>
            <div className="form-group">
                <button className="btn btn-primary">Update</button>
            </div>
        </form>
    </div>
    )
  }
}
export default Item;