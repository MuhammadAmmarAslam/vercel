// import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"
// import { NavigationMenuContent, NavigationMenuLink } from "@radix-ui/react-navigation-menu"
// import React from "react"

// const Navigation = () => {
//   return (
//     (
//       <NavigationMenu className="">
//         <NavigationMenuList className="">
//           <NavigationMenuItem className="">
//             <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
//                 <li className="row-span-3">
//                   <NavigationMenuLink asChild>
//                     <a
//                       className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
//                       href="/"
//                     >
//                       <Icons.logo className="h-6 w-6" />
//                       <div className="mb-2 mt-4 text-lg font-medium">
//                         shadcn/ui
//                       </div>
//                       <p className="text-sm leading-tight text-muted-foreground">
//                         Beautifully designed components built with Radix UI and
//                         Tailwind CSS.
//                       </p>
//                     </a>
//                   </NavigationMenuLink>
//                 </li>
//                 <ListItem href="/docs" title="Introduction">
//                   Re-usable components built using Radix UI and Tailwind CSS.
//                 </ListItem>
//                 <ListItem href="/docs/installation" title="Installation">
//                   How to install dependencies and structure your app.
//                 </ListItem>
//                 <ListItem href="/docs/primitives/typography" title="Typography">
//                   Styles for headings, paragraphs, lists...etc
//                 </ListItem>
//               </ul>
//             </NavigationMenuContent>
//           </NavigationMenuItem>
//           <NavigationMenuItem>
//             <NavigationMenuTrigger>Components</NavigationMenuTrigger>
//             <NavigationMenuContent>
//               <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
//                 {components.map((component) => (
//                   <ListItem
//                     key={component.title}
//                     title={component.title}
//                     href={component.href}
//                   >
//                     {component.description}
//                   </ListItem>
//                 ))}
//               </ul>
//             </NavigationMenuContent>
//           </NavigationMenuItem>
//           <NavigationMenuItem>
//             <Link href="/docs" legacyBehavior passHref>
//               <NavigationMenuLink className={navigationMenuTriggerStyle()}>
//                 Documentation
//               </NavigationMenuLink>
//             </Link>
//           </NavigationMenuItem>
//         </NavigationMenuList>
//       </NavigationMenu>
//     )
//   )
// }
// ExpertNavigationList.displayName = ExpertNavigationPrimitive.List.displayName
