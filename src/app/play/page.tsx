import { NextPage } from "next";
import Board from "~/components/Board/Board";

export interface PlayPageProps{

}

const PlayPage:NextPage<PlayPageProps> = props => {
  return <Board/>
}

export default PlayPage