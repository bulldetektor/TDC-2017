1. Vis kompilering fra TS -> JS
- rename til .TS
- tsc .\src\hello.ts --outdir ".dist"
- side-by-side sammenligning js vs ts

2. Legg til TS-spesifikk kode (type-sjekking)
- string-param 'to'
- tsc error: endre "TDC 2017" -> { name: "TDC 2017" }
- js genereres selv om feil; --noEmitOnError
- fiks feil, kompiler

3. Klasse
- class Receiver
- kompiler, vise diff
- tsc target es6
- ctor param -> field

4. Interface
- interface IHaveAName
- kompilere vise diff

5. tsconfig.js
- vise kompilator options; tsc -?
- tsc --init
- åpne tsconfig.js
- noImplicitAny; reverser endringene i hello.ts, tsc feiler
