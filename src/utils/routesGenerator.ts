import { TRoute, TUserPath } from "../types";

export const routeGenerator = (userPath: TUserPath[]) => {
   const routes = userPath.reduce((acc: TRoute[], item) => {
      if (item.path && item.element) {
         acc.push({
            path: item.path,
            element: item.element,
         });
      } else if (item.children) {
         item.children.forEach((child) => {
            acc.push({
               path: child.path as string,
               element: child.element,
            });
         });
      }
      return acc;
   }, []);

   return routes;
};
