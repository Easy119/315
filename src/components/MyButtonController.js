import React, { Component} from "react";
import ButtonActions from "../action/ButtonActions"
import MyButton from "./MyButton"
import ListStore from "../stores/ListStore"
class MyButtonController extends Component {
    constructor(){
        super()
        this.state = {
            items : ListStore.getAll(),
            a : [12,12,12]
        }
        
    }
    componentDidMount() {
        ListStore.addChangeListener(()=>{
            this.setState({
                items: ListStore.getAll()
            });
        });
    }

    componentWillUnmount() {
        ListStore.removeChangeListener(()=>{
            this.setState({
                items: ListStore.getAll()
            });
        });
    }

    _onChange(){
        this.setState({
            items: ListStore.getAll()
        });
    }

    createNewItem(str) {
        ButtonActions.addNewItem('new item');
        this.setState({
            a :str
        })
    }
    testfun(){
        console.log(this)
    }

    render() {
        return (<div>
                <MyButton emitbaba = { this.createNewItem.bind(this)}  items={this.state.items}/>
                <p onClick = {(this.testfun).bind(this)}>{this.state.a}</p>
                <ul>
                    {
                        this.state.items.map((item,index)=>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
        </div>);
    }
}
export default MyButtonController