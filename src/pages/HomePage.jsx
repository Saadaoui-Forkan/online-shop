import React from 'react'
import HomeTop from '../components/Home/HomeSlider'
import Categories from '../components/Home/Categories'
import NewArrival from '../components/Home/NewArrival'
import Collection from '../components/Home/Collection'
import Featured from '../components/Home/Featured'

function HomePage() {
  return (
    <React.Fragment>
        <HomeTop />
        <Categories />
        <NewArrival />
        <Collection />
        <Featured />
    </React.Fragment>
  )
}

export default HomePage