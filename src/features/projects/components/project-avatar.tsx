import Image from "next/image"

import { cn } from "@/lib/utils"

import { Avatar, AvatarFallback } from "@/components/ui/avatar"

interface ProjectAvatarProps {
    image?: string;
    name: string;
    className?: string;
    fallBackClassName?: string;
};

export const ProjectAvatar = ({
    image,
    name,
    className,
    fallBackClassName,
}: ProjectAvatarProps) => {
    if (image) {
        return (
            <div className={cn(
                "size-8 relative rounded-md overflow-hidden",
                className,
            )}>
                <Image src={image} alt={name} fill className="object-cover"/>
            </div>
        );
    }

    return (
        <Avatar className={cn("size-8 rounded-md", className)}>
            <AvatarFallback className={cn(
                "text-white bg-red-700 font-semibold text-sm upercase rounded-md",
                fallBackClassName,
            )}>
                {name[0]}
            </AvatarFallback>
        </Avatar>
    )
}