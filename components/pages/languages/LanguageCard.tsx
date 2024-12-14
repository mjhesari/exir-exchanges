import { Icon } from "@iconify/react";
import { Card } from "@nextui-org/react";
// import Data
import { regions } from "@/utils/data/data";



const LanguageCard = () => {
    return (
    <Card className="w-full p-5 border" shadow="none" aria-label="Language Card">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-around">
      {regions.map((region) => (
        <div key={region.name} className="">
          <div>
            <h2 className="p-4 text-5xl font-semibold mb-4 w-30">{region.name}</h2>
          </div>
          <div>
            <ul className="space-y-4 px-4">
              {region.languages.map((language) => (
                <li 
                  key={language.code}
                  className="flex items-center gap-3 hover:bg-default-100 p-2 rounded-lg cursor-pointer transition-colors"
                >
                  <Icon 
                    icon={language.flag} 
                    width='35'
                    className="object-cover"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="font-medium">{language.name}</div>
                    <div className="text-sm text-default-500">{language.localName}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </Card>
    );
}

export default LanguageCard;
