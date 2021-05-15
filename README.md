# Algo Tracker
https://algo-tracker-dev.web.app

## Description
Algo Tracker is a web application designed for tracking & analyzing individual user's data structures & algorithm practice

## Inspiration
Algo practice is challening, as always ... the excitement of passing a Medium DP problem, the frustration of forever stucking in a Linked List problem... why don't we develop a way to keep track of these memorable pieces of algo practices? By re-purposing our daily practice data, Algo Tracker will help users to discover their strength & weakness by analyzing passing rate and error made in multiple problem types.

## Target User & Main Features
- Data structures & Algorithms learners looking for a centralized platform to keep track of algo practice performance
- Users are able to maintain a personal account (create an account, sign-in with Google account, and edit profile & password)
![Image of Login](https://github.com/karin6543/AlgoTracker/blob/master/public/login.png)

- Log daily practice outcome & syntax error to the system
- [x] Stack Line Chart: shows daily pass/fail distribution; Red - number of problem passed; Green - number of problem failed
- [x] Tree Map: shows practice passing rate by problem category
![Image of Dashboard](https://github.com/karin6543/AlgoTracker/blob/master/public/dashboard.png)

- View auto-generated visualizations that represents overall practice performance
- [x] Donut chart: shows distribution of different error type
![Image of Error](https://github.com/karin6543/AlgoTracker/blob/master/public/error.png)

- Compare practice passing rate vs. the avg. Leetcode user passing rate
- [x] Side-by-Side Bar Chart: compare user passing rate by category vs. avg LeetCode passing rate
![Image of Benchmark](https://github.com/karin6543/AlgoTracker/blob/master/public/benchmark.png)

## Tech Stack
- Front-end: React, reactstrap, styled-components
- Backend & OAuth: Firebase Firestore
- Deployment: Firebase Hosting
- Visualization: D3.js

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

