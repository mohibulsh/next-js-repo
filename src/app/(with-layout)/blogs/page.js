// 'use client'
import loadedBlogsData from "@/app/utilites/loadedBlogsData";
import { data } from "autoprefixer";
import Link from "next/link";
// import { useRouter } from "next/navigation";


const Blogspage = async () => {
    const blogs = await loadedBlogsData()
    return (
        <div className="container mx-auto">
           {
            blogs.map(({
                id,title})=><div className="block border p-1 my-2 border-red-400" 
                key={id}             
            // onClick={()=>router.push(`/blogs/${year}/${id}?title=${title}`)}
            >
                <div>
                    <h2>{title}</h2>
                    <button className="border-none px-2 py-1 rounded bg-blue-500 ">
                        <Link href={`/blogs/${id}`}>show details</Link>
                    </button>
                </div>
            </div>)
           }
        </div>
    );
};

export default Blogspage;