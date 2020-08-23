import React, { Component } from 'react';
import { connect } from 'react-redux';

class SlectedBookpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Bookdetails: "",
            bookname: "",
            bookimage: "",
            pagecount: "",
            bookdescription: "",
            bookauother: "",
            bookprice: ""
        }
    }
    componentDidMount() {
        this.setState({
            bookname: this.props.location.state.bookname,
            bookdescription: this.props.location.state.descrpition,
            bookimage: this.props.location.state.image,
            pagecount: this.props.location.state.pagecount,
            bookauother: this.props.location.state.bookauother,
            bookprice: this.props.location.state.bookprice
        })
    }

    render() {
        console.log(this.props);
        return (
            <div style={{ margin: "15px auto", height: 400, width: "90%", border: "5px solid lightgray" }}>
                <div style={{ height: 40, width: "100%", border: "2px solid lightgray", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", background: "lightgray" }}>
                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: 400, height: 40, }}>
                        <div style={{ borderRight: "1px solid #000", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: 200, height: 40, }}>
                            <h3 >eCommerce Site</h3>
                        </div>
                        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly", width: 200, height: 40, }}>
                            <h3 >{this.state.bookname}</h3>
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
                <div style={{ display: 'flex', flexDirection: "column", width: "100%", height: 358, justifyContent: "space-evenly", border: "1px solid lightgray" }}>
                    <div style={{ flexDirection: "row", display: "flex" }}>
                        <img src={this.state.bookimage} style={{ height: 270, width: 150, marginLeft: 10 }}>
                        </img>
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: 20, height: 250, justifyContent: "space-evenly", alignItems: "flex-start" }}>
                            <h4>Book Titile  :  {this.state.bookname} </h4>
                            <h4>Price  :  {this.state.bookprice} </h4>
                            <h4>Author :  {this.state.bookauother} </h4>
                            <h4>Page Count :  {this.state.pagecount} </h4>
                            <div style={{ display: "flex", width: "90%", flexDirection: "row", justifyContent: "space-evenly", alignItems: "flex-start" }}>
                                <div style={{ background: "#FA8072", cursor: "pointer" }} onClick={
                                    () => {
                                        this.props.onSetrole(this.props.location.state)
                                        this.props.history.push("/cart")
                                    }
                                } >
                                    <p style={{ fontSize: 10, height: 10, width: 100, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff"}}>Add to Cart</p>
                                </div>
                                <div style={{ background: "#FA8072", cursor: "pointer", marginLeft: 20  }}
                                onClick={
                                    () => {
                                        this.props.OnSetOrder(this.props.location.state)
                                        this.props.history.push("/orders")
                                    }
                                } >
                                    <p style={{ fontSize: 10, height: 10, width: 100, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>Buy Now</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{marginLeft: 20 }}>
                        {this.state.bookdescription}
                    </div>
                </div>
            </div>
        );
    }
}
const mapstatetoProps = (state) => {
    return {
        value: state,
        ordersarray:state
    }
}
const mapdispatchtoProps = (dispach) => {
    return {
        onSetrole: (value) => {
            dispach({ type: "SET_CART", value: value })
        },
        OnSetOrder: (value) => {
            dispach({ type: "SET_ORDER", value: value })
        },
        
    }

}

export default connect(mapstatetoProps, mapdispatchtoProps)(SlectedBookpage);