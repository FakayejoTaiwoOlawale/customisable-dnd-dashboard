import React, {  useEffect, useState, type ChangeEvent } from "react"

//this is defining the type of the data from the array
interface WidgetProp{
  id:string;
  title:string;
  description:string;
}

//this was separated because what is coming from data is like an pack containing id,title, description etc
interface SearchBarProps{
  data:WidgetProp[]
}

//this line is for defining the type of data that the function would be receiving as an arguement
const Searchbar: React.FC<SearchBarProps> = ({data}) => {

  //we have to ensure we define the type
  const [query, setQuery]=useState<string>("")
  const [filteredWidgets, setFilteredWidgets]=useState<WidgetProp[]>(data)


  useEffect(()=>{
    const lowercase=query.toLowerCase();
    const searcdWidget=data.filter(item=>{
      item.title.toLowerCase().includes(lowercase);
    });
    setFilteredWidgets(searcdWidget);
  },[query, filteredWidgets])

  // //this is for specifying the type of event..you know how typescript can be
  // const filterTask=(e: ChangeEvent<HTMLInputElement>)=>{
  //   setQuery(e.target.value)
  // if (query===widgets[].title){

  // }

  return (
    <>
      <div className="mb-10">
        <input type="search" value={query} onChange={(e:ChangeEvent<HTMLInputElement>)=>setQuery(e.target.value)} className='mt-16 w-96 ring rounded-3xl px-4 py-2' placeholder='Search for your inventory here'/>
        <button className="px-2 py-1 rounded-4xl bg-blue-500 text-white ml-2 hover:cursor-pointer">search</button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {
          filteredWidgets.map((widget)=>(
            <div key={widget.id} className="max-w-sm bg-white shadow-xs rounded-xs px-2 py-1">
                <h3 className="text-2xl text-black">{widget.title}</h3>
                <p className="text-black">{widget.description}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}


export default Searchbar;