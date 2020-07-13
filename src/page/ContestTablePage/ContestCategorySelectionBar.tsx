import React from "react";
import {Button,ButtonGroup} from "reactstrap";
import { ContestCategory,ContestCategories } from "../../utility/ContestClassifier";

interface Props{
    selectedCategory:ContestCategory,
    setSelectedCategory:React.Dispatch<React.SetStateAction<ContestCategory>>,
}

const ContestCategorySelectionBar:React.FC<Props>=(props)=>{
    const {
       selectedCategory,
       setSelectedCategory,
    }=props;
    
    return (
        <ButtonGroup>
            {ContestCategories.map((ctg,k)=>(
                <Button 
                    key={k}
                    onClick={
                        ():void=>{
                            setSelectedCategory(ctg);
                        }
                    }
                    active={selectedCategory===ctg}
                >
                    {ctg}
                </Button>
            ))}
        </ButtonGroup>
    )
}
export default ContestCategorySelectionBar;