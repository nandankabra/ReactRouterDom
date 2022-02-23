import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../My Components/Layout'

export default function GetStudent() {
    let  param = useParams()
  
    return (
    <Layout>
        <h1>Get Student {param.id} {param.sid}</h1>
    </Layout>
    
  )
}
