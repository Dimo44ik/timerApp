import React, { useEffect, useState } from 'react'
import cl from './TimerApp.module.css'
import MyButton from './MyButton/MyButton'

export default function TimerApp() {
    const [count, setCount] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {
        let interval
        if(isRunning) {
            interval = setInterval(() => {
                setCount(t => t + 1)
            }, 100)
        }
        return () => clearInterval(interval)
    }, [isRunning])

    const formatTime = (ms) => {
        const seconds = Math.floor(ms / 600)
        const millis = Math.floor((ms % 600) / 10)
        return `${seconds.toString().padStart(2, '0')}:${millis.toString().padStart(2, '0')}`
    }

    const handleStart = () => setIsRunning(true)
    const handleStop = () => setIsRunning(false)
    const handleReset = () => {
        setCount(0)
        setIsRunning(false)
    }

    return (
        <>
        <div className={cl.container_timer}>
            <h1 style={{margin: '15px'}}>Таймер</h1>
            <h2 style={{margin: '15px'}}>{formatTime(count)}</h2>
            <div>
                <MyButton onClick={handleStart}>Запуск</MyButton>
                <MyButton onClick={handleStop}>Стоп</MyButton>
                <MyButton onClick={handleReset}>Сбросить</MyButton>
            </div>
        </div>
        </>
    )
}