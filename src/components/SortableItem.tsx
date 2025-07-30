import React from 'react'
import {z} from "zustand"
import {create} from "@zustand"

const todoSchema=()={
    title:z.string
}

const useTodo=create(state)=>{
    isCompleted:false,
    remove:(state)=>{console.log("this has been removed")}
}


const SortableItem = () => {
  return (
    <div>
      
    </div>
  )
}

export default SortableItem
