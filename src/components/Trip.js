import React from 'react'

export default function Trip(props) {
    return (
        <section className='trip-card'>
            <img src={props.imageUrl} alt="location-img"/>
            <div className='text'>
                <div className='location'>
                    <i class="fa-solid fa-location-dot"></i>
                    <h3>{props.country}</h3>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1>{props.title}</h1>
                <p className='date'>{props.startDate} - {props.endDate}</p>
                <p className='desc'>{props.description}</p>
            </div>
        </section>
    )
}