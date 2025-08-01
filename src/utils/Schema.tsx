import {z} from "zod";

export const WidgetSchema=z.object({
    id:z.string(),
    title:z.string(),
    description:z.string()
})

//to add it to the bla bla blaa
export const WidgetsArraySchema=z.array(WidgetSchema)

export type Widget=z.infer<typeof WidgetSchema>