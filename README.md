# NetSpeedTest

measure internet speed and visualize cnu's internet speed generally.

![test](https://github.com/ap-performance-test/AP-Performance-Test-Front/assets/78422003/64f61783-2ed9-4003-98e3-a1fa9b658277)

![visualize]([https://github.com/ap-performance-test/AP-Performance-Test-Front/assets/78422003/b39c3613-345a-408b-a88c-82451483a699](https://github.com/ap-performance-test/AP-Performance-Test-Front/assets/78422003/7a448f66-7e25-42fa-abbd-857c1d3c9823))

## Deploying: http://3.34.130.16:5173/

## Technology Stack

- Framework: React framework
- Architecture: this project is client for https://github.com/ap-performance-test/NetSpeedTest

speedtest's data with user's data are saved in mongodb running in docker container.

this project use this mongodb's data to visualize summerized speedtest data.

this client provide webpage "http://3.34.130.16:3000/"

1. when you want to know your network speed, go to
   http://3.90.105.35:5173/speedtest

2. when you want to summerize network speed of cnu, go to
   http://3.90.105.35:5173/visualization"

## Getting Started

1. How to clone the repository

```
git clone https://github.com/ap-performance-test/AP-Performance-Test-Front
```

2. How to run the server locally using Docker

```
git clone https://github.com/ap-performance-test/AP-Performance-Test-Front

cd AP-Performance-Test-Front

echo VITE_SERVER=10.2.58.2 > .env.development

dockerfile build . -t apperformancetestfront

docker run -p 5173:5173 apperformancetestfront
```
you can change SERVER IP address with .env.development


if you run for deploy, create .env
and set VITE_SERVER env variable


# Contributing

We welcome contributions from everyone. Here is how you can contribute to this project:

1. Fork the repository to your own GitHub account.
2. Create a new branch from `development` for your contribution. Please use a meaningful name for the branch that describes the change you are making.
3. Make your changes on your newly created branch.
4. Push the changes to your fork.
5. Submit a Pull Request (PR) to the `development` branch of this repository.

Please ensure that you are making your PR against the `development` branch, not `main`.

Before you make a PR, check that your code follows our coding style and conventions. Also make sure that all tests pass.

If you're planning to add a new feature or change existing behavior, please discuss it by opening an issue before doing the work.

# License

This project is licensed under the terms of the GNU General Public License v3.0 (GPLv3) with the additional permissions noted below.

This project utilizes code from LibreSpeed, which is also licensed under the GPLv3.

This project uses Express.js, which is licensed under the MIT License.

TypeScript is licensed under the Apache License 2.0.

MongoDB is licensed under the Server Side Public License (SSPL).

GitHub Actions, AWS EC2, and Google Cloud Storage are products owned by their respective companies, and their use is subject to their own terms and conditions.
