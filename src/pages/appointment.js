import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import '../style/appointment.sass'
import { useServices } from "../hooks/useServices"
import useTimes from "../hooks/useTimes"

const AppointmentScheduler = () => {
    const [dateActive, setDateActive] = useState(true)
    const [timeActive, setTimeActive] = useState(false)
    const [serviceActive, setServiceActive] = useState(false)
    const [submitActive, setSubmitActive] = useState(false)

    const [dateValue, setDateValue] = useState('')
    const [timeValue, setTimeValue] = useState('')
    const [serviceValue, setServiceValue] = useState('service')

    const handleDateChange = (e) => {
        const newDate = e.target.value
        setDateValue(newDate)
        console.log(Date(newDate))
        setTimeActive(newDate.length > 0)
    }

    const handleTimeChange = (e) => {
        const newTime = e.target.value
        setTimeValue(newTime)
        setServiceActive(newTime !== 'default')
    }

    const handleServiceChange = (e) => {
        const newServiceValue = e.target.value
        setServiceValue(newServiceValue)
        setSubmitActive(newServiceValue.length > 0)
    }

    const services = useServices().split(',')
    const times = useTimes()
    const today = new Date('2020-05-11')
    const minDate = `${today.getFullYear().toString()}-${today.getMonth().toString()}-${today.getDate().toString()}`
    useEffect(() => {
        console.log(minDate)
    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className='reservation-form' onSubmit={handleSubmit}>
                <label className={`section date ${dateActive ? 'active' : ''}`}>
                    <div className='description'>Available Days</div>
                    <input type='date' name='date' className='input' value={dateValue} onChange={handleDateChange} />
                </label>
                <label className={`section time ${timeActive ? 'active' : ''}`}>
                    <div className='description'>Available times</div>
                    <select value={timeValue} name='time' className='input' onChange={handleTimeChange} disabled={!timeActive}>
                        <option value='default'></option>
                        {times.map((currTime, index) => <option key={index} value={currTime}>{currTime}</option>)}
                    </select>
                </label>
                <label className={`section services ${serviceActive ? 'active' : ''}`}>
                <div className='description'>Service</div>
                    <select name='services' className='input' value={serviceValue} onChange={handleServiceChange} disabled={!serviceActive}>
                        {services.map((currService, index) => <option key={index} value={currService} >{currService}</option>)}
                    </select>
                </label>
                <input type='submit' value='Submit' className={`submit ${submitActive ? 'active' : ''}`} disabled={!submitActive} />
            </form>
    )
}

const AppointmentPage = () => {
    useEffect(() => {
        // fetch('http://XXX.XXX.X.X/calendar/')
        //     .then(res => res.json())
        //     .then(data => console.log(data))
    }, [])

    return ( 
        <Layout className='appointment-page'>
            <div className='business-hours'>
                <div className='title'>Normal Business Hours</div>
                <div className='content'>Mon - Fri 8am - 8pm</div>
                <div className='content'>Sat - Sun 10am - 6pm</div>
            </div>
            <div className='appointments-title'>Reserve Your Time Today!</div>
            <AppointmentScheduler />
        </Layout>
    )
}

export default AppointmentPage
