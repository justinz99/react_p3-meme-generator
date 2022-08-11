import React from 'react'
import Trip from './components/Trip'
import travelLog from "./data"
import Nav from './components/Nav'

export default function App() {
    const trips = travelLog.map(trip => {
        return (
            <Trip 
                key = {trip.id}
                {...trip}
            />
        )
    })
    return (
        <div className='container'>
            <Nav />
            {trips}
        </div>
    )
}

