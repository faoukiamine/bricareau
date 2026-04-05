import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import {
    Breadcrumb,
    BreadcrumbList,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { breadcrumbLabels, breadcrumbParents } from "@/utils/breadcrumbLabels";
import { categories } from "@/data/blogCategories";
import { cn } from "@/lib/utils";

interface GlobalBreadcrumbsProps {
    /** 
     * theme of the breadcrumbs: 
     * - "on-light": dark text for light backgrounds (default)
     * - "on-dark": white text for dark backgrounds or image heroes
     */
    variant?: "on-light" | "on-dark" | "light" | "dark"; 
    className?: string;
}

const GlobalBreadcrumbs: React.FC<GlobalBreadcrumbsProps> = ({
    variant = "on-light",
    className,
}) => {
    const location = useLocation();
    const { categoryId } = useParams();
    const pathnames = location.pathname.split("/").filter((x) => x);

    // Map legacy names to new descriptive ones
    const activeVariant = (variant === "light") ? "on-light" : (variant === "dark") ? "on-dark" : variant;
    const isOnDark = activeVariant === "on-dark";

    const getLabel = (slug: string, isFromUrl: boolean, index?: number) => {
        // Check main labels first
        if (breadcrumbLabels[slug]) return breadcrumbLabels[slug];

        // Check if it's a category ID (only if it was from URL)
        if (isFromUrl && index !== undefined && pathnames[index - 1] === "categorie" && categoryId) {
            const category = categories.find((cat) => cat.id === categoryId);
            if (category) return category.title;
        }

        // fallback: capitalize and replace dashes
        return slug
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    // Construct the breadcrumb items list
    const breadcrumbItems: { label: string; to: string; isLast: boolean }[] = [];

    pathnames.forEach((value, index) => {
        if (value === "categorie") return;

        const last = index === pathnames.length - 1;
        const parentSlug = breadcrumbParents[value];

        // If it's a leaf node and has a logical parent not present in the URL, inject it
        if (last && parentSlug && !pathnames.includes(parentSlug)) {
            breadcrumbItems.push({
                label: getLabel(parentSlug, false),
                to: `/${parentSlug}`,
                isLast: false,
            });
        }

        breadcrumbItems.push({
            label: getLabel(value, true, index),
            to: `/${pathnames.slice(0, index + 1).join("/")}`,
            isLast: last,
        });
    });

    // "dark" variant: text is dark on mobile (white bg) and white on desktop (image hero)
    // "light" variant: text is always dark
    const isDark = variant === "dark";

    return (
        <div className="hidden lg:block">
            <Breadcrumb className={cn("mb-6 relative z-20", className)}>
                <BreadcrumbList className={cn(
                    isOnDark ? "text-slate-500 lg:text-white/60" : "text-slate-500"
                )}>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild className={cn(
                            "flex items-center gap-1 transition-colors",
                            isOnDark ? "text-slate-600 hover:text-blue-600 lg:text-white/70 lg:hover:text-white" : "text-slate-600 hover:text-blue-600"
                        )}>
                            <NavLink to="/">
                                <Home className="w-3.5 h-3.5 mr-1" />
                                Accueil
                            </NavLink>
                        </BreadcrumbLink>
                    </BreadcrumbItem>

                    {breadcrumbItems.map((item, index) => (
                        <React.Fragment key={item.to + index}>
                            <BreadcrumbSeparator className={cn(
                                isOnDark ? "text-slate-300 lg:text-white/30" : "text-slate-300"
                            )}>
                                <ChevronRight className="w-3.5 h-3.5" />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                {item.isLast || item.label === "Ressources" || item.label === "Support" ? (
                                    <BreadcrumbPage className={cn(
                                        "font-medium line-clamp-1 max-w-[200px] md:max-w-md",
                                        isOnDark ? "text-slate-900 lg:text-white" : "text-slate-900",
                                        (item.label === "Ressources" || item.label === "Support") && (isOnDark ? "lg:text-white/60" : "text-slate-500")
                                    )}>
                                        {item.label}
                                    </BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink asChild className={cn(
                                        "transition-colors",
                                        isOnDark ? "text-slate-600 hover:text-blue-600 lg:text-white/70 lg:hover:text-white" : "text-slate-600 hover:text-blue-600"
                                    )}>
                                        <NavLink to={item.to}>{item.label}</NavLink>
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </React.Fragment>
                    ))}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
};

export default GlobalBreadcrumbs;
