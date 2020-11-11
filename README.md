# Mixed Messages (knock knock jokes)

## What this project does:
---
* Generate a random Knock Knock joke from a list of possible joke entries.
* The jokes can be nonsensical due to the random nature of the generator.
* The project also includes a shell script that creates a command to call node message_generator.js
    * For simplicity I inluced the commnad name and the instruction set for calling it from within the project folder, but for added value I added the command to commands list with a more complex instrution set so that the command works from anywhere in the terminal.
        ```terminal
        function jokePles(){
            pushd $FILEPATHJOKE > /dev/null
            node message_generator.js
            popd > /dev/null
        }
        ```
    * The above code uses an environment variable with the path to the program and travels to the project folder, runs the node message_generator.js command and returns to the previous working directory.

## Task List
---
- [x] Create script that generates a random joke
- [x] Create shell command to run joke generator at will in in terminal
- [ ] Add more joke lines to joke generator script.