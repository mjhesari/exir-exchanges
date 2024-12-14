import { Button } from "@nextui-org/button"
import { Card, CardBody } from "@nextui-org/card"
import { Icon } from "@iconify/react"
import Img1 from '@/public/image 39.png'
import Image from "next/image";
import { DictsTypes } from "@/app/[lang]/dictionaries/dictionaries";

export function CompanyLocCard({ dicts }: { dicts?: DictsTypes }) {
  return (
    <Card className="w-full bg-white rounded-lg border p-4 " shadow="none">
      <CardBody className="p-2">
        <div className="relative h-48 w-full bg-gray-100 overflow-hidden">
          {/* Replace with actual map implementation */}
          <div className="flex items-center gap-2 bg-white p-2 text-sm shadow-sm overflow-hidden">
            <Image src={Img1} alt="location" className="object-fill object-center w-full"/>
            
          </div>
        </div>
        <div className="flex justify-between items-start flex-col p-4 gap-4">
          <div className="flex items-center justify-center gap-x-2">
            <Icon icon="carbon:location" className="h-5 w-5 text-gray-500" />
            <span className="text-sm text-gray-600">
              Mashhad, Ahmedabad, Adalat corner, No. 150/3
            </span>
          </div>
          <div className="items-start bg-transparent" dir="ltr"><Button  className="text-indigo-500 bg-transparent"
            endContent={<Icon icon="ep:arrow-right" width="20" height="20" />}
          >
            {dicts?.button.navigate}
          </Button></div>
        </div>
      </CardBody>
    </Card>
  )
}

