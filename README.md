# About The Project

This is an online shoping website built to create a seamless and beautiful shopping experience with the online fashion brand Sycamore. This website supports customers to:

   ![chrome-capture](https://user-images.githubusercontent.com/87162829/152849311-14320f09-a64b-4a36-b599-a2a3c6ce0daf.gif)

- Browse individual apparel item's different styles and images.
- Add desire items to cart, specifying the quantity and sizes
- Browse related items
- Write, read & search for Questions and Answers

## Built With

* [React.js](https://reactjs.org/)
* [Express.js](https://expressjs.com/)
* [Axios](https://axios-http.com/docs/intro)
* [Sass](https://sass-lang.com/)
* [Babel](https://babeljs.io/)
* [Webpack](https://webpack.js.org/)



# Getting Started

1. Install dependencies
```
npm install
```
2. Create a config.js file with Github token to link to Atlier API. If you do not have access, reference the server code to create the backened to supply the data.

3. Start the server
```
npm start
```
4. Bundle with Webpack
```
npm run dev
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
You can check if the variable was set with:
```
printenv
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
9. Build frontend
```
npm run dev
```
Stop the watch with `crtl + c`

10. Test if project runs
```
npm run start
```

Stop the server with `ctrl + c`

11. PM2 [PM2 cheatsheet](https://devhints.io/pm2)
```
sudo npm install pm2 -g
pm2 start server/index.js
```
