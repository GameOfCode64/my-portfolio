import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Backend, Frontend, Other } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="w-full px-20 mt-32 ">
      <h1 className="text-3xl font-semibold text-white text-center">
        Tech Stack
      </h1>
      <div className="mt-8 w-full">
        <Tabs defaultValue="frontend">
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>
          <TabsContent value="frontend" className="w-full">
            <div className="mt-12 w-full">
              <div className="grid w-full md:grid-cols-5 grid-cols-3 gap-5">
                {Frontend.map((item, index) => (
                  <div
                    className="flex flex-col items-center justify-center"
                    key={index}
                  >
                    <div className="md:w-[120px] cursor-pointer md:h-[120px] w-[90px] h-[90px] p-6 rounded-full bg-[#6d28d9]/30 flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt="skill_image"
                        width={90}
                        height={90}
                      />
                    </div>
                    <p className="mt-4 text-white text-nowrap text-center">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="backend" className="w-full">
            <div className="mt-12 w-full">
              <div className="grid w-full md:grid-cols-5 grid-cols-3 gap-5">
                {Backend.map((item, index) => (
                  <div
                    className="flex flex-col items-center justify-center"
                    key={index}
                  >
                    <div className="md:w-[120px] cursor-pointer md:h-[120px] w-[90px] h-[90px] p-6 rounded-full bg-[#6d28d9]/30 flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt="skill_image"
                        width={90}
                        height={90}
                      />
                    </div>
                    <p className="mt-4 text-white text-nowrap text-center">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          <TabsContent value="other" className="w-full">
            <div className="mt-12 w-full">
              <div className="grid w-full md:grid-cols-5 grid-cols-3 gap-5">
                {Other.map((item, index) => (
                  <div
                    className="flex flex-col items-center justify-center"
                    key={index}
                  >
                    <div className="md:w-[120px] cursor-pointer md:h-[120px] w-[90px] h-[90px] p-6 rounded-full bg-[#6d28d9]/30 flex items-center justify-center">
                      <Image
                        src={item.image}
                        alt="skill_image"
                        width={90}
                        height={90}
                      />
                    </div>
                    <p className="mt-4 text-white text-nowrap text-center">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Skills;
