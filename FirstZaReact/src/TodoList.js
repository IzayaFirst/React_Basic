import React , {PropTypes} from 'react'

class TodoList extends React.Component{

  static props = {
    btnColor: PropTypes.string.isrequired
  }
  state = {
    inputText: '',
    listItem: []
  }
  handleChangeText = (e) =>{
    this.setState({
      inputText: e.target.value
    })
  }
  addList = () => {
    this.setState({
        listItem: this.state.listItem.concat([this.state.inputText]),
        inputText: ''
      }
    )
  }

  handleKeyPress = (e) =>{
    if(e.key === 'Enter'){
      this.addList()
    }
  }
deleteList = (index) =>{
  const a = this.state.listItem;
  a.splice(index , 1)
  this.setState({
    listItem:  a
  })
}
  render(){
    return(

        <div className="card clearfix">
          <div className="to-do-box">
              <h1 className="title">Todo App</h1>
              <div className="form-box">
                <input onKeyPress={this.handleKeyPress} onChange={this.handleChangeText} value={this.state.inputText} className="input input" type="text"/>
                <button onClick={this.addList} className="bb-input button" style={{background: this.props.btnColor}}>Add</button>
              </div>
          </div>
          {
            this.state.listItem.map((value,index)=>{
              return(
                <ul className="list-group" key={index+value}>
                  <li className="list-group-item">{value}<button onClick={this.deleteList.bind(this, index)} className="btn pull-right">x</button></li>
                </ul>
              )
            })
          }

        </div>
    )

  }
}

export default TodoList;
