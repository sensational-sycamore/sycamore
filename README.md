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


# Deployment

1. Create a EC2 instance running Ubuntu(linux).
2. Set EC2 security groups rules(add inboud rule for HTTP).
3. Save the pem key somewhere secure in your computer and give it read permition.
```
chmod 400 aws-keypair.pem
```
4. Connect to your EC2 via SSH.
```
ssh -i "aws-keypair.pem" ubuntu@ec2-00-000-000-00.us-west-1.compute.amazonaws.com
```
5. Install EC2 dependencies.
```bash
sudo apt-get update && sudo apt-get upgrade -y

# download node make sure your version on your local matches the version you get
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -

# install node
sudo apt-get install -y nodejs

# set up port fowarding You might need to make a change
sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000

sudo apt-get install gcc g++ make

sudo apt-get install git
```
6. Setup environment variables
```
export GITHUB_TOKEN=xxxxxxxxxxxx
```
7. Clone code base into EC2.
```
git clone https://github.com/sensational-sycamore/sycamore.git
```
8. Install project dependencies.
```
cd sycamore
npm install
```
9. Run project.
```
npm run start
```

10. PM2 [PM2 cheatsheet](https://devhints.io/pm2)
```
sudo npm install pm2 -g
pm2 start server/index.js
```