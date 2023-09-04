const SessionLoader = () => { 
  return(
    <>
      <span>
        Loading...
      </span>
      <div
        className="animate-spin w-8 h-8 rounded-full border-s-yellow-400"
        role="status"
      />
    </>
  )
}

export default SessionLoader