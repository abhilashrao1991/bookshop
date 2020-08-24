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
    }
  }

}
class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksarray: []
    }
  }
  componentDidMount() {
    this.setState({ booksarray: this.props.value.books })
  }
  booksarrayreturnfun = () => {
    let array = []
    let count = 0
    {
      this.state.booksarray.map((item, index) => {
        count++
          array.push(
          <div key={index+1} style={{ width: 150, height: 200, border: "1px solid lightgray", margin: 25, float: "left" }}>
            <div style={{ width: 150, height: 135, border: "1px solid lightgray", }}>
              <img src={item.image} style={{ width: 150, height: 135,cursor:"pointer" }} onClick ={
                ()=>{
                  this.props.history.push({pathname:"/bookdetails",state:item})
                }
              } alt={item.bookname}></img>
            </div>
            <div style={{ width: 150, height: 65, border: "1px solid lightgray",background:"lightgray",textAlign:"center",cursor:"pointer" }}  onClick ={()=>{
                this.props.history.push({pathname:"/bookdetails",state:item})
              }}>
              <p style ={{fontSize:10}}>Title :  {item.bookname.slice(0,10)}</p>
              <div style ={{background:"#FA8072",cursor:"pointer"}} onClick ={()=>{
                this.props.history.push({pathname:"/bookdetails",state:item})
              }}>
                <p style ={{fontSize:10, height: 30, display:"flex",alignItems:"center",justifyContent:"center"}}>Buy Button</p>
              </div>

            </div>

          </div>
          )
      })
    }
    return array
  }

  render() {
    return (
      <div style={{ margin: "15px auto",  width: "90%", border: "5px solid lightgray" }}>
        <div style={{ height: 40, width: "100%", border: "2px solid lightgray", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", background: "lightgray" }}>
          <h3 style={{ marginLeft: 15 }}>eCommerce Site</h3>
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
        <div style={{ display: 'flex', flexDirection: "column", width: "100%", alignItems: "center", justifyContent: "space-evenly"}}>

          <div style={{ width: "100%", display: "inline-block", flexDirection: "row", alignItems: "center", justifyContent: "space-evenly" }}>
            {this.booksarrayreturnfun()}
            
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapstatetoProps, mapdispatchtoProps)(home);