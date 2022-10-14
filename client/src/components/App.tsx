import React from "react";
import "./App.css";
import { User, fetchUsers, deleteUsers } from "../store/actions";
import { StoreState } from "../store/reducers/index";
import { connect } from "react-redux";

interface AppProps {
  title?: string; // Property 'title' is missing in type '{}' but required in type 'AppProps': opcional
  users: User[];
  fetchUsers(): any;
  deleteUsers(id: number): any;  
}

function App(props: AppProps) {
  // useEffect(() => {
  //   props.fetchUsers();
  //  }, []);

  return (
    <div>
      <button onClick={props.fetchUsers}>FETCH USERS!</button>
      {props.users.map((user: User) => {
        return (
          <div key={user.id}>
            <div >
              {user.id} {user.name} {user.lastName}
            <span > </span>
            <button onClick={()=>{
              props.deleteUsers(user.id);
              props.fetchUsers()
              }} >Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state: StoreState): { users: User[] } => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchUsers, deleteUsers })(App);

// function App({title}:AppProps): JSX.Element {
//   const [counter, setCounter] = useState(0);

//   return (
//     <div>
//       <h3>Henry Workshop -  {title}</h3>
//       <hr></hr>
//       <button onClick={() => setCounter(counter + 1)}>Increment</button>
//       <button onClick={() => setCounter(counter - 1)}>Decrement</button>
//       <br></br>
//       <span>{counter}</span>
//     </div>
//   );
// }

// class App extends React.Component<AppProps, AppState> {
//   constructor(props: AppProps) {
//    super(props);
//    this.state= {counter: 0};
//   }

//   onIncrement = (): void => {
//    this.setState({counter: this.state.counter + 1});
//   };

//   onDecrement = (): void => {
//    this.setState({counter: this.state.counter - 1});
//   };

//   render() {
//    return (
//     <div>
//      <h3>Henry Workshop - {this.props.title}</h3>
//      <hr></hr>
//      <button onClick={this.onIncrement}>Increment</button>
//      <button onClick={this.onDecrement}>Decrement</button>
//      <br></br>
//      <span>{this.state.counter}</span>
//     </div>
//    );
//   }
//  }

// export default App;
