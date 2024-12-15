import { Checkbox, CheckboxGroup } from "@nextui-org/react";
import { category } from "@/utils/data/data";
import { CategorySelectProps } from "@/types/componentTypes";
const CategorySelect: React.FC<CategorySelectProps> = ({dicts,handleChange,selectedCheckBox}) => {
    return (
        <div className="flex flex-col gap-3 mt-4 ">
              <h3 className="font-semibold">{dicts?.CardFilter.exchangeCategory}</h3>
              <div className="flex flex-col gap-5">
                <CheckboxGroup value={selectedCheckBox} onChange={handleChange} aria-label="category-exchange">
                  {category.map((cate) => (
                    <Checkbox value={cate} key={cate}>
                      {cate}
                    </Checkbox>
                  ))}
                </CheckboxGroup>
              </div>
            </div>
    );
}

export default CategorySelect;
