'use client'
import {useParams, useSearchParams} from 'next/navigation'
const SinglePage = ({params,searchParams}) => {
    const [year,id]=params.segments;
    const params2=useParams();
    const searchParams2=useSearchParams()
    console.log(params2.segments,searchParams.title)
    return (
        <div>
            this is the {year} and {id}
        </div>
    );
};

export default SinglePage;