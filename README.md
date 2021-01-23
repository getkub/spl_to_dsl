# Search Processing Language style to Query DSL style
Project to Convert search processing language to Query DSL 

Aim of the project is to make DSL easy for end users


## Setup
- install nodejs
- git clone https://github.com/getkub/spl_to_dsl.git 
- change directory to  `spl_to_dsl`
- install pegjs (`npm install pegjs`). A sample copy of pegjs is already provided in `src` directory
- Update a file with your SPL style query (eg `my_spl_style_query_file.txt`)
- Run the converter: `node convert_to_dsl.js my_spl_style_query_file.txt`
- DSL output will be printed into the console

## Examples

```
node convert_to_dsl.js ../examples/input_spl_stats_01.txt
```
## Tested in Linux/MacOS