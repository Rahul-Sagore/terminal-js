# terminal-js
A JS plugin to define your commands using javascript and display it in the browser with a Terminal like UI and interactions.

Demo in the Chrome Browser.

![TerminalJS Demo](https://raw.githubusercontent.com/Rahul-Sagore/terminal-js/master/assets/media/terminalJS-demo.gif)

## Documentation

### Installation

Add terminal.js and terminal.css in your html:

```html
<head>
 <link rel="stylesheet" type="text/css" href="terminal.css">
</head>
<body>
 <script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
 <script type="text/javascript" src="terminal.js"></script>
</body>
```

### Adding new command

User `.add()` method to add new commands. First argument is your command name and second argument is output to display (Array or String)
```js
 commandJS.add('projects', ["Helprt-meth", 'material-tooltip', 'medium-toc']);
 commandJS.add('designation', "Frontend Engineer");
```

TODO:
* Allow printing links.
* Previous commands on Up/Down Arrow.
* Fix Continuous blinking cursor.
* UI Fixes, correct color code.
* Remove jQuery dependency, if possible.
