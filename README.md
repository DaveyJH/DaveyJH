# ![A forked workflow](./banner.jpg)

## About Me

👋 Hi, I’m @DaveyJH. A Software Engineer, residing in the South West of
the UK...sometimes.

I am currently working with [Code Institute](https://www.codeinstitute.net),
helping to provide high quality content for career changers to break into tech.
I love to learn... and I have done plenty of that!

Originally trained as a mechanic, moving on to become a vehicle diagnostic
expert, I developed a strong background in problem-solving and logical
fault-finding. Spending a few years working with IP video surveillance,
addressable fire alarm systems and various other HID systems gave me a great
insight into flow control, cause and effect programming and a thorough approach
to system design.

_To me...there is no rule book! 🤷‍♂️_

### 👀 I’m interested in ... Coding! Logic! Numbers! Accessibility!

Always developing my development - I hope to attain a broad knowledge base and
widen my understanding of languages. I bring expertise in problem-solving and
create innovative solutions. I love logical and lateral thinking, I find that
abstracting a problem to the core details can clear the fog that often delays
the creation of solutions. I am ambitious and driven to provide products that
are accessible for all.

A lot of my current occupational activities are carried out away from GitHub's
public domain. I still work with code every day (I might take the occasional
Sunday off! 😛) and many contributions are to private repositories and not
represented here.

_Be warned...RegEx and I are very good friends!_

> Most of my GitHub repositories are not actively hosted to save costs. If you
> want to see any of the sites up and running, either clone it and have some fun
> or reach out with some details and I will do my best to acquiesce your request.


## A few things I am proud of

### Blogs

I have written a couple of blog entries for Code Institute. One in particular
received a lot of positive feedback from technical and non-technical personas.
[Have a read here.](https://codeinstitute.net/blog/learn-javascript-tips-and-tricks/)


### [Memoize function that sums the factorials of an array of given integers](https://www.codewars.com/kata/reviews/644439a6de073e0001b37a72/groups/64492a6cd59657000130f868)

This is a solution to a CodeWars kata. I think it employs good practices and
interesting implementations... I could very well be wrong! As with all my code,
I would love feedback if anybody thinks there is something wrong here!

```javascript
const factorials = { 1: 1 };
const factorialize = x => x * f[x - 1];
const handler = { 
  get: (target, x) => target.hasOwnProperty(x) ?
          target[x] :
          f[x] = factorialize(x)
};
const f = new Proxy(factorials, handler);
const sumFactorial = arr => arr.reduce((p, c) => f[c] + p, 0);
```

### [Binary Clock](https://daveyjh.github.io/binary-clock)

I enjoyed writing this in a concise way. I also really enjoy the aesthetics of
the site.

```javascript
const hourBlocks = Array.from(document.querySelectorAll(".hour"));
const minuteBlocks = Array.from(document.querySelectorAll(".minute"));
const secondBlocks = Array.from(document.querySelectorAll(".second"));

const setBlocks = (blocks, value) => {
    blocks.map((block) => {
        block.classList.toggle("active", value % 2);
        value = Math.trunc(value / 2);
    })
};

const setClock = (init) => {
    const timeNow = new Date();
    const seconds = timeNow.getSeconds();
    setBlocks(secondBlocks, seconds);
    if (seconds === 0 || init) {
        setBlocks(minuteBlocks, timeNow.getMinutes());
        setBlocks(hourBlocks, (timeNow.getHours() % 12 || 12));
    }
};

setClock(true);
setInterval(setClock, 1000);
```

### [Decimal Clock](https://daveyjh.github.io/decimal-clock)

As above, I like the concise code and mathematics required.

```javascript
const [hourHand, minuteHand, secondHand] = document.querySelectorAll(".hand");
const OFFSET = new Date().getTimezoneOffset() * 60000;

/**
 * Provides decimal time "past midnight" in seconds
 * @param {Number} t local ms past epoch to be converted to decimal time
 * @returns number of decimal seconds past midnight
 */
const convertToDecimal = (t) => ((t - OFFSET) % 86400000) / 864;

const setClock = (providedTime) => {
  // `+ 90` is used to ensure midnight is straight up
  const time = providedTime ? new Date(providedTime).getTime() : Date.now();
  const hourAngle = convertToDecimal(time) * 0.0036 + 90;  // convert to degrees
  const minuteAngle = convertToDecimal(time) % 10000 * 0.036 + 90;
  const secondAngle = convertToDecimal(time) % 100 * 3.6 + 90;
  hourHand.style.transform = `rotate(${hourAngle}deg)`;
  minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
  secondHand.style.transform = `rotate(${secondAngle}deg)`;
};

timerRunning = setInterval(setClock, 864);
const stopClock = () => clearInterval(timerRunning);
```

### [FizzBuzzLang Translator](https://github.com/lechien73/FizzBuzzLang/blob/master/translator.py)

FizzBuzzLang was created by [@lechien73](https://github.com/lechien73/) and is
awesome. I really encourage you to read the RM! I began this translator during a
technical interview that would put me in a position working with the legend (the
dinosaur 🐱‍🐉) that created it...it went down very well!

```python
#!/usr/bin/env python3
"""Translates any text document into an .fb file

First CLI argument should be a text file to be converted.
Print to `.fb` file extension with ` > output_file.fb`

Example:

./translator.py original_text_file.txt > new_fb_file.fb

Check translation with ./code_runner.py new_fb_file.fb"""

import sys
from io import StringIO


def ascii_code_to_finary(char: str) -> str:
    """Converts a single ascii character to FizzBuzzLang readable finary

    >>> ascii_code_to_finary(101) # "e"
    'BUZZ BUZZ FIZZ FIZZ BUZZ FIZZ BUZZ'
    >>> ascii_code_to_finary(63) # "?"
    'FIZZ BUZZ BUZZ BUZZ BUZZ BUZZ BUZZ'
    >>> ascii_code_to_finary(48) # "0"
    'FIZZ BUZZ BUZZ FIZZ FIZZ FIZZ FIZZ'
    """
    binary = f'{char:07b}'
    return " ".join("FIZZ" if char == "0" else "BUZZ" for char in binary)


FINARY = {chr(i): ascii_code_to_finary(i) for i in range(128)}


class Translator:
    """Translates file to FizzBuzzLang string"""

    # allows storing of character at data-space location
    __STORE_CHAR: str = "BUZZ FIZZBUZZ FIZZBUZZ "
    # move pointer forward one space in data-space
    __MOVE_FORWARD: str = "FIZZ FIZZ FIZZ"
    # stores current data-space location in FIZZ loc
    __STORE_POS_FIZZ: str = "FIZZ FIZZBUZZ FIZZ"
    # prints data in FizzBuzzLang
    __END_OF_CODE: str = """BUZZ FIZZBUZZ FIZZBUZZ BUZZ FIZZ BUZZ FIZZ
FIZZ FIZZBUZZ FIZZBUZZ FIZZ
FIZZBUZZ FIZZ FIZZBUZZBUZZ
BUZZ BUZZ
FIZZ FIZZ FIZZ
FIZZBUZZ BUZZ FIZZ FIZZBUZZBUZZ"""
    # termination command to end fbi.py
    __TERMINATE_COMMAND: str = "FIZZBUZZ FIZZBUZZ"

    def __init__(self, source: str) -> None:
        # text content of file passed in CLI
        self.__SOURCE = source

    def __str__(self):
        """Outputs a runnable FBL script"""

        fbl_doc = StringIO()
        print(self.__STORE_POS_FIZZ, file=fbl_doc)
        for char in self.__SOURCE:
            print(self.__STORE_CHAR + FINARY[char], file=fbl_doc)
            print(self.__MOVE_FORWARD, file=fbl_doc)
        print(self.__END_OF_CODE, file=fbl_doc)
        print(self.__TERMINATE_COMMAND, file=fbl_doc)

        return fbl_doc.getvalue()


def retrieve_file() -> str:
    """Retrieves text from file

    Accepts CLI argument

    ---
    raises:
        IndexError: -- if no file name provided
        FileNotFoundError: -- if file is not found

        # TODO - remove exit()
        All errors will terminate program
    """

    try:
        file_name = sys.argv[1]
    except IndexError:
        print("Error, no file argument given when running file.")
        # TODO - remove exit() and ' raise a custom exception and let the caller figure it out '
        print("Program will terminate.")
        exit()

    try:
        with open(file_name, "r") as f:
            file_contents = f.read()
    except FileNotFoundError as e:
        print(f"{e}")
        # TODO - remove exit() and ' raise a custom exception and let the caller figure it out '
        print("Program will terminate.")
        exit()
    return file_contents


if __name__ == "__main__":
    # import doctest
    # doctest.testmod()
    print(Translator(retrieve_file()))

```

## Contact Me

If you have found something in my portfolio which really piques
your curiosity, **don't hesitate to get in touch:**

[<img src="./linked-in.png" width="250">](https://www.linkedin.com/in/davejhorrocks/)

**[Curriculum Vitae](./djhorrocks-cv.pdf)**
