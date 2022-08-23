import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import dateFormat from 'dateformat'

const AuctionShowPage = () => {

  const [auction, setAuction] = useState({})
  const [bids, setBids] = useState([])
  const [priceMet, setPriceMet] = useState("not met")
  const [newBidPrice, setNewBidPrice] = useState()

  let {id} = useParams()

  useEffect(() => {
    axios.get(`http://localhost:3000/auctions/${id}`, {withCredentials: true})
        .then(res => {
            setAuction(res.data)
            setBids(res.data.bids)            
        })
  }, [])

  useEffect(() => {
    Math.max(...bids.map(b => b.price)) >= auction.reserve_price && setPriceMet("has been met") 
  }, [auction, bids])

  const handleChange = (event) => {
    setNewBidPrice(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post(`http://localhost:3000/auctions/${id}/bids`,{
      bid: {
        price: newBidPrice
      }
    }, {withCredentials: true})
      .then(res => {
        console.log(res)
        setBids([res.data.bid, ...bids])
      })
  }
  
  return (
    <>
        <h1>{auction.title}</h1>
        <p>{auction.description}</p>
        <h3>Ends at: {dateFormat(auction.end_date, "mmmm dS, yyyy")}</h3>
        <h3>Reserve Price: ${auction.reserve_price}</h3>
        <h3>Reserve Price {priceMet}</h3>
        <form onSubmit={handleSubmit}>
          <input 
            name="price"
            type="text"
            onChange={handleChange}
            required
          />
          <button type="submit">Bid</button>
        </form>
        <h5>Previous Bids</h5>
        {bids.map(b => (
            <p key={b.id}>
                ${b.price} on {dateFormat(b.created_at, "mmmm dS, yyyy")}
            </p>
        ))}
    </>
  )
}

export default AuctionShowPage