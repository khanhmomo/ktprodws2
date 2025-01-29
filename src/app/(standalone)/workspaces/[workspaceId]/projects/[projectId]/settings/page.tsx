import { getCurrent } from "@/features/auth/queries";

import { redirect } from "next/navigation";
import { ProjectIdSettingsCLient } from "./client";

const ProjectIdSettingsPage = async () => {
    const user = await getCurrent();
    if (!user) redirect("sign-in");

    return <ProjectIdSettingsCLient />;
    
}

export default ProjectIdSettingsPage;