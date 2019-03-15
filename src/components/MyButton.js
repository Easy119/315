import React, {  Component} from "react";
class MyButton extends Component {
    constructor(){
        super();
    }
    childClick(){
        console.log("子组件")
        this.props.emitbaba(); // 父子组件
    }
    arrList(){
        return this.props.items.map((item,index)=>{
            return  <li key={index}>{item}</li>
        })
    }
    
    render() {
        return (
            <div>
                <button onClick={(this.childClick).bind(this)}>New Item</button>
                <ul>{this.arrList()}</ul>
            </div>
        )
    }
}
export default MyButton