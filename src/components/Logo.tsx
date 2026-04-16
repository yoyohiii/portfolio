import personal from "../data/about";
import { siteContent } from "../data/siteContent";

export default function Logo() {
 return (
  <div className="logo fixed top-4 left-4 z-20 section-shell px-3 py-2 sm:top-5 sm:left-5 sm:px-4 flex items-center gap-2 sm:gap-3 max-w-[calc(100vw-7rem)] sm:max-w-none">
   <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-xl bg-(--active)/20 text-(--active) flex items-center justify-center font-bold shrink-0">
    {personal.englishName.slice(0, 1).toUpperCase()}
   </div>
   <div className="min-w-0">
    <div className="font-bold text-sm sm:text-base text-(--active) truncate">
     {personal.englishName}
    </div>
    <div className="text-[11px] sm:text-xs opacity-60 truncate hidden xs:block">
     {siteContent.brand.subtitle}
    </div>
   </div>
  </div>
 );
}
