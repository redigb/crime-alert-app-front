import { Spinner } from "@material-tailwind/react"

const SpinnerSuspense = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-background">
      <Spinner className="h-20 w-20 border-primary border-solid border-t-transparent" />
      {/*<div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div*/}
    </div>
  )
}

export default SpinnerSuspense;