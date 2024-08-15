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
  Divider, // Import Divider
} from "@mui/material";

export default function Homepage() {
  const [value, setValue] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
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
            p: 0.5,
            boxShadow:
              "0 0.5rem 1rem rgba(45, 45, 45, 0.12), 0 0.25rem 0.5rem rgba(45, 45, 45, 0.16), 0 0 0.125rem rgba(45, 45, 45, 0.2)",
          }}
        >
          <TextField
            value={firstName}
            onChange={handleFirstNameChange}
            fullWidth
            placeholder="Job title, keywords, or company"
            sx={{
              "& .MuiOutlinedInput-notchedOutline": {
                border: "none",
              },
              flex: 1,
            }}
          />
          <Divider
            orientation="vertical"
            sx={{ height: 40, mx: 1 }}
          />
          <TextField
            value={lastName}
            onChange={handleLastNameChange}
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
              backgroundColor: "#2557a7",
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
        <Link href="#" sx={{ textDecoration: "none" }}>
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
