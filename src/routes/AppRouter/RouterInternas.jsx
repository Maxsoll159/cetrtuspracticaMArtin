

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../../pages/HomePage'
import { Personajes } from '../../pages/Personajes'
import { Navbar } from '../../components/Navbar'
import { Favoritos } from '../../pages/Favoritos'
import { PrivateRuter } from './PrivateRuter'

export const RouterInternas = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/personajes" element={<PrivateRuter><Personajes /></PrivateRuter>} />
                <Route path="/favoritos" element={<PrivateRuter><Favoritos /></PrivateRuter>} />
            </Routes >

        </>
    )
}
