import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";
import CardFilter from "./CardFilter";
const DesktopFilterBar = ({ dicts }: { dicts: DictsTypes }) => {
    return (
        <div className="hidden lg:block">
            <CardFilter dicts={dicts}/>
        </div>
    );
}

export default DesktopFilterBar;
