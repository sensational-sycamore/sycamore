# sycamore

This is our project Front-End Capstone.

# Setup & GitHub Flow

1. Clone the repo from the organization to your computer
```
git clone https://github.com/sensational-sycamore/sycamore
```
2. Create a feature branch on your computer, and commit your work to it
```
git checkout main
git pull origin main
git checkout -b feature-branch-name
git add .
git commit
```
5. Push your work to a feature branch on your fork repo
```
git push origin feature-branch-name
```
6. Create a pull request from your feature branch to the main branch on the organization repo

7. To comeback to the main branch
```
git checkout main
git pull origin main
```
8. To added new branch, start with the step 2.

# Code Review

1. Every PR should get code review and approval for all the team members prior to "Merge pull request"

# Get Started

```
npm install
```

# Tests and coverage

Test only the changes from last commit
```
npm run test
```

Test all the files
```
npm run test:all
```

Generate coverage to change from last commit
```
npm run coverage
```

Generate coverage to all files
```
npm run coverage:all
```

To see coverage report, go to:
[http://localhost:52330/coverage/lcov-report/](http://localhost:52330/coverage/lcov-report/)

To see coverage of the main branch on gitHub go to: [https://sensational-sycamore.github.io/sycamore/coverage/lcov-report](https://sensational-sycamore.github.io/sycamore/coverage/lcov-report)
