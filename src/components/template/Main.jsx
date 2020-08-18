import './Main.css'
import React from 'react'

import Header from './Header'

export default props =>
    <React.fragment>
        <Header />
        <main className="content">
            Conteúdo
        </main>
    </React.fragment>