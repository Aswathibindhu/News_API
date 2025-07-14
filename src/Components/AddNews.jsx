import React, { useEffect, useState } from 'react' 
import NavigationBar from './NavigationBar'
import axios from 'axios'

const AddNews = () => {
    const [NewsData, ChangeNews] = useState(
        [
                
        ]
    )
    const FetchData =()=>{
        axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=7c1139f61f624a3abc81786995a761c7").then(
            (response)=>{
                ChangeNews(response.data.articles)
            }
        ).catch()
    }
    useEffect(()=>{FetchData()},[])
    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {NewsData.map(
                            (value, index) => {
                                return (
                                    <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                        <div class="card" height={300} width={100}>
                                            <img src={value.urlToImage} class="card-img-top" alt="..." width={100} height={300}/>
                                            <div class="card-body">
                                                <p class="card-text">{value.title}</p>
                                            </div>
                                            <div class="card-body">
                                                <p class="card-text">{value.content}</p>
                                            </div>
                                            <div class="card-body">
                                                <p class="card-text">{value.url}</p>
                                            </div>
                                            
                                            <a href="#" class="btn btn-primary">Read Now</a>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNews