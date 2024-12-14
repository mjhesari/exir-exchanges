import { Checkbox, CheckboxGroup } from "@nextui-org/react";
import { category } from "@/utils/data/data";
import { Category } from "@/types/componentTypes";
const CategorySelect = ({selectedCheckBox,handleChange}:Category) => {
    return (
        <div className="flex flex-col gap-3 mt-4 ">
              <h3 className="font-semibold">Echanges Categories</h3>
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
