import { Calendar1, Contact, SquarePen } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/shared/components/ui/sidebar";
import UserProfile from "../UserProfile/user-profile";
import Image from "next/image";

// Menu items.
const items = [
  {
    title: "Página inicial",
    url: "#",
    src: "/home.svg",
  },
  {
    title: "Clientes",
    url: "#",
    height: 17.5,
    width: 15.5,
    icon: Contact,
  },
  {
    title: "Agenda",
    url: "#",
    icon: Calendar1,
  },
  {
    title: "Financeiro",
    url: "#",
    src: "/currency.svg",
  },
  // {
  //   title: "Settings",
  //   url: "#",
  //   icon: Settings,
  // },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <UserProfile />
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="text-[#414552] font-semibold">
                      {item.src && (
                        <Image
                          src={item.src}
                          alt={item.title}
                          width={16}
                          height={16}
                        />
                      )}
                      {item.icon && <item.icon />}

                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-[82px]">
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="#" className="text-[#414552] font-semibold">
                    <SquarePen />
                    <span>Cadastro</span>
                  </a>
                </SidebarMenuButton>
                <p className="text-btn-primary font-semibold ml-[42px]">Rotinas</p>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
