import React, { Component } from 'react'
import items from './data';
const RoomContext = React.createContext();
// <RoomContext.Provider value={'hello'}
class RoomProvider  extends Component {
    state = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    };
    // getData


    componentDidMount () {
      // this.getData
      let rooms = this.formatData(items);
      let featuredRooms = rooms.filter(room => room.featured === true);
      this.setState({
        rooms,
        sortedRooms: rooms,
        featuredRooms,
        loading: false
      });
    }

    formatData(items) {
      let tempItems = items.map(item =>{
        let id = item.sys.id
        let images = item.fields.images.map( images =>
          images.fields.file.url
        )
        let room = { ...item.fields,images,id }
        return room;
      });
      return tempItems;

    }

    getRoom = (slug) => {
      let tempRooms = [...this.state.rooms];
      const room = tempRooms.find(room => room.slug===slug);
      return room;
    };

  render() {
    return (
      <>
      <RoomContext.Provider value={{ ...this.state, getRoom: this.getRoom }}>
        {this.props.children}
      </RoomContext.Provider>
      </>
    );
  }
}


const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext }