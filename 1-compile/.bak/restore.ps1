ls $PSScriptRoot\..\*.json | Remove-Item
ls $PSScriptRoot\..\src | Remove-Item -Recurse
ls $PSScriptRoot\..\.dist* | Remove-Item -Recurse -ErrorAction SilentlyContinue
copy $PSScriptRoot\hello.js $PSScriptRoot\..\src\
