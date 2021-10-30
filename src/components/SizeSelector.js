import { Component } from 'react';
import './SizeSelecter.css';
class SizeSelector extends Component{
    constructor() {
      super();
      this.state = {
      selectedSize:[]
      };
    }
    allSizes=["XS","S","M","ML","L","XL","XXL"];
    changeSize=(event)=>{
        if(event.target.style.background=="none")
        {
          var sizes=this.state.selectedSize;
          sizes.push(event.target.name);
          this.allSizes.map(size=>{
            if(sizes.includes(size))
            {
              document.getElementById(size).style.background="black";
              document.getElementById(size).style.color="white";
            }
            else{
              document.getElementById(size).style.background="none";
              document.getElementById(size).style.color="black";
            }
            this.props.selSize(sizes);
            this.setState({selectedSize:sizes});
          })
        }
        else{
            var sizes=this.state.selectedSize;
            const index = sizes.indexOf(event.target.name);
            if (index > -1) {
              sizes.splice(index, 1);
            }
            this.allSizes.map(size=>{
              if(sizes.includes(size))
              {
                document.getElementById(size).style.background="black";
                document.getElementById(size).style.color="white";
              }
              else{
                document.getElementById(size).style.background="none";
                document.getElementById(size).style.color="black";
              }
              this.props.selSize(sizes);
              this.setState({selectedSize:sizes});
            })
        }        
    }
    render(){
        return(
            <div className="col-2" style={{marginLeft:"50px"}}>
            <div className="row"> 
              <div className="col-3">
                <button id="XS" name="XS" className="btn" style={{background:"none"}} onClick={this.changeSize} type="button">XS</button>
              </div>
              <div className="col-3">
                <button id="S" name="S" className="btn" style={{background:"none"}} onClick={this.changeSize} type="button">S</button>
              </div>
              <div className="col-3">
                <button id="M" name="M" className="btn" style={{background:"none"}} onClick={this.changeSize} type="button">M</button>
              </div>
              <div className="col-3">
                <button id="ML" name="ML" className="btn" style={{background:"none"}} onClick={this.changeSize} type="button">ML</button>
              </div>
            </div>
            <div className="row" style={{marginTop:"10px"}}>
              <div className="col-3">
                <button id="L" name="L" className="btn" style={{background:"none"}} onClick={this.changeSize} type="button">L</button>
              </div>
              <div className="col-3">
                <button id="XL" name="XL" className="btn" style={{background:"none"}} onClick={this.changeSize} type="button">XL</button>
              </div>
              <div className="col-3">
                <button id="XXL" name="XXL" className="btn" style={{background:"none"}} onClick={this.changeSize} type="button">XXL</button>
              </div>
            </div>
          </div>
        );
    }
}
export default SizeSelector;