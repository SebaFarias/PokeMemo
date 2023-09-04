const BOARD_SIZE = '80vmin'
const CARDS_ROWS = 3
const CARDS_COLS = 4
const CARD_BG = 'cyan-100'
const CARD_BORDER_COLOR = 'cyan-200'
const CARD_BORDER_SIZE = '4'


const LoadingBoard = () => <div
  className={`animate-pulse w-[${BOARD_SIZE}] h-[${BOARD_SIZE}] m-auto grid gap-2 
  grid-cols-${CARDS_COLS} grid-rows-${CARDS_ROWS}`}
>
  {[...Array(CARDS_COLS*CARDS_ROWS)].fill(
    <div 
      className={`bg-${CARD_BG} rounded border-${CARD_BORDER_COLOR} border-${CARD_BORDER_SIZE}`}
    />
  )}
</div>

export default LoadingBoard