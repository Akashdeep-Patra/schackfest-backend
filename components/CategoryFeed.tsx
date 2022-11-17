import {Row, Col} from "antd";
import {RightOutlined} from "@ant-design/icons";
import Avatar from "antd/lib/avatar/avatar";
import Link from "next/link";
import CategoryWisePosts from "./CategoryWisePosts";

export default function CategoryFeed({ categoryData }: { categoryData: any }) {
    return (
        <>
            {
                Array.isArray(categoryData) && categoryData?.map((category: any)=> {
                    return (
                        <Row key={category.category} style={{marginBottom: "12px"}}>
                            <Row align="middle" justify="space-between" style={{height: "48px",width: "100%",marginRight: "4px"}}>
                                <div className="flex-box">
                                    <Avatar src={ category?.profilePic || "https://cdn.sharechat.com/295d8c15_1597741425818.png"} style={{ backgroundColor: '#f56a00',marginLeft: '6px',marginRight: '8px' }}/>
                                    <span className="category-text">{category.category}</span>
                                </div>
                                <Col className="see-all-text-box">
                                    <Link
                                        href={{
                                            pathname: `/category/${category.category}`,
                                        }}
                                        style={{color: "#8a8a8f",marginRight: "2px"}}
                                    >
                                        See More
                                    </Link>
                                    <RightOutlined style={{color: "#8a8a8f"}}/>
                                </Col>
                            </Row>
                            <Row style={{ overflowX: "scroll"}} wrap={false}>
                               <CategoryWisePosts posts={category?.posts || []}/>
                            </Row>
                        </Row>
                    )
                })
            }
        </>
    );
}
