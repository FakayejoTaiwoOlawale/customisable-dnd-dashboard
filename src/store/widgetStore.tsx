import { create } from "zustand";
import { Widget } from "../utils/Schema";
import widgets from "../data/widgets";
import Dashboard from "../components/Dashboard";

type DashboardStoreProps={
    widgets:Widget[],
    //this is to say that we are not returning anything
    setWidgets:(widgets:Widget[])=>void;

}

export default DashBoardStore=((create)<DashboardStoreProps>)=>{
widgets:[],
setWidgets:(widgets)=>(set(widgets))
})

