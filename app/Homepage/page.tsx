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
  TextField,
  Divider,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import theme from "../styles/theme";

export default function Homepage() {
  const [value, setValue] = useState(0);
  const [job, setJob] = useState("");
  const [city, setCity] = useState("");

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
      console.log("Jobs Collection Data:", jobsList);
    };
    fetchJobsCollection();
  }, []);

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
          <TextField
            value={job}
            onChange={ handleJobTitleChange}
            fullWidth
            placeholder="Job title, keywords, or company"
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              flex: 1,
            }}
          />
          <Divider orientation="vertical" sx={{ height: 40, mx: 1 }} />
          <LocationOnIcon />
          <TextField
            value={city}
            onChange={handleCityChange}
            fullWidth
            placeholder="City, province, or remote"
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              flex: 1,
            }}
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
          <Tab label="Job Feed" />
          <Tab label="New Results for Recent Searches" />
        </Tabs>
      </Box>
    </>
  );
}
