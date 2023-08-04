import AuthBtns from "./AuthBtns"

export interface AppBarProps{
}
const AppBar:React.FunctionComponent<AppBarProps> = props => {
  return(
    <header className="flex">
      header
      <AuthBtns/>
    </header>
  )
} 

export default AppBar