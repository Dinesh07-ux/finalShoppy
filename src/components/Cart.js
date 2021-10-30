import { Component } from 'react';
import './Cart.css';
class Cart extends Component{
  constructor() {
    super();
    this.state = {
      reren:false,
    };
  }
    ren=true;
    myCart=[];
    produc=(a,b)=>{
      return a*b;
    }
    render(){
      if(this.ren==true)
      if(this.myCart.includes(this.props.newItem)==false)
      this.myCart.push(this.props.newItem);
    //  this.props.meet(this.myCart.length);
      this.ren=true;
          return(
            <div> 
            {this.myCart.map((item,index)=>{
              if(index!=0)
              return(
                <div>
                <div class="card" style={{overflow:"scroll"}}>
                  <div class="card-horizontal">
                  <img src={item.image} style={{width:"25%",height:"15%"}} class="card-img-top" alt={item.name}/>
                      <div class="card-body">
                          <h6 class="card-title">{item.name}</h6>
                          <small><p class="card-text">${this.produc(Number(item.price.replace(/[^0-9\.]+/g,"")),item.quantity)}</p></small>
                          <small><p class="card-text">Quantity - {item.quantity}</p></small>
                          <button className="btn btn-sm text-warning" type="button" onClick={()=>{document.getElementById("bt").disabled=false;item.quantity+=1;this.setState({reren:true})}}><big>+</big></button>
                          <button id="bt" className="btn btn-sm text-dark" type="button" onClick={()=>{
                            if(item.quantity>1)
                            {
                              item.quantity-=1;
                              this.setState({reren:true})
                            }
                            else
                            {
                              this.myCart.splice(index,1);
                              this.ren=false;
                              this.setState({reren:true})
                            }
                            }}><big>-</big></button>
                      </div>
                  </div>
              </div><br></br><br></br>
              </div>
              )
            })
     } 
     <button className="btn btn-sm btn-warning col-4 offset-3" style={{width:"100px"}}>CHECKOUT</button><br/><br/>
     </div>
          );
    }
}
export default Cart;