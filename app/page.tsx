"use client";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./utility/firebase";
import { useEffect } from "react";

export default function Home() {
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
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>job indeed</h1>
    </main>
  );
}
