import { useEffect, useRef, useState } from "react"
import Reaction from "./components/Reaction"
import { Button } from "./components/ui/button"
import { yesReactions } from "@/assets/yesReactions"
import ValentineQuestion from '@/assets/be-my-valentine.jpg'
import { noReactions } from "./assets/noReactions"

const App = () => {
  const [yesCount,setYesCount] = useState<number>(-1)
  const [noCount,setNoCount] = useState<number>(-1)
  const [buttonSize,setButtonSize] = useState<number>(0)
  const yesLastClicked = useRef<boolean>(false)
  const currentCount = yesLastClicked.current ? yesCount: noCount
  const currentReactions = yesLastClicked.current ? yesReactions: noReactions

  const toggleYes = () => {
    setYesCount(yesCount+1)
    yesLastClicked.current = true
  }

  const toggleNo = () => {
    setButtonSize(buttonSize + 1)
    setNoCount(noCount+1)
    yesLastClicked.current = false
  }

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold">Will You Be My Valentine???</h1>
        
        {noCount + yesCount > -2 && currentReactions.length && currentCount < currentReactions.length ? (
          <Reaction 
            audioSource={currentReactions[currentCount].audioSource} 
            imageSource={currentReactions[currentCount].imageSource} 
            message={currentReactions[currentCount].message} 
          />): (
            <img src={ValentineQuestion}/>
          )
        }

        <div className="flex flex-row">
          {yesCount !== yesReactions.length ? (
            <Button
              style={{width: `${100 + buttonSize * 5}px`, height: `${40 + buttonSize * 2}px`}} 
              onClick={() => toggleYes()}
            >
              {yesCount === -1 ? 'Yes': 'Continue'}
            </Button>): null
          }
          {yesCount === -1 && noCount !== noReactions.length ? (
            <Button 
              style={{width: `${100 - buttonSize * 5}px`, height: `${40 - buttonSize * 2}px`}}
              onClick={() => toggleNo()}
            >
              <>No</>
            </Button>
            ): null
          }
          {yesCount === yesReactions.length ? <div className="text-xl">Thanks for picking yes!!!!!</div> : null}
        </div>
      </div>
    </>
  )
}

export default App
