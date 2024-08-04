let selectedCells = [];

function startGame() {
    document.getElementById('gameContent').style.display = 'block';
    document.getElementById('cardContent').style.display = 'none';
    document.getElementById('initialMessage').style.display = 'none';
    document.querySelector('button').style.display = 'none'; // Hide the initial button

    // Add event listeners to each cell
    document.querySelectorAll('.word-search-row span').forEach(cell => {
        cell.addEventListener('click', () => toggleCellSelection(cell));
    });
}

function toggleCellSelection(cell) {
    if (cell.classList.contains('selected')) {
        cell.classList.remove('selected');
        selectedCells = selectedCells.filter(selectedCell => selectedCell !== cell.id);
    } else {
        cell.classList.add('selected');
        selectedCells.push(cell.id);
    }
}

function checkWordSearch() {
    // Define the correct answers and their IDs
    const correctAnswerIds = [
        'cell-0', 'cell-1', 'cell-2', 'cell-3', 'cell-4', 'cell-5', // AUGUST
        'cell-7', 'cell-8', // 04
        'cell-12', 'cell-13', 'cell-14', 'cell-15' // 2006
    ];
    
    // Check if all selected cells are correct
    const allCorrect = correctAnswerIds.every(id => selectedCells.includes(id));
    const allSelected = selectedCells.length === correctAnswerIds.length;

    if (allCorrect && allSelected) {
        document.getElementById('wordSearchMessage').textContent = 'Congratulations! You found all the words!';
        document.getElementById('gameContent').style.display = 'none';
        document.getElementById('cardContent').style.display = 'block';
    } else {
        document.getElementById('wordSearchMessage').textContent = 'Try again!';
    }
}

function goHome() {
    // Show the initial content and hide the card
    document.getElementById('cardContent').style.display = 'none';
    document.getElementById('initialMessage').style.display = 'block';
    document.querySelector('button').style.display = 'block'; // Show the button
}

