import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

const tiers = [
  {
    title: "Free Trial",
    subheader: "For Analytics Beginners",
    price: "0",
    description: [
      "1 users included",
      "1 connected to database",
      "3-4 report can be created",
      "Unlimit dataset can be created",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Entry",
    subheader: "Recommend",
    price: "100",
    description: [
      "20 users included",
      "4-5 connected to database",
      "50 report can be created",
      "Unlimit dataset can be created",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Standard",
    subheader: "For huge Analyst team",
    price: "250",
    description: [
      "50 users included",
      "15-20 connected to database",
      "150 report can be created",
      "Unlimit dataset can be created",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

const Pricing = () => {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="md"
        component="main"
        id="pricing"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h3"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          component="p"
        >
          There are three great value options which allow increase limit of
          report and member of your team.<br/> Usage-based pricing mechanism. All
          plans start with a 14-day trial with unlimited functionalities. No
          credit card details required. Change your plan at any time.
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
          sx={{ fontWeight: 600 }}
        >
          There are three monthly subscriptions available:
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main" sx={{ mb: 6 }}>
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /month
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="left"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Pricing;
