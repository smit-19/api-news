import React, { useEffect, useState } from 'react'

const Example = () => {
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1118ca3022ef4203a2efc84cb4efc60a')
    //         const data = await response.json()
    //         console.log(data, "data=========>")
    //     }
    //     fetchData()
    // }, [])

    // const [articles, setarticles] = useState([])
    // const [category, setCategory] = useState('genaral')


    // useEffect(() => {
    //     fetchData()
    // }, [category])
    // const fetchData = async () => {
    //     const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1118ca3022ef4203a2efc84cb4efc60a`)
    //     if (response) {
    //         const data = await response.json()
    //         setarticles(data.articles)
    //     }
    // }
    // const handleCetagory = (value) => {
    //     setCategory(value)
    // }



    const [data, setData] = useState([])
    const [category, setCategory] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=1118ca3022ef4203a2efc84cb4efc60a`)
            .then(response => response.json())
            .then(data => setData(data.articles))
            .catch(error => console.log(error))
    }, [category])

    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
            <div className='container-fluide bg-dark' id='nav-bar'>
                <button className='btn' id='nav-btn' onClick={() => setCategory("business")}>Business</button>
                <button className='btn' id='nav-btn' onClick={() => setCategory("entertainment")}>Entertainment</button>
                <button className='btn' id='nav-btn' onClick={() => setCategory("sports")}>Sports</button>
                <button className='btn' id='nav-btn' onClick={() => setCategory("health")}>Health</button>
                <button className='btn' id='nav-btn' onClick={() => setCategory("science")}>Science</button>
                <button className='btn' id='nav-btn' onClick={() => setCategory("technology")}>Technology</button>
            </div>
            <div className='container' style={{ marginLeft: '100px', marginTop: '100px', position: "absolute" }}>
                {data.map((item, index) => {
                    return (
                        <div key={index} className='card' >
                            <img src={item.urlToImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h1 className='card-title'>{item.author}</h1>
                                <h5 className="card-title">{item.title}</h5>
                                <p className='card-text'>{item.publishedAt}</p>
                                <p className="card-text">{item.description}</p>
                                <button href={item.url} className='btn btn-warning'>More info.</button>
                            </div>

                        </div>
                    )
                })}

            </div>
        </>
    )
}

export default Example
