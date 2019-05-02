$(document).ready(function () {
console.log('document is ready')
console.log('please work')
$('#board-container').html(createBoard())
createCheckers()
    $('.checker').click(selectChecker)
    
    })

    function MoveselectedCheckerHere() {
if(selectedChecker) {
    let blackCell = $(this)
    let id = blackCell.attr('id')
    console.log(`id:`, id)
    let idParts = id.split('-')

    selectedChecker.row = idParts [1]
    selectedChecker.cell = idParts [2]

if (selectedChecker.color == `black` && selectedChecker.row == 1) {
    
    selectedChecker.isKing = true
}
else if (selectedChecker.color == `red` && selectedChecker.row == 8) {
    selectedChecker.isKing = true
}




    selectedChecker = undefined
    createCheckers() 
    
  
}

else {
    console.log(`No checker Selected`)
}
    }