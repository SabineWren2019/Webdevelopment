function createChecker(rowNum) {
  if (rowNum <=3) {
    return `<div class="checker red-checker"></div> <div class="checker black-checker" hidden></div>`
  }
  else if (rowNum >= 6) {
  return ` <div class="checker black-checker"> </div> <div class="checker red-checker" hidden></div>`
}
else { return `<div class="checker black-checker" hidden></div> <div class="checker red-checker" hidden></div>`}
}

function Similarity(num) {
  return (num % 2 == 0) ? 'even' : 'odd'
}

function cellColor(cellNum, rowNum) {
  return Similarity(cellNum) == Similarity(rowNum) ? 'red' : 'black'
}

function createCell(rowNum, cellNum) {
  if (cellColor(cellNum, rowNum) === 'black') {
    return ` <div id="cell-${rowNum}-${cellNum}"  class="cell black" onclick="toggle(this)" >
    ${createChecker(rowNum)} </div>`
  }

  else
  return ` <div id="cell-${rowNum}-${cellNum}" class="cell red" onclick="toggle(this)">
  </div>`
}

function createRow(rowNum) {
  return `
  <div id="row-${rowNum}" class="row">
  ${createCell(rowNum, 1)}
  ${createCell(rowNum, 2)}
  ${createCell(rowNum, 3)}
  ${createCell(rowNum, 4)}
  ${createCell(rowNum, 5)}
  ${createCell(rowNum, 6)}
  ${createCell(rowNum, 7)}
  ${createCell(rowNum, 8)}
</div>
  `
}

function createBoard() {
  return `
  ${createRow(1)}
  ${createRow(2)}
  ${createRow(3)}
  ${createRow(4)}
  ${createRow(5)}
  ${createRow(6)}
  ${createRow(7)}
  ${createRow(8)} 
  `
}