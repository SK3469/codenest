"use client"
import React from 'react'

type ErrorPageProps ={
    error:Error
}
const ErrorPage : React.FC<ErrorPageProps> = ({error}) => {   //error page only work in use client
  return (
    <div>{error.message}</div>
  )
}

export default ErrorPage