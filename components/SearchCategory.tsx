import {Select} from "antd";
export default function SearchCategory({availableCategoryData, handleChangeCategory}: {availableCategoryData: any,handleChangeCategory:any}){

    return (
        <div style={{padding: "4px"}}>
            <Select
                mode="tags"
                style={{
                    width: "100%",
                }}
                tokenSeparators={[","]}
                onChange={(category: string[]) => handleChangeCategory(category)}
            >
                {availableCategoryData.map((category: any) => (
                    <Select.Option key={category.category}>{category.category}</Select.Option>
                ))}
            </Select>
        </div>
    )
}
