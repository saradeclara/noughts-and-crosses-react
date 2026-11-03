# Noughts & Crosses

A classic 3×3 noughts and crosses game, played hot-seat between two people or by one person against the computer.

## Language

### The game

**Game**:
A single play from an empty Board to a Win or a Draw. There is no series or running score across Games.
_Avoid_: Match, round, session

**Mark**:
The symbol a player places: `X` or `O`. X always moves first.
_Avoid_: Nought, cross, piece, token, symbol

**Move**:
Placing the Mark whose turn it is into an empty Cell.
_Avoid_: Turn, play, click

**New Game**:
Abandoning the current Game, whatever its status, and starting an empty one with a chosen Setup.
_Avoid_: Reset, restart

### Players and setup

**Mode**:
Who plays the two Marks: **Two Player** (both are Humans) or **vs Computer** (one Human, one Computer).
_Avoid_: Hot-seat, PvP, PvC, single-player

**Human**:
A person controlling a Mark.
_Avoid_: Player (when the side matters), user

**Computer**:
The side that plays one Mark perfectly in vs Computer mode. It never loses.
_Avoid_: AI, bot, CPU, opponent

**Setup**:
The choices fixed for the whole of a Game: its Mode and, in vs Computer, which Mark the Human plays. Every Game has exactly one Setup.
_Avoid_: Settings, config, options

### The board

**Board**:
The 3×3 grid of nine Cells on which a Game is played.
_Avoid_: Grid, field

**Cell**:
One of the nine places on the Board, identified by its index 0–8 in reading order. It is either empty or holds one Mark.
_Avoid_: Square, space, tile, position

**Line**:
Any of the eight sets of three Cells (three rows, three columns, two diagonals) that win the Game when one Mark fills them.
_Avoid_: Row (when the Line could be a column or diagonal), triple, winning combination

### Outcomes

**Win**:
The outcome of a Game in which one Mark fills a Line. The Win records the winning Mark and that Line.
_Avoid_: Victory

**Draw**:
The outcome of a Game in which every Cell is filled and no Mark has filled a Line.
_Avoid_: Tie, cat's game, stalemate
