function cell(rowNum, cellNum) {
  console.log('help me')
var even = true
if (cellNum % 2 == 1) even = false
if (even) {
  return `
  <div id="cell-1-${cellNum}" class="cell red" onclick="toggle(this)">
  <div class="checker red-checker"></div>
  <div class="checker black-checker" hidden>
  </div>
  </div> 
  `
   
}
else 
return ` 
<div id="cell-1-${cellNum}" class="cell black" onclick="toggle(this)"> 
<div class="checker red-checker" hidden></div> 
<div class="checker black-checker" hidden>
</div></div> 
`


}

function rowTemplate() {
  (console.log('Hello world'))
  var rowString = ''
  for (var cellNum=1; cellNum<=8; cellNum++) {
  rowString = rowString + cell(1, cellNum) 
}

  return rowString
}