import { Component } from 'react';
class Order extends Component{
    changeOrder=(event)=>{
        this.props.ord(event.target.value)
    }
    render(){
        return(
            <div className="col-2">
            <div class="form-group">
              <label class="d-inline-block" for="s"><small><strong>Order By&nbsp;</strong></small></label>
              <select onChange={this.changeOrder} name="orderby" class="form-control form-control-sm d-inline-block" style={{width:"auto"}} id="s">
                <option value="">select</option>
                <option value="p">popularity</option>
                <option value="lh">lower to higher</option>
                <option value="hl">higher to lower</option>
              </select>
            </div>
          </div>
        );
    }
}
export default Order;