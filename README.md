# :bar_chart: Algo Tracker v1.5
https://algo-tracker-dev.web.app

## Upcoming Features
功能1. 查看实时lc题目列表
- 新增collections: User, UserPractice, ProblemSchedule, Problems
- Google cloud function进行lc爬虫，更新数据库
- 每周一次按tag爬虫，不需要login

功能2. 训练记录与邮件提醒
- 为用户设定训练记录页面
- 允许用户将题目加入提醒scheduler，并设置频率
- 例：将word search设为2天后回顾，并收到提醒
- 用户登录后如当天有需要回顾的题目，会收到pop-up notification

功能3. 更精细，合理的题目类型&技巧分类
- 细分数据结构与算法解题技巧
- 减少重复的定义

## Project Timeline
- 9/3 ~ 9/6: 重新定义题型分类，增加新firebase collection, 增加user practice UI
- 9/10 ~ 9/16：修改爬虫script，deploy至GCF
- 9/17 ~ 9/23 增加训练记录 & scheduler 相关逻辑
- 9/24 美化界面

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

