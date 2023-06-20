import loadedSingleData from "@/app/utilites/loadedSingleData";
export const generateMetadata = async({params})=> {
   const {title}=await loadedSingleData(params.id)
   return{
    title:title
   }
  }
const SinglePage = async({params}) => {
    const {body,title}=await loadedSingleData(params.id)
    return (
        <div>
           <div className="block border p-1 my-2 border-red-400" >
                <div>
                    <h2>{title}</h2>
                <p>{body}</p>
                </div>
            </div>
        </div>
    );
};

export default SinglePage;