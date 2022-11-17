import {Button, Row} from "antd";
import {useState} from "react";

export default function FilterCategory({filters,handleChangeCategory}: {filters: any,handleChangeCategory: any}){
    const [selectedFilter,setSelectedFilter] = useState("");

    const handleButtonClick = (category: any) => {
        if(selectedFilter !== category) {
            setSelectedFilter(category);
            handleChangeCategory([category]);
        }
        else {
            setSelectedFilter("");
            handleChangeCategory([]);
        }
    }
    return (
        <Row wrap={false} style={{overflow: "scroll",margin: "2px"}} className="filter-box">
            {
                filters.map((filter:any,index:number)=>{
                    return (
                        <Button key={filter.category} onClick={()=>handleButtonClick(filter.category)}
                                style={{
                                    color: selectedFilter === filter.category ? "black" : "#F1F1F1",
                                    backgroundColor: selectedFilter === filter.category ? "white" : "black",
                                    lineHeight: "0.5rem",
                                    fontSize: "12px",
                                    outline: "unset !important"
                                }} className="filter-button">
                            {filter.category}
                        </Button>
                    )
                })
            }
        </Row>
    )
}
