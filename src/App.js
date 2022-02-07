import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal'
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';
// use - react hook

function App() {

    const [showModal, setShowModal] = useState(false)
    const [showEvents, setShowEvents] = useState(true)
    const [events, setEvents] = useState([])
    const addEvent = (event) => {
      setEvents((prevEvents) =>{
        return [...prevEvents, event]
      })
      setShowModal(false)
    }
    const handleClick = (id) => {
      setEvents((prevEvents) => {
        return prevEvents.filter((event) => {
          return id !== event.id
        })
      }) 
    }

  const handleShow = () => {
    setShowModal(true)
  }
  const subtitle = 'subtitle like so'
  return (
    <div className="App">
      
      <Title title="Events in Your Area" subtitle={subtitle} />

      {showEvents && (<div>
        <button onClick={() => setShowEvents(false)}>hide events</button>
      </div>)}
      {!showEvents && (<div>
        <button onClick={() => setShowEvents(true)}>show events</button>
      </div>)}
      
      {showEvents && <EventList events={events} handleClick={handleClick}/>}

      {showModal && <Modal isSalesModal={true}>
          <NewEventForm addEvent={addEvent} />
      </Modal>}
      <button onClick={handleShow}>Add New Event</button>
      
    </div>
  );
}

export default App;
