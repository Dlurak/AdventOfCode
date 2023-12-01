# Advent Of Code

Here I will put my solutions for Advent of Code.

## Running

To run my solutions you need Bun and Bash, Bun is in Beta for Windows and Bash isn't nativly available for Windows.
As I use Linux I can't test how it is on Windows but I guess that the best solution is to simply use WSL.

### Test Data

Advent Of Code always provides example data.
I put this data into a file named like this: `input${part}.txt`. If you want to run the newest script with this data you can simply execute one of these commands:

```bash
$ bun solve
```

```bash
$ bun solve --debug
```

### Real Data

To run my code with the real Data you will need to set your session cookie in a enviroment variable called `COOKIE`. you can do this like this:

1. Go to any input like this: [2023 Day-1 Input](https://adventofcode.com/2023/day/1/input)
2. Right Click anywhere on the site and select `Inspect`.
3. Go to the network tab
4. Reload the page.
5. Look for the request and select it
6. Under `Request-headers` there should be a header called `Cookie`. Copy the value of this header.
7. Create a `.env` file in the root dir of this repo with the following content:
   ```
   COOKIE=${your copied session cookie}
   ```

When you are all setup you can run this command:

```bash
$ bun solve --solve
```
