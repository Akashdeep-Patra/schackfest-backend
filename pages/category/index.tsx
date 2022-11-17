import { NextPage } from 'next';
import {getAllCategoryData, getAvailableCategory} from '../../services';
import CategoryFeed from "../../components/CategoryFeed";
import SearchCategory from "../../components/SearchCategory";
import {useEffect, useState} from "react";
import useSWR from "swr";
import {Avatar, List, Row, Skeleton} from "antd";
import FilterCategory from "../../components/FilterCategory";


const ExplorePage: NextPage = () => {

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const {
        data: categoryData,
        error: categoryDataApiError,
        mutate: mutateAllCategoryData
    } = useSWR(
        ["getCategoryData", selectedCategories.join(",")],
        getAllCategoryData,
    );

    const isCategoryDataLoading = !categoryData && !categoryDataApiError;

    const {
        data: categoryFiltersData,
    } = useSWR(
        ["getCategoryFiltersData"],
        getAvailableCategory,
    );

    const handleChangeCategory = (category: string[]) => {
        setSelectedCategories(category);
    }

    useEffect(() =>{
        if(selectedCategories.length > 0){
            mutateAllCategoryData();
        }
    },[selectedCategories,mutateAllCategoryData]);

    return (
        <div className="explore-page">
            <SearchCategory availableCategoryData = {categoryFiltersData?.data?.data?.feed || []} handleChangeCategory={handleChangeCategory}/>
            <FilterCategory filters={categoryFiltersData?.data?.data?.feed || []}  handleChangeCategory={handleChangeCategory}/>
            {
                isCategoryDataLoading ?
                    <div>
                        {
                            [...new Array(10)].map((itm,index)=>{
                                return (
                                    <Row key={index} style={{margin: "8px"}}>
                                        <Skeleton loading={true} active avatar>
                                            <List.Item.Meta
                                                avatar={<Avatar src={""} />}
                                                title={<a href=""/>}
                                                description=""
                                            />
                                        </Skeleton>
                                    </Row>
                                )
                            })
                        }
                    </div> : <CategoryFeed categoryData={categoryData?.data || []}/>
            }
        </div>
    );
};

export default ExplorePage;
