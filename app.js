var GroceryList = (props) => {      

	var onListItemClick = (event) => {
       console.log('I got clicked');
  };
  return (
          <ul>
   	          <li onClick={onListItemClick}>{props.groceryItems[0]}</li>
  	          <li onClick={onListItemClick}>{props.groceryItems[1]}</li>
  	          <li onClick={onListItemClick}>{props.groceryItems[2]}</li>
     
        </ul>  
 );
};
// /////////////////////

// /// 
 class GroceryListItem extends React.Component {
 	constructor(props) {
 		super(props);
 		//console.log('super(props)--->',super(props))
         //`state` is just an object literal
        
        this.state = { done: false};
    }
       
        onListItemClick() { this.setState({done: !this.state.done });}
 	
	render() {
		var style = {textDecoration: this.state.done ? 'line-through' : 'none'};
		//console.log(this.props.groceryItems)
		  return (
   
         <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.el}</li> );
        );
  }

 }
 var GroceryListItem = (props) => (
  <ul>
    {props.groceryItems.map(el =>
      <GroceryListItem el={el}  />
    )}
  </ul>
);
///
var App = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryList groceryItems ={['Kale', 'Cucumbers','kjfhdfjk']}/> 
  </div>

 ); ///
 ReactDOM.render(<App/>, document.getElementById("app"));

// // ///   

// // 


// ////////////////////////////////////////

// class GroceryList extends React.Component {
//   constructor(props) {
//     super(props);

//     // `state` is just an object literal
//     this.state = {
//       done: false
//     };
//   }

//   // When a list item is clicked, we will toggle the `done`
//   // boolean, and our component's `render` method will run again
//   onListItemClick() {
//     this.setState({
//       done: !this.state.done
//     });
//   }

//   render() {
//     // Making the style conditional on our `state` lets us 
//     // update it based on user interactions.
//     var style = {
//       textDecoration: this.state.done ? 'line-through' : 'none'
//     };

//     // You can pass inline styles using React's `style` attribute to any component
//     // snake-cased css properties become camelCased this this object
//     return (
//       <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
//     );
//   }
// }







