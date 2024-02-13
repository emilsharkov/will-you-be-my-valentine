export interface ReactionProps {
    imageSource: string;
    audioSource: string;
    message: string;
}

const Reaction = (props: ReactionProps) => {
    const {imageSource,audioSource,message} = props

    return (
        <div className="flex flex-col items-center">
            <div className="text-2xl mt-5 text-center">{message}</div>
            <img className="w-[500px] max-w-[500px] max-h-[500px]" src={imageSource}/>
            <audio autoPlay loop src={audioSource}/>
        </div>
    )
}

export default Reaction