import React, { Component } from 'react';
import { connect } from 'react-redux';
class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ordersarray: [],
            today: ""
        }
    }
    componentDidMount() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        this.setState({ today: today ,ordersarray:this.props.value.ordersarray })
        

    }
    
    retrunfun =()=>{
        let array =[]
        if(this.state.ordersarray.length !=0){
            this.state.ordersarray.map((item,index)=>{
                array.push(
                    <div key={index+1} style={{ margin: 20, display: 'flex', flexDirection: "column", width: "90%", height: 230, justifyContent: "space-evenly", border: "2px solid lightgray", }}>
                    <div style={{ height: 30, width: "99.9%", border: "2px solid lightgray", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", background: "lightgray" }}>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: 400, height: 40, }}>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: 200, height: 40, }}>
                                <h3 >Order placed :</h3>
                            </div>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: 150, height: 40, }}>
                                <h3 >{this.state.today}</h3>
                            </div>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginRight: 10, width: 200, height: 40 }}>
                            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: 200, height: 40, }}>
                                <h6 style={{ cursor: "pointer" }}  >Status : Delivered</h6>
                            </div>
                        </div>
                    </div>
                    <div style={{ flexDirection: "row", display: "flex", alignItems: "center" }}>
                        <img src={item.image} style={{ height: 150, width: 150, marginLeft: 10 }}>
                        </img>
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: 20, height: 200, justifyContent: "space-evenly", alignItems: "flex-start" }}>
                            <h4>Book Titile  :  {item.bookname} </h4>
                            <h4>Author :  {item.bookauother} </h4>
                            <h4>Price  :  {item.bookprice} </h4>
                        </div>
                    </div>
                    <div>
                        {item.description}
                    </div>
                </div>
                )
            })
        }
        return array
    }

    render() {

        return (
            <div style={{ margin: "15px auto", height: "auto", width: "90%", border: "5px solid lightgray" }}>
                <div style={{ height: 40, width: "100%", border: "2px solid lightgray", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", background: "lightgray" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: 400, height: 40, }}>
                        <div style={{ borderRight: "1px solid #000", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: 200, height: 40, }}>
                            <h3 >eCommerce Site</h3>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: 150, height: 40, }}>
                            <h3 >My Orders</h3>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginRight: 10, width: 200, height: 40 }}>
                        <div style={{ borderRight: "1px solid #000", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: 50, height: 40, }}>
                            <h6 style={{ cursor: "pointer" }} onClick={() => {
                                this.props.history.push('/')
                            }} >Home</h6>
                        </div>
                        <div style={{ borderRight: "1px solid #000", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: 80, height: 40, }}>
                            <h6 style={{ cursor: "pointer" }} onClick={() => {
                                this.props.history.push('/orders')
                            }}>My Orders</h6>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: 50, height: 40, }}>
                            <h6 style={{ cursor: "pointer" }} onClick={() => {
                                this.props.history.push('/cart')
                            }}>Cart</h6>
                        </div>
                    </div>
                </div>

               {this.state.ordersarray.length ==0 ?  <div style={{ margin: 20, width: "90%", height: 230, textAlign: "center" }}>
                <h2>Please select some items and check here...</h2>
            </div>: this.retrunfun()} 
                
            </div>
        );
    }
}

const mapstatetoProps = (state) => {
    return {
        value: state,
        ordersarray: state
    }
}
const mapdispatchtoProps = (dispach) => {
    return {
        onSetrole: (value) => {
            dispach({ type: "SET_CART", value: value })
        },
        OnSetOrder: (value) => {
            dispach({ type: "SET_ORDER", value: value })
        }
    }

}

export default connect(mapstatetoProps, mapdispatchtoProps)(Orders);