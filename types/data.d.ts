import ExperienceType from "./experience";
import EducationType from "./education";
import AwardType from "./award";
import CertificateType from "./certificate";
import OrganizationType from "./organization";
import ProjectType from "./project";

declare type DataType = {
    name: string;
    province: string;
    city: string;
    address: string;
    postalCode: string;
    phone: string;
    email: string;
    linkedin: string;
    about: string;
    experiences: ExperienceType;
    educations: EducationType;
    awards: AwardType;
    certificates: CertificateType;
    organizations: OrganizationType;
    skills: string[];
    projects: ProjectType;
};

export default DataType;