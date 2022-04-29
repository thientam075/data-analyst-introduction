import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

const StyleLink = {
    textDecoration: "none", fontSize: '1rem',fontWeight: 600
}
const Navbar = () => {
  return (
      <>
      <AppBar
      position="fixed"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap", mx: 2,  }}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1, fontWeight: 600, mx: 1.5 }}
        >
          Data Analyst
        </Typography>
        <nav>
          <Link
            style={StyleLink}
            variant="button"
            color="text.primary"
            href="#services"
            sx={{ my: 1, mx: 2 }}
          >
            Product
          </Link>
          <Link
            style={StyleLink}
            variant="button"
            color="text.primary"
            href="#pricing"
            sx={{ my: 1, mx: 2 }}
          >
            Pricing
          </Link>
          <Link
            style={StyleLink}
            variant="button"
            color="text.primary"
            href="#team"
            sx={{ my: 1, mx: 2 }}
          >
            Team
          </Link>
          <Link
            style={StyleLink}
            variant="button"
            color="text.primary"
            href="#contact"
            sx={{ my: 1, mx: 2 }}
          >
            Contact
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
    <div style = {{lineHeight: '64px'}}>Nothing</div>
      </>
    
  );
};
export default Navbar;
