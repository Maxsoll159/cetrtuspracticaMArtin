import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../../pages/HomePage'
import { RouterInternas } from './RouterInternas'

export const Router = () => {
    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/*' element={<RouterInternas />} />
        </Routes>

    )
}
