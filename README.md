# :bar_chart: Algo Tracker v1.5
https://algo-tracker-dev.web.app


## Project Timeline
- 9/15: 
- [x] 修改 fetch problems 顺序: 登录即fetch
- [x] 增加类似购物车checkout component,将题目添加到practice problem, schedule collection


- 9/16:
- [x] 调整cart UI: 将题目显示在cart内， 增加 pass/fail 
- [x] 能否在cloud function内access firebase数据

- 9/17:
- [x] 找到能够发canlendar invite的api
- [x] 完成schedule invite逻辑
- [x] 整理当前进度

- 9/18 ~ 9/23 
- [x] 搜索by id
- [x] 定时运行email function
- [x] 题目再细分： 增加mapping
- [x] 修改email
- [x] 将当前用户数据替换为API数据

- [] create新记录时的difficulty问题
- [] 修复routing
- [] ui整理: figma建图
- [] css




## :paperclip: Description
Algo Tracker is a web application designed for tracking & analyzing individual user's data structures & algorithm practice

## :bulb: Inspiration
Algo practice is challenging, as always! The excitement of passing a Medium DP problem, the frustration of forever stucking in a Linked List problem... why don't we develop a way to keep track of these memorable pieces of algo practices? By re-purposing our daily practice data, Algo Tracker will help users to discover their strength & weakness by analyzing passing rate and error made in multiple problem categories.
- Array
- Linked List
- Tree
- Graph
- Dynamic Programming

## :thinking: Target Users & Main Features
- Data structures & Algorithms learners looking for a centralized platform to keep track of algo practice performance
- Users are able to maintain a personal account (create an account, sign-in with Google account, and change password)
![Image of Login](https://github.com/karin6543/AlgoTracker/blob/master/public/login.png)

- Log daily practice outcome & syntax error to the system
- [x] Stack Line Chart: shows daily pass/fail distribution; Red - number of problem passed; Green - number of problem failed
- [x] Tree Map: shows practice passing rate by problem category
![Image of Dashboard](https://github.com/karin6543/AlgoTracker/blob/master/public/dashboard.png)

- View auto-generated visualizations that represents overall practice performance
- [x] Donut chart: shows distribution of different error types
![Image of Error](https://github.com/karin6543/AlgoTracker/blob/master/public/error.png)

- Compare practice passing rate vs. the avg. Leetcode user passing rate
- [x] Side-by-Side Bar Chart: compare user passing rate by category vs. avg LeetCode passing rate
![Image of Benchmark](https://github.com/karin6543/AlgoTracker/blob/master/public/benchmark.png)

## :construction: Feature Under Construction 
- Allows user to select error message in browser and report to the application
- Currently leveraging Chrome Extension to capture to browser activity
- User is able to select error message (single word OR a longer text, sentence)
- Makes request to API endpoint created by AWS lambda by sending the selected text
- In the API route, logic written in Python will help to pre-process the seleted text, and return the Error Type as a response
- Response will be pushed to DB, and Error Donut Chart will be redendered
![Image of chrome](https://github.com/karin6543/AlgoTracker/blob/master/public/chrome.png)

## :cake: Tech Stack
- Front-end: React, reactstrap
- Backend & OAuth: Firebase Firestore
- Deployment: Firebase Hosting
- Visualization: D3.js

## Project Folder Structure & Study Materials
- Inspired by https://github.com/WebDevSimplified/React-Firebase-Auth

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

