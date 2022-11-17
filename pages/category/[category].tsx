import { NextPage } from 'next';
import {getAllCategoryData, getCategoryWiseData} from '../../services';
import CategoryWisePosts from "../../components/CategoryWisePosts";
import {Avatar, List, Row, Skeleton} from "antd";
import {useRouter} from "next/router";
import useSWR from "swr";

const ExplorePage: NextPage = () => {

    const router = useRouter();

    const {
        data: categoryWisePosts,
        error: categoryWisePostsApiError,
    } = useSWR(
        [`${router?.query?.category}/getCategoryWisePostData`, router?.query?.category],
        getCategoryWiseData,
    );

    const categoryWisePostsLoading =  !categoryWisePosts && !categoryWisePostsApiError;

    return (
        <div className="explore-page">

                {
                    categoryWisePostsLoading ?
                        <div>
                            {
                                [...new Array(10)].map((itm,index)=>{
                                    return (
                                        <Row key={index} style={{margin: "8px"}}>
                                            <Skeleton loading={true} active>
                                                <List.Item.Meta
                                                    title={<a href=""/>}
                                                    description=""
                                                />
                                            </Skeleton>
                                        </Row>
                                    )
                                })
                            }
                        </div> :
                        <Row align="middle" justify="center">
                            <CategoryWisePosts posts={categoryWisePosts?.data?.payload?.posts || []}/>
                        </Row>
                }
        </div>
    );
};

export default ExplorePage;
