"use client";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utility/firebase";
import { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Link,
  Tabs,
  Tab,
  Box,
  Divider,
  Card,
  CardContent,
  Grid,
  Container,
  ListItem,
  ListItemText,
  List,
  IconButton,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../styles/theme";
import Input from "../components/Atoms/Input/Input";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Homepage() {
  const [value, setValue] = useState(0);
  const [job, setJob] = useState("");
  const [city, setCity] = useState("");
  const [jobs, setJobs] = useState([]);
  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleJobTitleChange = (e) => {
    setJob(e.target.value);
  };
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };
  useEffect(() => {
    const fetchJobsCollection = async () => {
      const jobsCollectionRef = collection(db, "Jobs");
      const jobsCollectionSnap = await getDocs(jobsCollectionRef);
      const jobsList = jobsCollectionSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setJobs(jobsList);
    };
    fetchJobsCollection();
  }, []);
  const filteredData =
    activeTab === 0
      ? jobs
      : jobs.filter(item => item.
        companyId
         === activeTab);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          mt: 3,
          borderRadius: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "50%",
            border: "1px solid #949494",
            borderRadius: 2,
            p: 0.8,
            boxShadow:
              "0 0.5rem 1rem rgba(45, 45, 45, 0.12), 0 0.25rem 0.5rem rgba(45, 45, 45, 0.16), 0 0 0.125rem rgba(45, 45, 45, 0.2)",
          }}
        >
          <SearchIcon />
          <Input
            value={job}
            onChange={handleJobTitleChange}
            placeholder="Job title, keywords, or company"
          />
          <Divider orientation="vertical" sx={{ height: 40, mx: 1 }} />
          <LocationOnIcon />
          <Input
            value={city}
            onChange={handleCityChange}
            placeholder="City, province, or remote"
          />
          <Button
            variant="contained"
            sx={{
              width: "120px",
              borderRadius: 3,
              backgroundColor: theme.palette.primary.main,
              textTransform: "none",
              p: 2,
            }}
          >
            Find jobs
          </Button>
        </Box>
      </Box>

      <Typography variant="subtitle1" sx={{ mt: 3, textAlign: "center" }}>
        Create better job descriptions with AI -{" "}
        <Link
          href="#"
          sx={{
            textDecoration: "none",
            color: theme.palette.primary.main,
            fontWeight: "bold",
          }}
        >
          Post a job today
        </Link>
      </Typography>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          mt: 4,
          borderBottom: "1px solid #e4e2e0",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab
            sx={{
              textTransform: "none",
              color: "black",
              "&.Mui-selected": {
                color: "black",
                fontWeight: "bold",
              },
              fontSize: "1.2rem",
            }}
            label="Job Feed"
          />
          <Tab
            sx={{
              textTransform: "none",
              color: "black",
              "&.Mui-selected": {
                color: "black",
                fontWeight: "bold",
              },
              fontSize: "1.2rem",
            }}
            label="New Results for Recent Searches"
          />
        </Tabs>
      </Box>
      {value === 0 ? (
        <Container maxWidth="lg" sx={{ mt: 2 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={6}>
              <Grid container spacing={1} direction="column">
                <Grid item>
                  {jobs.map((job) => {
                    return (
                      <Card
                        sx={{
                          margin: 2,
                          border: "1px solid #ccc",
                          boxShadow: "none",
                          borderRadius: 2,
                          cursor: "pointer",
                          borderColor: activeTab === job.companyId ?  'primary.main' : '',
                        }}
                        key={job.id}
                        onClick={() => setActiveTab(job.companyId)}
                      >
                        <CardContent>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                            >
                              {job.title}
                            </Typography>
                            <IconButton>
                              <MoreVertIcon />
                            </IconButton>
                          </Box>

                          <Typography
                            variant="body1"
                            sx={{ fontWeight: "bold" }}
                          >
                            {job.companyName}
                          </Typography>

                          <Typography variant="body2">
                            {job.location.city} {job.location.state}
                          </Typography>

                          <Typography
                            sx={{
                              backgroundColor: "lightgrey",
                              width: "4rem",
                              mt: 0.7,
                              pl: 1,
                              borderRadius: 0.8,
                            }}
                            variant="body2"
                          >
                            {job.jobType}
                          </Typography>

                          <List>
                            <ListItem>
                              <ListItemText primary={job.description} />
                            </ListItem>
                          </List>
                        </CardContent>
                      </Card>
                    );
                  })}
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Card
                sx={{
                  maxWidth: 345,
                  margin: 2,
                  border: "1px solid #ccc",
                  boxShadow: "none",
                  borderRadius: 2,
                }}
              >
                <CardContent>
                  {filteredData.length > 0 ? (
                    filteredData.map((item) => (
                      <div key={item.id}>
                           <Typography
                            variant="body1"
                            sx={{ fontWeight: "bold" }}
                          >
                            {item.companyName}
                          </Typography>

                          <Typography variant="body2">
                            {item.location.city} {item.location.state}
                          </Typography>

                          <Typography
                            sx={{
                              backgroundColor: "lightgrey",
                              width: "4rem",
                              mt: 0.7,
                              pl: 1,
                              borderRadius: 0.8,
                            }}
                            variant="body2"
                          >
                            {item.jobType}
                          </Typography>

                          <List>
                            <ListItem>
                              <ListItemText primary={item.description} />
                            </ListItem>
                          </List>

                      </div>
                    ))
                  ) : (
                    <div>No content available</div>
                  )}
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      ) : (
        <Typography sx={{ textAlign: "center", mt: 3 }}>
          No Recent Searches
        </Typography>
      )}
    </>
  );
}
