import React, { useEffect } from 'react'
import { Layout } from '../components/Layout'
import {useSelector,useDispatch} from "react-redux"
import { getallcars } from '../redux/actions/actions';
import { Loading } from '../components/Loading';

export const Home = () => {
  const {cars}=useSelector((state)=>state.reducer);
  const dispatch = useDispatch();

  const {loading}=useSelector((state)=>state.loading)


  useEffect(()=>{
    dispatch(getallcars())
  },[dispatch])

  return (
    <Layout>
      <div className="slider">
        <div className="left">
          <h1 className="title">Masai Car Hire</h1>
        </div>

        <div className="right">
          <img src="./images/slider/peugeot.png" alt="" />
        </div>
      </div>

      <div className="content">
          <div className="content-row">
            <h1 className="big-title">Top Cars For Rent</h1>
          </div>

          <div className="content-row">
            {loading?<Loading/>:(
              <div className="content-groups">
                {cars&&cars.map((car)=>(
                  <div className="card" key={car._id}>
                    <div className="card-body">
                      <img src={car.image} className="img-cars" alt="car" />
                    </div>
                    <div className="card-footer">
                      <div className="card-footer-top">
                        <h3 className="car-title">{car.name}</h3>
                        <p className="per-day">Per Dar: ${(car.payPerDay).toFixed(2)} </p>
                      </div>
                      <div className="card-footer-bottom">
                        <button className="rent-now">Rent Now</button>
                      </div>
                      
                    </div>
                  </div>
                ))}
              </div>
            )}
              
          </div>
      </div>

    </Layout>
  )
}
