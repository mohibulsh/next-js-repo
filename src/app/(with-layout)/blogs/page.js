// 'use client'
import Link from "next/link";
// import { useRouter } from "next/navigation";

const blogs =[
    {
        id:1,
        year:2016,
        title:'title 1'
    },
    {
        id:2,
        year:2016,
        title:'title 2'
    },
    {
        id:3,
        year:2016,
        title:'title 3'
    },
    {
        id:4,
        year:2016,
        title:'title 4'
    },
    {
        id:5,
        year:2016,
        title:'title 5'
    },
]

const Blogspage = () => {
    const router =useRouter()
    console.log(router)
    return (
        <div className="container mx-auto">
           {
            blogs.map(({id,year,title})=><Link className="block border my-2 border-red-400"
              href={{
                pathname:`/blogs/${year}/${id}`,
                query:{
                    title:title
                }
              }}
            // onClick={()=>router.push(`/blogs/${year}/${id}?title=${title}`)}
            >
                {title}
            </Link>)
           }
        </div>
    );
};

export default Blogspage;