import { FC, useEffect, useRef, useState } from "react"
import { ITime } from "../../utils/base-models"

interface ITimer {
    enable?: boolean
    pause?: boolean
    defualtTime?: ITime
    updateTime: (value: ITime) => void
}

export const Timer: FC<ITimer> = ({
    enable = false,
    pause = false,
    defualtTime,
    updateTime
}) => {

    const timeInterval = useRef<any>(null)
    const [time, setTime] = useState({
        minute: 0,
        seconds: 0
    })

    const onUpdateTime = (defualtTime?: ITime) => {
        setTime((prevData) => {
            const { seconds, minute } = defualtTime ? defualtTime : prevData;
            const secondsTemp = seconds === 59 ? 0 : seconds + 1;
            const minuteTemp = minute === 59 && seconds === 59 ? 0 : (seconds === 59 ? minute + 1 : minute);
            updateTime({
                seconds: secondsTemp,
                minute: minuteTemp,
            })
            return {
                seconds: secondsTemp,
                minute: minuteTemp,
            }
        })
    }

    useEffect(() => {
        if (
            defualtTime !== undefined &&
            JSON.stringify(defualtTime) !== JSON.stringify(time)
        ) {
            onUpdateTime(defualtTime)
        }
    }, [defualtTime])

    useEffect(() => {
        if (enable && !pause) {
            timeInterval.current = setInterval(onUpdateTime, 1000)

            return () => {
                return clearInterval(timeInterval.current)
            }
        }
        if ((!enable || pause) && timeInterval.current) {
            clearInterval(timeInterval.current)
        }
    }, [enable, pause])


    const formatTime = (time: number) => {
        if (time < 10) {
            return `0${time}`
        } else {
            return time;
        }
    }



    return (
        <time className="timer">
            <span>
                {formatTime(time.minute)}
            </span>
            :
            <span>
                {formatTime(time.seconds)}
            </span>
        </time>
    )
}