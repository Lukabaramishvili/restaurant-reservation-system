import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const URL = `http://localhost:3000/reservations`

class App extends Component {
  state = {
    reservations: [],
    loading: true
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(reservations => this.setState({
      reservations,
      loading: false
    }))
  }


  render() {
    const { loading, reservations } = this.state
    if(loading) {
      return <h2>Loading...</h2>
    }
    console.log(reservations);
    return (
      <div className="App container center'">
        <h1>Welcome to CheeseBoat</h1>
        <h2>Reserve Your Table</h2><br /> <hr />
        <div>
          <label>Choose Table</label>
          <select className="form-control">
            <option value="table1">Table 1</option>
          </select> <br />
        </div>
        <form id="new-reservation-form" />
          <div className="form-group">
            <label>Choose Time</label>
            <select className="form-control">
              <option value="1:00">1:00</option>
            </select>
          </div>
          <div className="form-group">
            <label>Reservation Name</label>
            <input type="text" className="form-control" id="new-name" placeholder="type your name" />
          </div> <hr />
        <h3>Reservations</h3>
        {
          reservations.map((reservation, key) => (
            <p key={reservation.id}>
              {reservation.name} {reservation.slot}
            </p>
          ))
        }
      </div>
    );
  }
}

export default App;
