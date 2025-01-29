import { useParams } from "next/navigation";

export const useInvteCode = () => {
    const params = useParams();
    return params.inviteCode as string;
};