import React from 'react'
import cl from './MyButton.module.css'

export default function MyButton({children, ...props}) {
return (
    <button {...props} className={cl.my_btn}>
        {children}
    </button>
)
}
