import {useState, useEffect} from 'react'
import axios from 'axios'
import dateFormate from 'dateformat'
import { Link } from 'react-router-dom';

const AuctionIndexPage = ({user}) => {

  const [auctions, setAuctions] = useState([])

  const fetchAuctions = () => {
    axios.get('http://localhost:3000/auctions',{withCredentials: true})
        .then(res => setAuctions(res.data))
  }

  useEffect(()=>{fetchAuctions()}, [])

  return (
    <>
        <h1>Auctions</h1>
        {auctions.map(a => 
          {
            if (a.user?.id === user?.id || a.published) {
              return (
                <div key={a.id}>
                    <h2>
                      <Link to={`/auctions/${a.id}`}>{a.title}</Link> 
                    </h2>
                    <p>Seller: {a.user?.name}</p>
                    <p>Posted on {dateFormate(a.created_at, "mmmm dS, yyyy")}</p>
                </div>
              )
            } else {
              return (
                <p key={a.id}></p>
              )
            }
          }
          // (
          //     <div key={a.id}>
          //         <h2>
          //            <Link to={`/auctions/${a.id}`}>{a.title}</Link> 
          //         </h2>
          //         <p>Seller: {a.user?.name}</p>
          //         <p>Posted on {dateFormate(a.created_at, "mmmm dS, yyyy")}</p>
          //     </div>
          // )
        )}
    </>
  )
}

export default AuctionIndexPage