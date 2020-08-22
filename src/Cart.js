import React, { Component } from 'react';
import { connect } from 'react-redux';
const mapstatetoProps = (state) => {
    return {
        age: state.age,
        value: state
    }
}
const mapdispatchtoProps = (dispach) => {
    return {
        onSetrole: (value) => {
            dispach({ type: "SET_CART" })
        },
        OnSetOrder: (value) => {
            dispach({ type: "SET_ORDER", value: value })
        }
    }

}
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartsarray: [],
            previousarray:[]
        }
    }
    componentDidMount() {
        this.setState({cartsarray:this.props.value.cartitemsarray,
            previousarray : this.props.value.cartitemsarray})
    }
    retrunarrayfun() {
        let array = []
        if(this.state.cartsarray.length !=0){
            this.state.cartsarray.map((item,index)=>{
                array.push(
                    <div>
                        <img src={item.image} style={{ height: 150, width: 150, marginLeft: 10 }}>
                        </img>
                    </div>
                )
            })
           
        }
      
        return array
    }
    totalitemsprice =()=>{
        let value =0

        for (var i = 0; i < this.state.cartsarray.length; i++)
        {
            value += this.state.cartsarray[i].bookprice;
        }
        return value
    }
    totalprice =()=>{
        let value =0

        for (var i = 0; i < this.state.cartsarray.length; i++)
        {
            value += this.state.cartsarray[i].bookprice;
        }
        return value +7.50+5.00
    }
    render() {
        return (
            <div style={{ margin: 70, height: "auto", width: "90%", border: "3px solid lightgray" }}>
                <div style={{ height: 40, width: "100%", border: "2px solid lightgray", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", background: "lightgray" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: 400, height: 40, }}>
                        <div style={{ borderRight: "1px solid #000", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: 200, height: 40, }}>
                            <h3 style={{ marginLeft: 15 }}>eCommerce Site</h3>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: 200, height: 40, }}>
                            <h3 >Cart</h3>
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
                <div style={{ height: 40, width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <h4 style={{ marginLeft: 15 }}>Shipping Address</h4>
                    <h4 style={{ marginRight: 480 }}>Shipping Bag</h4>
                </div>
                <div style={{ height: 450, width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ height: 400, width: "40%", background: "#607D8B", margin: 15, display: "flex", flexDirection: "column", alignItems: "flex-start", paddingLeft: 10 }}>
                        <h4 style={{ color: "#fff" }}>Name : Cutomer name  </h4>
                        <h4 style={{ color: "#fff" }}>MobileNumber : 91234567890  </h4>
                        <h4 style={{ color: "#fff" }}>Address :   15-156 , 2nd line ,Ramarao street </h4>
                        <h4 style={{ color: "#fff" }}>Pincode :   523226 </h4>
                        <h4 style={{ color: "#fff" }}>District :   Andhra Pradesh </h4>
                        <h4 style={{ color: "#fff" }}>Country  :  India</h4>
                        <div style={{ height: 110, width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center", marginTop: 50 }}>
                            <div style={{ height: 30, width: 200, background: "lightgray", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <p>Save Address Button</p>
                            </div>
                            <div style={{ height: 30, width: 200, background: "lightgray", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <p>Edit Address Button</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ height: "auto", width: "40%", margin: 15, display: "flex", flexDirection: "column", alignItems: "flex-start", paddingLeft: 10, justifyContent: "space-evenly" }}>
                        {this.retrunarrayfun()}
                    </div>
                </div>
                <div style={{ height: 450, width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                    <div style={{ height: "auto", width: "40%", background: "lightgray", margin: 15, display: "flex", flexDirection: "column", alignItems: "flex-start", paddingLeft: 10 }}>

                    </div>
                    <div style={{ height: 400, width: "40%", background: "#fff", margin: 15, display: "flex", flexDirection: "column", alignItems: "flex-start", paddingLeft: 10 }}>
                        <div style={{ display: 'flex', flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "1px solid lightgray", }}>
                            <h4 style={{ color: "#000" }}>Payment Info</h4>
                        </div>
                        <div style={{ display: 'flex', flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "1px solid lightgray", }}>
                            <h4 style={{ color: "#000" }}>Items Price</h4>
                        <h4 style={{ color: "#000" }}> $  {this.totalitemsprice()}</h4>
                        </div>
                        <div style={{ display: 'flex', flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "1px solid lightgray", }}>
                            <h4 style={{ color: "#000" }}>Tax</h4>
                            <h4 style={{ color: "#000" }}>$7.50</h4>
                        </div>
                        <div style={{ display: 'flex', flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "1px solid lightgray", }}>
                            <h4 style={{ color: "#000" }}>Shipping Charge </h4>
                            <h4 style={{ color: "#000" }}>$5.00 </h4>
                        </div>
                        <div style={{ display: 'flex', flexDirection: "row", width: "100%", justifyContent: "space-between", alignItems: "flex-start", borderBottom: "1px solid lightgray", }}>
                            <h4 style={{ color: "#000" }}>Total</h4>
                        <h4 style={{ color: "#000" }}>$ {this.totalprice()}</h4>
                        </div>
                        <div style={{ height: 110, width: "50%", display: "flex", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                            <div style={{ height: 30, width: 100, background: "lightgray", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                                <p>Check out</p>
                            </div>
                            <div style={{ height: 30, width: 100, background: "lightgray", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} onClick={
                                () => {
                                    this.props.history.push({pathname:"/"})
                                }
                            }>
                                <p>Cancel</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default connect(mapstatetoProps, mapdispatchtoProps)(Cart)