"use client";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utility/firebase";
import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { Tabs, Tab, Box } from "@mui/material";

export default function Homepage() {
  // need a state to hold this so we can display later
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
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <Typography variant="subtitle1" sx={{ mt: 3, textAlign: "center" }}>
        Create better job descriptions with AI -{" "}
        <Link href="#" sx={{ textDecoration: "none" }}>
          {" "}
          Post a job today
        </Link>
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
      </Typography>
    </>
  );
}
