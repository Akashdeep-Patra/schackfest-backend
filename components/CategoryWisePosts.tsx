import {Col} from "antd";
import VideoCard from "./VideoCard";

export default function CategoryWisePosts({posts}: { posts: any }){

    return (
        <>
            {
               posts.map((post: any,index: number)=>(
                    <Col key={index} style={{marginRight: "4px"}}>
                        <VideoCard url={post.v || ""} />
                    </Col>
                ))
            }
        </>
    )
}
