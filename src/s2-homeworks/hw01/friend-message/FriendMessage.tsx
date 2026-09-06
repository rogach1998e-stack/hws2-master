import React from 'react'
import s from './FriendMessage.module.css'
import { MessageType } from '../HW1'

export type FriendMessagePropsType = {
    message: MessageType
}
// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessagePropsType) => {
    return (
        <div id={'hw1-friend-message'} className={s.friendMessage}>
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-0'}
                    src={props.message.user.avatar}
                    alt={'avatar'}
                />
                <div className={s.friendText}>
                    <div id={'hw1-friend-name-0'} className={s.friendName}>
                        {props.message.user.name}
                    </div>
                    <pre id={'hw1-friend-text-0'} className={s.friendMessageText}>
                        {props.message.message.text}
                    </pre>
                </div>
            </div>
            <div id={'hw1-friend-time-0'} className={s.friendTime}>
                {props.message.message.time}
            </div>
        </div>
    )
}

export default FriendMessage
