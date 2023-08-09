import { 
  BOARD_SIZE,
  CARDS_COLS,
  CARDS_ROWS,
  CARD_BG,
  CARD_BORDER_COLOR,
  CARD_BORDER_SIZE,
} from './consts'


const LoadingBoard = () => <div
  className={`animate-pulse w-[${BOARD_SIZE}] h-[${BOARD_SIZE}] m-auto grid gap-2 
  grid-cols-${CARDS_COLS} grid-rows-${CARDS_ROWS}`}
>
  {[...Array(10)].fill(
    <div 
      className={`bg-${CARD_BG} rounded border-${CARD_BORDER_COLOR} border-${CARD_BORDER_SIZE}`}
    />
  )}
</div>

export default LoadingBoard