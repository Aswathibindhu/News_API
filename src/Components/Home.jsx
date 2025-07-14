import React from 'react'
import NavigationBar from './NavigationBar'

const Home = () => {
  return (
    <div>
        <NavigationBar/>
        <div className="container">
                <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <img src="https://static.vecteezy.com/system/resources/thumbnails/002/261/653/small_2x/live-news-on-red-world-map-background-element-design-for-tv-and-digital-content-vector.jpg" class="card-img-top" alt="..." height={800} width={1000} />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Home