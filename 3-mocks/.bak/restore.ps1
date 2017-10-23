ls $PSScriptRoot\..\src\*.* | Remove-Item
copy $PSScriptRoot\index.ts $PSScriptRoot\..\src\
ls $PSScriptRoot\..\tests\*.* | Remove-Item
copy $PSScriptRoot\index.tests.ts $PSScriptRoot\..\tests\
ls $PSScriptRoot\..\.dist | Remove-Item -Recurse
gulp
# mocha -r ts-node/register -R min -w tests/*.tests.ts
mocha -r ts-node/register --watch-extensions ts --watch -R list tests/*.tests.ts
