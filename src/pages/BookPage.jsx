import React from 'react'
import { useParams } from 'react-router-dom'

export default function BookPage() {
    const {id} = useParams();
  return (
    <div>BookPage</div>
  )
}
