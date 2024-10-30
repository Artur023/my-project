"use client";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isContactPage = pathname === "/contact";
  const buttonText = isContactPage ? "Home" : "Contact us";
  const buttonLink = isContactPage ? "/" : "/contact";

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Some Company
        </Typography>
        <Link href={buttonLink} passHref>
          <Button variant="contained" color="primary">
            {buttonText}
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
