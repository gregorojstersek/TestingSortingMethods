# TestingSortingMethods

A Node.js command line application that can test different sorting methods to see which method is the fastest.

# Different sorting algorithms

Algorithms that are tested:
• Bubble sort
• Selection sort
• Insertion sort
• Quick sort
• Heap sort
• Merge sort

Two methods that are regularly used in a normal project:
• Array method sort
• Lodash sort

## Install

Navigate to the root of the project and install all the packages.

```sh
npm install
```

Then you can run the application.

## TEST A

Sort 11 small numbers (<100) with different methods to see which is the fastest and estimate how long would it take to run that method 10 Billion (10^10) times. 

Running the app.
```sh
node app.js --t a --et 100000 --al 11 --from 1 --to 99
```
Properties:
task (t): a
excTimes (et): How many times you want to execute that method - 100000 (10^5) times
arrayLength (al): How many items you want in the array - 11
from: from number where random number is created - 1
to: to number where random number is created - 99

Results:
Bubble sort time spend:  8 ms
Selection sort time spend:  12 ms
Insertion sort time spend:  5 ms
Quick sort time spend:  22 ms
Heap sort time spend:  20 ms
Merge sort time spend:  632 ms
Built in sort time spend:  37 ms
Lodash sort time spend:  291 ms

Estimation for 10^9 and 10^10:
run
```sh
node estimation.js --x1 31.3 --x2 278.4 --x3 2732.1
```
Properties:
x1: Result from running the sorting method 10^6 times
x2: Result from running the sorting method 10^7 times
x3: Result from running the sorting method 10^8 times

Results:
x4 28067.087425808364
x5 294783.9673462058

## TEST B

Sort 10000 powers (a^b) where a and b are random numbers between 100 and 10000 and estimate how long would it take to run it.

Running the app.
```sh
node app.js --t b --et 1 --al 10000 --from 10 --to 100
```

Properties:
task (t): b
excTimes (et): How many times you want to execute that method - 10000 (10^4) times
arrayLength (al): How many items you want in the array - 10000
from: from number where random number is created - 10
to: to number where random number is created - 100

Results:
Bubble sort time spend:  188 ms
Selection sort time spend:  72 ms
Insertion sort time spend:  38 ms
Quick sort time spend:  7 ms
Heap sort time spend:  7 ms
Merge sort time spend:  14 ms
Built in sort time spend:  20 ms
Lodash sort time spend:  43 ms