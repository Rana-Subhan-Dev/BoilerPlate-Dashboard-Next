
import ECommerce from "@/components/Dashboard/E-commerce";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import TableThree from "@/components/Tables/TableThree";
import React from "react";

export const metadata: Metadata = {
  title:
    "Rana Subhan  | Lead Senior Software Engineer @ PAKLOGICS",
  description: "Rana Subhan  | Lead Senior Software Engineer @ PAKLOGICS",
};

export default function Home(data:any) {
 
  console.log("meiw",data)
  
  return (
    <>
      <DefaultLayout>
        <ECommerce />
        <TableThree />
      </DefaultLayout>
    </>
  );
}

