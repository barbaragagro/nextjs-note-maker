import React, { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'

function Tickets() {
    return (
        <main>
            <nav>
                <div>
                    <h2>Notes</h2>
                    <p><small> Currently existing notes.</small></p>
                </div>
            </nav>
            <Suspense fallback={<Loading />}>
                <TicketList />
            </Suspense>
        </main>
    )
}

export default Tickets