import React from 'react'
import { useSelector } from 'react-redux'

const Booking = () => {
  const { user } = useSelector(state => state.auth)
  console.log(user);
  return (
    <main>
      <section>
        <h2>Let's find a Reservation for you </h2>
      </section>
    </main>
  )
}

export default Booking