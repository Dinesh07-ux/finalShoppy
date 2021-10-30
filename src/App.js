import './App.css';
import Data from "./data.json";
import { Component } from 'react';
import SizeSelector from './components/SizeSelector';
import Order from './components/Order';
import Cart from './components/Cart';
class app extends Component {
  constructor() {
    super();
    this.state = {
      prods:Data.length,
      by:true,
      cartChange:false,
      showCart:false,
      selectedSize:[],
      count:0
    };
  }
  addItem=[];
  orderMenu=(by)=>{
    switch(by)
    {
      case "lh":
          Data.sort(function (a, b) {
            var aval=Number(a.price.replace(/[^0-9\.]+/g,""));
            var bval=Number(b.price.replace(/[^0-9\.]+/g,""));
            return aval-bval;
          });
          this.setState({by:true})
          break;

        case "hl":
          Data.sort(function (a, b) {
            var aval=Number(a.price.replace(/[^0-9\.]+/g,""));
            var bval=Number(b.price.replace(/[^0-9\.]+/g,""));
            return bval-aval;
          });
          this.setState({by:true})
          break;

        case "p":
          Data.sort(function (a, b) {
            return b.popularity-a.popularity;
          });
          this.setState({by:true})
          break;
    
        default:
          break;
    }
  }
  handleChange=(names)=>{
      var count=0;
      Data.filter(obj=>{if (names.includes(obj.size)) count++;})
      this.setState({selectedSize:names,prods:count==0?Data.length:count});
  }
  rev=(tf)=>{
   // this.setState({showCart:tf})
    console.log(tf);
  }
 // cn=(d)=>{
   // this.setState({count:d});
 //  console.log(d);


  render(){
    return (
      <div className="App">
        <div className="row" style={{marginTop:"10px",height:"40px"}}> 
          <div className="col-2" style={{marginLeft:"60px"}}>
            <b>Sizes:</b>
          </div>
          <div className="col-5">
            <b>{this.changeProd}{this.state.prods} product(s) found</b>
          </div>
          <Order ord={this.orderMenu}/>
              <div id="close" className="col-2 myCart" style={{display:"none"}}>
                  <button className="btn-dark" style={{marginLeft:"-12px"}} type="button" onClick={()=>{document.getElementById("csymbol").style.display="block";document.getElementById("close").style.display="none";this.setState({showCart:false})}}>X</button>
                  {<Cart newItem={this.addItem}
    
                  />}
              </div>
              <div id="csymbol" className="col-2">
                <button id="cartSymbol" type="button" onClick={()=>{document.getElementById("csymbol").style.display="none";document.getElementById("close").style.display="block";this.setState({showCart:true})}} style={{marginLeft:"142px"}} className="btn btn-dark">
                  <span>
                    <i class="fa fa-shopping-cart fa-lg" ></i>
                    <sub><span class="badge text-warning">{this.state.count}</span></sub>
                  </span>
                </button>
              </div>
        </div>
          
        <div className="row"> 
        <SizeSelector selSize={this.handleChange}/>
              <div className="col-7">
                <div className="row" style={{marginLeft:"10px"}}>
                {Data.map(pro => {
                  if(Object.keys(this.state.selectedSize).length===0||this.state.selectedSize.includes(pro.size))
                return(
                  <span key={pro._id} className="card col-3 text-center"> 
                    <img src={pro.image} class="card-img-top" alt={pro.name}/>
                    <div class="card-body">
                      <h6 class="card-title">{pro.name}</h6>
                      <p class="card-text">{pro.price}</p>
                      <p class="card-text">{pro.size}</p>
                    </div>
                    <button type="button" className="btn btn-block btn-dark btn-sm" onClick={(event)=>{this.addItem=pro;this.setState({cartChange:true,count:this.state.count+1})}}>Add to cart</button><br/>
                  </span> 
        )
    })
    } 
  
                </div>
              </div>

          </div>
        </div>
        
        
        
  
    );
  }

}

export default app;
