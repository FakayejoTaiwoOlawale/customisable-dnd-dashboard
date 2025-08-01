import {useQuery} from "@tanskreactquery"
import {z} from zod;


const products=z.createObject(
    {
        id:z.string,
        title:z.string,
        description:z.string,
    }
)




export default api=async():Promise<Products>=>{
    //this is for deconstructing the objects created from zod
const {id,title,description}=products.parse

try{
    //trying to save the format here
    const response=await useQuery(['products'],products)
}
catch{
    console.error("Invalid request");
    return []
}
return response

}

