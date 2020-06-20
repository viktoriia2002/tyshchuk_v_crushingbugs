(() => {
	// set up the puzzle pieces and boards
	const puzzleButtons = document.querySelectorAll('#buttonHolder img'),

				puzzlePieces = document.querySelectorAll('.puzzle-image'),
				dropZones = document.querySelectorAll('.drop-zone'),
				gameBoard = document.querySelector('.puzzle-board');
				zonePieces = document.querySelector('.puzzle-pieces');

 const piecesNames = ["topLeft", "topRight", "bottomLeft", "bottomRight"];

	function changeImageSet() {

		piecesNames.forEach((piece, index)=> {
			puzzlePieces[index].src = `images/${piece + this.dataset.bgkey}.jpg`;
		});

		gameBoard.style.backgroundImage = `url(images/backGround${this.dataset.bgkey}.jpg)`;
	}

	function allowDrag(event) {
		console.log('started dragging an image:this one - ', event.target.id);
  	event.dataTransfer.setData("draggedImg", this.id);
}

	function allowDragOver(event) {
		event.preventDefault();
		console.log('dragged something over me!');
	}

	function allowDrop(event) {

		if (this.children.length >= 1){

			return;
		}
		console.log('dropped a piece of image');
		let droppedImage = event.dataTransfer.getData("draggedImg");
		event.target.appendChild(document.querySelector(`#${droppedImage}`));
	}




	puzzleButtons.forEach(button =>
{
			button.addEventListener('click', changeImageSet);
		


	function resetPuzzle(){
		for (let loop = 0; loop < puzzlePieces.length; loop = loop + 1){
			zonePieces.appendChild(puzzlePieces[loop]);
		}
	}

	puzzleButtons.forEach(button =>
{
			button.addEventListener('click', changeImageSet);
			button.addEventListener('click', resetPuzzle);


	});
	puzzlePieces.forEach(piece => piece.addEventListener('dragstart', allowDrag));

	dropZones.forEach(zone => {
		zone.addEventListener('dragover', allowDragOver);
		zone.addEventListener('drop', allowDrop);

	//for (zone in dropZones){
		//zone.addEventListener('dragover', allowDragOver);
		//zone.addEventListener('drop', allowDrop);
	});

	// research call, apply and bind
	changeImageSet.call(puzzleButtons[0]); // emulates a click on the first bottom button
})();
