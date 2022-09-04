import React from 'react'
import { Layout } from '../components/Layout'

export const Home = () => {
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
    </Layout>
  )
}
