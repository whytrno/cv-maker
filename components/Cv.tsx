'use client'

import { About } from "@/components/About";
import { Header } from "@/components/Header";
import data from "@/app/data";
import { Experiences } from "@/components/Experiences";
import { Educations } from "@/components/Educations";
import { Awards } from "@/components/Awards";
import { Organizations } from "@/components/Organizations";
import { Certificates } from "@/components/Certificates";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import DataType from "@/types/data";
import { useEffect } from "react";

const CvPage = ({ data }: { data: DataType }) => {
    return (
        <main className="p-14 text-slate-700 space-y-4 bg-white">
            {/*HEADER*/}
            <Header data={data} />

            {/*TENTANG SAYA*/}
            <About about={data.about} />

            {/*PENGALAMAN*/}
            <Experiences data={data.experiences} />

            {/*PENDIDIKAN*/}
            <Educations data={data.educations} />

            {/*PENGHARGAAN*/}
            <Awards data={data.awards} />

            {/*ORGANISASI*/}
            <Organizations data={data.organizations} />

            {/*SERTIFIKAT*/}
            <Certificates data={data.certificates} />

            {/*SKILL*/}
            <Skills data={data.skills} />

            {/*PROJEK*/}
            <Projects data={data.projects} />
        </main>
    )
}

export default CvPage;