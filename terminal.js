var commandJS = (function() {
  var commandPrompt = $('#command-prompt');
  var commandInput = $('#command-input');
  var terminalBody = $('.terminal-body');
  var newCommandPromptDom = commandPrompt.clone();
  var commandStore = {};
  var previousCommands = [];
  var pcCounter = 0;

  return {
    init: init,
    add: add,
    clear: clear,
    commandStore: commandStore
  }

  function init() {
    commandInput.focus();
    commandInput.on('keypress keydown', __executeUserCommand);
    $(document).on('click', function() {
      $('input:not(:disabled)').focus();
    })
    showCommandPrompt();
  }

  function showCommandPrompt() {

  }

  // Add new command, Added by user
  function add(commandName, params, callback) {
    commandStore[commandName] = {
      name: commandName,
      value: params,
      callback: callback
    }
  }

  function execute(commandName, $context) {
    if (!commandName) return;
    var commandMeta = commandStore[commandName];

    // IF command not found
    if (!commandMeta && commandName !== 'help') {
      terminalBody.append("<span class='output-column output-red'>command not found! \
        type - `help` command to see the avaiable commands.</span>");
    }

    if (commandMeta && commandName !== 'help') {
      var value = commandMeta.value;
      if (!value) {
        terminalBody.append("<span class='output-column output-red'>no information found!</span>");
      }
      if (value.constructor === Array) {
        var valueLen = value.length;
        var outputStr = '';
        for (var i = 0; i < valueLen; i++) {
          outputStr += "<span class='output-column'>"+ value[i] +"</span>";
        }
        terminalBody.append(outputStr);
      }
      if (typeof value == 'string') {
        terminalBody.append("<span class='output-column'>"+ value +"</span>");
      }
    } else if (commandName === 'help') {
      // Show help
      var outputStr = '<div class="output-heading"> List of commands: </div>';
      for (var commands in commandStore) {
        outputStr += "<span class='output-column'>"+ commands +"</span>";
      }
      terminalBody.append(outputStr);
    }
    previousCommands.push(commandName);

    // Append New Command Prompt after each command entered
    var newCommandPrompt = newCommandPromptDom.clone();
    terminalBody.append(newCommandPrompt);
    newCommandPrompt.find('input').on('keypress keydown', __executeUserCommand);
    newCommandPrompt.find('input').focus();
    $context.attr('disabled', 'disabled');

  }

  function clear() {

  }

  // EVENT BINDING FUNCTIONS
  function __executeUserCommand(event) {
    self = this;
    // On Enter key pressed
    if (event.which == 13 || event.keyCode == 13) {
      // execute command
      execute(self.value, $(self));
    }
    if (event.which == 38) {
      // On Arrow Key UP
      // pcCounter++
    }
  }
})();

commandJS.init();