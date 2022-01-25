# parse-useragent

> A super-thin wrapper exposing some widely used npm modules for parsing user-agent data
> as a simple CLI executable

## Installation

```bash
npm install -g @jaredh159/parse-useragent
```

## Usage

```bash
parse-useragent "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36"
# {"isBot":false,"os":"OS X","platform":"Apple Mac",...much more...}
```
