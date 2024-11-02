"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@nextui-org/button";
import { usePathname, useRouter } from "next/navigation";

export const Navbar = () => {
  const router = useRouter();
  const pathName = usePathname();

  const auth = () => {
    return (
      <>
        <Button
          variant="light"
          className={`${
            pathName === "/login"
              ? "hidden"
              : "sm:flex border border-default-200 rounded-md"
          }`}
          onPress={() => router.push("/login")}
        >
          Login
        </Button>
        <Button
          variant="light"
          className={`${
            pathName === "/sign-up"
              ? "hidden"
              : "sm:flex border border-default-200 rounded-md"
          }`}
          onPress={() => router.push("/sign-up")}
        >
          Sign Up
        </Button>
      </>
    );
  };

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="text-2xl font-semibold">B2B</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent justify="end">
        {auth()}
        <ThemeSwitch />
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          <NavbarMenuItem>{auth()}</NavbarMenuItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
