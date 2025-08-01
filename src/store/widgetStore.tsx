import { create } from "zustand";
import { Widget } from "../utils/Schema";
import widgets from "../data/widgets";

type DashboardStore=create({
    widgets:Widget[],
    //this is to say that we are not returning anything
    setWidgets:create(widgets:widgets[])=>void;

})

const DashboardStore=create<Dashboard>((set)=>({
    widget:[],
    useWidget:(widget)=>set({widget})
}))

